var express = require("express"),
pg = require('pg'),
connectionString = process.env.DATABASE_URL || 'postgres://eschwartz@localhost:5432/';


var app = express();
// app.use(express.logger());
app.use(express.bodyParser());

function returnSimilarBeers(rows, express_response) {
	// console.log(rows);
	var to_send = []
	for (var r = 0; r < rows.length; r++ ) {
		var row = rows[r];
		var name_link = "<a href='" + row["link"] + "'>" + row["name"] + '</a>';
		// var beer_number = row["link"].match(/\d+\/\?sort/)[0];
		// beer_number = beer_number.substring(0, beer_number.indexOf('/')),
		// image_link = "<img src='http://beeradvocate.com/im/beers/" + beer_number + "'>";
		to_send.push({
			"Name" : name_link
			, "Brewery" : row["brewery"]
			, "Style" : row["style"]
			, "BeerAdvocate Rating" : row["rating"]
			// , "Image" : image_link
		});
	}
	express_response.send(to_send);
}


function findSimilarBeersTo(db_client, quality_averages, express_response) {

	// rank the categories in order of their importance
	var qualities = [];
	for (property in quality_averages) {
		qualities.push({"property" : property, "average" : quality_averages[property]});
	}
	// console.log(qualities);
	qualities.sort(function(a, b){return Math.abs(b.average) - Math.abs(a.average)});
	// console.log(qualities);

	// construct the query string based off the prioritized quality list
	var search_ranges = [.075, .1, .15, .2, .3, .4];

	var query_string = "select * from alcoholgenome where (";
		for (var q = 0; q < qualities.length; q++) {
			if (qualities[q].average < 0) {
				query_string += "(" + qualities[q].property + "<=" + (qualities[q].average + search_ranges[q]) + ") and ";
			} else {
				query_string += "(" + qualities[q].property + ">=" + (qualities[q].average - search_ranges[q]) + ") and ";

			}

		}
		query_string = query_string.substring(0, query_string.length - 4) + ") order by rating desc";

// console.log(query_string);
db_client.query(query_string, function(err, result) {
	if (err) throw err;
	
		returnSimilarBeers(result.rows, express_response);
	
});
}


function searchForSimilarBeers(db_client, beer_names, express_response) {

	var query_string = "select * from alcoholgenome where (";
		for (var n = 1; n < beer_names.length + 1; n++){
			query_string = query_string + "(name=$" + (2 * n - 1) + " and " + "brewery=$" + (2 * n) + ") or "; 
		}
		query_string = query_string.substring(0, query_string.length - 4) + ")";

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

		var quality_averages = {"light" : 0, "dark" : 0, "sweet" : 0, "fruit" : 0, "carbonation" : 0, "spice" : 0};

		for (var r = 0; r < result.rowCount; r++) {
			for (property in quality_averages) {
				quality_averages[property] += parseFloat(result.rows[r][property]);
			}
		}
		for (property in quality_averages) {
			quality_averages[property] = quality_averages[property]/result.rowCount
		}

		findSimilarBeersTo(db_client, quality_averages, express_response);

	}
});

// query.on('end', function() {
// 	db_client.end();
// });
}



app.get('/get_beer_list', function(req, res) {

	var outer_res = res;

	pg.connect(connectionString, function (err, client) {
		var query = client.query("select name, brewery from alcoholgenome", function (err, result){
			if (err) throw err;
			if (result) {

				var name_list = [];
				for (var b = 0; b < result.rowCount; b++){
					var list_entry = result.rows[b]["name"] + " - " + result.rows[b]["brewery"]
					name_list.push(list_entry);
				}
				name_list.sort();

				outer_res.send(name_list);
			}
		});

		// query.on('end', function(){
		// 	client.end();
		// });

});

	
	
});

app.post('/search', function(req, res) {
	
	var search_beer_names = req.body.search_items,
	express_response = res;

	if (search_beer_names.length > 0) {
		pg.connect(connectionString, function (err, client) {
			searchForSimilarBeers(client, search_beer_names, express_response);
		});
	}
});




app.use(express.static(__dirname + '/public/'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});