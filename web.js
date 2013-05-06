var express = require("express"),
pg = require('pg'),
connectionString = process.env.DATABASE_URL || 'postgres://eschwartz@localhost:5432/';

pg.defaults.poolSize = 10000;

var app = express();
app.use(express.bodyParser());



function returnSimilarBeers(rows, express_response, db_client) {
	var to_send = []
	for (var r = 0; r < rows.length; r++ ) {
		var row = rows[r];
		var name_link = "<a href='" + row["link"] + "'>" + row["name"] + '</a>';
		to_send.push({
			"Name" : name_link
			, "Brewery" : row["brewery"]
			, "Style" : row["style"]
			, "Score": row["score"]
		});
	}
	express_response.send(to_send);
	db_client.end();
}



function sortBeerResults(quality_averages, rows) {
	for (var r = 0; r < rows.length; r++){
		var row = rows[r];
		var diff_score = 0;
		var category_weights = [.8, .6, .4, .2, 0];
		// console.log(row);
		for (var q = 0; q < 5; q++) {
			var quality = Object.keys(quality_averages)[q];
			diff_score += category_weights[q] * Math.abs(quality_averages[quality] - row[quality]);
		}

		if (row.rating < 90){
			diff_score += (90 - row.rating);
		}

		var final_score = Math.round(100 - (diff_score / 1.3 ));
		row.score = Math.round(final_score / 10);
	}

	rows.sort(function(a, b){return b.score - a.score});

	return rows;
}

function removeSearchedForAndLowRatedBeers (beers, searched_beer_names) {
	var to_return = [];
	for (var b = 0; b < beers.length; b++) {
		if (beers[b].rating < 75)
			continue;
		if (beers[b].score < 5)
			continue;
		if (searched_beer_names.indexOf(beers[b].name + " - " + beers[b].brewery) != -1) 
			continue;

		to_return.push(beers[b]);
	}
	return to_return;
}

// function addExplanations (qualities, beers) {
// 	var scale_categories = ["light", "dark", "bitter", "sweet", "fruit"],
// 	binary_categories = []

// 	var modifiers_and_maxes = {
// 		"a bit": 20,
// 		"somewhat": 40
// 		"moderately": 60,
// 		"very": 90,
// 		"extremely": 100
// 	}
// 	console.log(qualities);

// 	for (var b = 0; b < beers.length; b++) {
// 		var explanation = "We think you'll love this beer because it is ";

// 		// console.log(beers[b])
// 	}

// 	return beers;
// }

function findSimilarBeersTo(db_client, beer_names, quality_averages, express_response) {
	// console.log(quality_averages);
	var qualities = [];
	for (property in quality_averages) {
		qualities.push({"property" : property, "average" : quality_averages[property]});
	}
	qualities.sort(function(a, b){return Math.abs(b.average) - Math.abs(a.average)});

	var quality_ranges = [25, 35, 45, 65, 120];

	var query_string = "select distinct * from alcoholgenome where (";
		query_string += "(numreviews >= 100) and ";
		for (var q = 0; q < 5; q++) {
			query_string += "(" + qualities[q].property + "<=" + (qualities[q].average + quality_ranges[q]) + ") and ";
			query_string += "(" + qualities[q].property + ">=" + (qualities[q].average - quality_ranges[q]) + ") and ";
		}

		for (var q = 5; q < 10; q++) {
			query_string += "(" + qualities[q].property + "<=" + (qualities[q].average + .99) + ") and ";
			query_string += "(" + qualities[q].property + ">=" + (qualities[q].average - .99) + ") and ";
		}

		query_string = query_string.substring(0, query_string.length - 4) + ")";
		// query_string += "order by rating desc limit 100";

var query = db_client.query(query_string, function(err, result) {
	if (err) throw err;
	
	var sorted_beers = sortBeerResults(quality_averages, result.rows);
	sorted_beers = removeSearchedForAndLowRatedBeers(sorted_beers, beer_names);
	sorted_beers = sorted_beers.slice(0, 50);
	// qualities.sort(function(a, b){return b.average - a.average});
	// sorted_beers = addExplanations(qualities, sorted_beers);
	returnSimilarBeers(sorted_beers, express_response, db_client);
	
});
}



function searchForSimilarBeers(db_client, beer_names, express_response) {
	var query_string = "select distinct * from alcoholgenome where (";
		for (var n = 1; n < beer_names.length + 1; n++){
			query_string = query_string + "(name=$" + (2 * n - 1) + " and " + "brewery=$" + (2 * n) + ") or "; 
		}
		query_string = query_string.substring(0, query_string.length - 4); 
		query_string += ")";

var query_values = [];
for (var n = 0; n < beer_names.length; n++) {
	var divider_loc = beer_names[n].indexOf(' - ');
	var name = beer_names[n].substring(0, divider_loc),
	brewery = beer_names[n].substring(divider_loc + 3);
	query_values.push(name);
	query_values.push(brewery);
}

var query = db_client.query(query_string, query_values, function(err, result) {
	if (err) throw err;

	if (result) {
		var quality_averages = {
			"lightscore" : 0, 
			"darkscore" : 0,
			"fruitscore" : 0,
			"sweetscore" : 0, 
			"bitterscore" : 0,
			"carbonationscore" : 0, 
			"roastedscore" : 0,
			"spicescore" : 0,
			"sourscore" : 0,
			"smokeyscore" : 0
		};

		for (var r = 0; r < result.rowCount; r++) {
			for (property in quality_averages) {
				quality_averages[property] += parseFloat(result.rows[r][property]);
			}
		}
		for (property in quality_averages) {
			quality_averages[property] = quality_averages[property]/result.rowCount;
		}
		findSimilarBeersTo(db_client, beer_names, quality_averages, express_response);
	}
});
}








app.get('/get_beer_list', function(req, res) {

	var outer_res = res;
	var name_list = [];
	// console.log("Server caught GET request /get_beer_list");

	pg.connect(connectionString, function (err, client) {
		var query = client.query("select distinct name, brewery from alcoholgenome order by name asc");

		query.on('row', function (row) {
			name_list.push(row.name + " - " + row.brewery);
		});
		
		query.on('end', function() {
			outer_res.send(name_list);
			console.log("ending client");
			client.end();
		});
	});
});




app.post('/search', function(req, res) {
	var search_beer_names = req.body.search_items;
	if (search_beer_names.length > 0) {
		pg.connect(connectionString, function (err, client) {
			searchForSimilarBeers(client, search_beer_names, res);
		});
	} else {
		res.send({});
	}
});


// app.get('/', function(req, res){

// });

app.get('/', function(req, res) {
	res.redirect('beer.html')
});



app.use(express.static(__dirname + '/public/'));



var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});