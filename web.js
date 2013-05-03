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
	console.log(quality_averages);
	console.log(rows);
}



function findSimilarBeersTo(db_client, quality_averages, express_response) {
	console.log(quality_averages);
	var qualities = [];
	for (property in quality_averages) {
		qualities.push({"property" : property, "average" : quality_averages[property]});
	}
	qualities.sort(function(a, b){return Math.abs(b.average) - Math.abs(a.average)});

	var query_string = "select * from alcoholgenome where (";
		for (var q = 0; q < 5; q++) {
			query_string += "(" + qualities[q].property + "<=" + (qualities[q].average + 25) + ") and ";
			query_string += "(" + qualities[q].property + ">=" + (qualities[q].average - 25) + ") and ";
		}

		for (var q = 5; q < 10; q++) {
			query_string += "(" + qualities[q].property + "<=" + (qualities[q].average + .99) + ") and ";
			query_string += "(" + qualities[q].property + ">=" + (qualities[q].average - .99) + ") and ";
		}

		query_string = query_string.substring(0, query_string.length - 4) + ") order by rating desc limit 100";

var query = db_client.query(query_string, function(err, result) {
	if (err) throw err;
	
	var sorted_beers = sortBeerResults(quality_averages, result.rows);
	// returnSimilarBeers(sorted_beers, express_response, db_client);
	
});
}



function searchForSimilarBeers(db_client, beer_names, express_response) {
	var query_string = "select * from alcoholgenome where (";
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
		var quality_averages = {"lightscore" : 0, "darkscore" : 0, "sweetscore" : 0, "fruitscore" : 0, "carbonation" : 0, "spice" : 0};

		for (var r = 0; r < result.rowCount; r++) {
			for (property in quality_averages) {
				quality_averages[property] += parseFloat(result.rows[r][property]);
			}
		}
		for (property in quality_averages) {
			quality_averages[property] = quality_averages[property]/result.rowCount;
		}
		findSimilarBeersTo(db_client, quality_averages, express_response);
	}
});
}



app.get('/get_beer_list', function(req, res) {

	var outer_res = res;
	var name_list = [];
	console.log("Server caught GET request /get_beer_list");

	pg.connect(connectionString, function (err, client) {
		var query = client.query("select name, brewery from alcoholgenome order by name asc");

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



app.use(express.static(__dirname + '/public/'));



var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});