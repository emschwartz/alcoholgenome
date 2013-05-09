var express = require("express"),
pg = require('pg'),
connectionString = process.env.DATABASE_URL || 'postgres://eschwartz@localhost:5432/',
beerSearcher = require('./beerSearch.js');

pg.defaults.poolSize = 10000;

var app = express();
app.use(express.bodyParser());


var name_list = [];


app.get('/get_beer_list', function(req, res) {
	if (name_list.length == 0) {
	pg.connect(connectionString, function (err, client) {
		var query = client.query("select distinct name, brewery from alcoholgenome order by name asc");

		query.on('row', function (row) {
			name_list.push(row.name + " - " + row.brewery);
		});
		
		query.on('end', function() {
			res.send(name_list);
			// console.log("ending client");
			client.end();
		});
	});
} else {
	res.send(name_list);
}
});


app.post('/search', function(req, res) {
	var search_beer_names = req.body.search_items;
	if (search_beer_names.length > 0) {
		pg.connect(connectionString, function (err, client) {
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