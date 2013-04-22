var fs = require('fs'),
pg = require('pg'),
connectionString = process.env.DATABASE_URL || 'postgres://eschwartz@localhost:5432/';


pg.connect(connectionString, function(err, client){
	if (err) throw err;

	var file_writer = fs.createWriteStream("beers.min.js", {flags: 'w'});

	client.query("select brewery from alcoholgenome", function (err, breweries){
		if (err) throw err;

		for (var r = 0; r < breweries.rowCount; r++){
			var brewery = breweries.rows[r].brewery;
			client.query("select name from alcoholgenome where (brewery=$1)", [brewery], function(err, beers){
				if (err) throw err;

				var breweries_and_beers = {"Brewery": brewery, "Beers":[]};

				for (var b = 0; b < beers.rowCount; b++) {
					breweries_and_beers["Beers"].push(beers.rows[b]["Name"]);
				}

				file_writer.write(JSON.stringify(breweries_and_beers) + ", ");
			});

			

		}



	});
});




