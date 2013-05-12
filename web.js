var express = require("express"),
pg = require('pg'),
connectionString = process.env.DATABASE_URL || 'postgres://eschwartz@localhost:5432/',
beerSearcher = require('./beerSearch.js');

pg.defaults.poolSize = 100000;

var app = express();
app.use(express.bodyParser());


var beer_list = [];


app.get('/get_beer_list', function(req, res) {
	if (beer_list.length == 0) {
	pg.connect(connectionString, function (err, client) {
		var query = client.query("select distinct * from alcoholgenome order by name asc");
		var index = 0;
		query.on('row', function (row) {
			beer_list.push({"id":row.name.replace('&amp;', '&') + " - " + row.brewery.replace('&amp;', '&'), "text": row.name.replace('&amp;', '&') + " - " + row.brewery.replace('&amp;', '&')});
		});
		
		query.on('end', function() {
			// console.log(beer_list);
			res.send(beer_list);
			// console.log("ending client");
			client.end();
		});
	});
} else {
	res.send(beer_list);
}
});


app.post('/search', function(req, res) {
	// var search_beer_nums = req.body.search_items;
	// if (search_beer_nums.length > 0) {
	// 	var search_beer_names = [];
	// 	for (var b = 0; b < search_beer_nums.length; b++) {
	// 		search_beer_names.push(beer_list[search_beer_nums[b]].text);
	// 	}
	var search_beer_names = req.body.search_items;
	if (search_beer_names.indexOf(',') != -1) {
		search_beer_names = search_beer_names.split(',');
	} else {
		search_beer_names = [search_beer_names];
	}
	// console.log(search_beer_names);
	if (search_beer_names.length > 0) {
		pg.connect(connectionString, function (err, client) {
			for (var b = 0; b < search_beer_names.length; b++) {
				search_beer_names[b] = search_beer_names[b].replace('&', '&amp;');
			}
			// console.log(search_beer_names);
			beerSearcher.search(search_beer_names, client, res);
		});
	} else {
		res.send({});
	}
});


app.get('/', function(req, res) {
	res.redirect('beer.html')
});



app.use(express.static(__dirname + '/public/'));



var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});