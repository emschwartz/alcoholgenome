var fs = require('fs')
, csv = require('csv')
, pg = require('pg');


var connectionString = process.env.DATABASE_URL || 'postgres://eschwartz@localhost:5432/';

function createInsertQueryStringForHeaders (headers) {	
	var query_string = 'insert into alcoholgenome (';
		for (var c = 0; c < headers.length; c++) {
			query_string += headers[c] + ", ";
		}
		query_string = query_string.substring(0, query_string.length - 2);
		query_string +=  ") values (";
		for (var c = 0; c < headers.length; c++) {
			query_string += "$" + (c + 1) + ", ";
		}
		query_string = query_string.substring(0, query_string.length - 2);
		query_string += ")";
return query_string;
}

function buildDBFromCSV (csv_filename) {

	pg.connect(connectionString, function (err, client) {

		var headers = [],
		insertQueryString;

		csv()
		.from.stream(fs.createReadStream(csv_filename))
		.on('record', function(row,index){
			if (row[0] != '') {
				if (index == 0) {
					headers = row;
					insertQueryString = createInsertQueryStringForHeaders(headers);
				} else {
					client.query(insertQueryString, row, function (err, result) {
				// don't throw errors here because some will void the constraint
				// that all entries be unique but that's okay
			});
				}
			} 

		})

		.on('end', function(count){
			console.log('# Beers Imported: '+count);
		})

		.on('error', function(error){
			throw error;
		})

	});


}

function saveDBtoJSON (csv_filename) {
	var to_save = {};

	csv()
		.from.stream(fs.createReadStream(csv_filename))
		.on('record', function(row,index){
			if (index > 0) {
				var brewery = row[1],
				beer = row[0];
				if (to_save[brewery] == undefined) {
					to_save[brewery] = [];
				}
				to_save[brewery].push(beer);
			} 

		})

		.on('end', function(count){
			console.log(JSON.stringify(to_save));
		})

		.on('error', function(error){
			throw error;
		})
}

saveDBtoJSON('dionysusDatabase_10000.csv');
