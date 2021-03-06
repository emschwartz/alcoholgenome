var scaled_categories = [],
	binary_categories = [];


function search (search_beer_names, results_start, num_results, db_client, express_response) {
	
	var first_query = queryForSelectedBeers(search_beer_names);
	db_client.query(first_query.string, first_query.values, function(err, result){
		if (result == undefined || result.rowCount == 0) {
			express_response.send({});
		} else {
			var searched_beers = result.rows,
			beers_avg = averageBeerQualities(searched_beers),
			second_query_string = queryForSimilarBeerSearch(beers_avg);
			db_client.query(second_query_string, function(err, result) {
				if (result == undefined || result.rowCount == 0) {
					express_response.send({});
				} else {
					var similar_beers = scoreAndSortBeers(result.rows, beers_avg);
					var selected_beers = similar_beers.slice(results_start, (results_start + num_results));
					selected_beers = addExplanationsToBeers(selected_beers, beers_avg);

					express_response.send(selected_beers);
				}	
			});
		}
	});
}



function queryForSelectedBeers (search_beer_names) {
	var query_string = "select distinct * from alcoholgenome where (";
	for (var n = 1; n < search_beer_names.length + 1; n++){
		query_string = query_string + "(name=$" + (2 * n - 1) + " and " + "brewery=$" + (2 * n) + ") or "; 
	}
	query_string = query_string.substring(0, query_string.length - 4); 
	query_string += ")";

	var query_values = [];
	for (var n = 0; n < search_beer_names.length; n++){
		var divider_loc = search_beer_names[n].indexOf(' - ');
		var name = search_beer_names[n].substring(0, divider_loc),
		brewery = search_beer_names[n].substring(divider_loc + 3);
		query_values.push(name);
		query_values.push(brewery);
	}

	return {"string": query_string, "values": query_values};

}



function averageBeerQualities (searched_beers) {
	var avg = {"beer_exclude_list": [], "scaled_avgs": {}, "scaled_order": [], "binary_avgs":{}};
	
	if (scaled_categories.length == 0) {
		scaled_categories = Object.keys(searched_beers[0]).filter(function(x) {return String(x).search('scaled') != -1});
		binary_categories = Object.keys(searched_beers[0]).filter(function(x) {return String(x).search('binary') != -1});
	}
	var scaled_totals = {},
		binary_totals = {};
	for (var c = 0; c < scaled_categories.length; c++) {
		scaled_totals[scaled_categories[c]] = 0;
	}
	for (var c = 0; c < binary_categories.length; c++) {
		binary_totals[binary_categories[c]] = 0;
	}

	for (var b = 0; b < searched_beers.length; b++) {
		avg.beer_exclude_list.push((searched_beers[b].name + " - " + searched_beers[b].brewery));

		for (var c = 0; c < scaled_categories.length; c++) {
			var cat = scaled_categories[c];
			scaled_totals[cat] += searched_beers[b][cat];
		}
		for (var c = 0; c < binary_categories.length; c++) {
			var cat = binary_categories[c];
			binary_totals[cat] += searched_beers[b][cat];
		}
	}

	for (var c = 0; c < scaled_categories.length; c++) {
		var cat = scaled_categories[c];
		avg.scaled_avgs[cat] = scaled_totals[cat] / searched_beers.length; 
	}
	avg.scaled_order = scaled_categories.sort(function(a, b) {
		return Math.abs(avg.scaled_avgs[b]) - Math.abs(avg.scaled_avgs[a]);
	});

	for (var c = 0; c < binary_categories.length; c++) {
		var cat = binary_categories[c];
		avg.binary_avgs[cat] = binary_totals[cat] / searched_beers.length; 
	}

	return avg;
}



function queryForSimilarBeerSearch (beers_avg) {
	var scaled_category_ranges = {};
	for (var c = 0; c < beers_avg.scaled_order.length; c++) {
		var cat = beers_avg.scaled_order[c];
		scaled_category_ranges[cat] = 20 + 10 * Math.pow(2, c - 1); 
	}

	var query_string = "select distinct * from alcoholgenome where (";
		query_string += "(numreviews >= 100) and (rating >= 75) and ";
	// for (var b = 0; b < beers_avg.beer_exclude_list.length; b++) {
	// 	var excl = beers_avg.beer_exclude_list[b];
	// 	query_string += "(not (name='" + excl.name.replace("'", "\'") + "' and brewery='" + excl.brewery.replace("'", "\'") + "')) and ";
	// }
	var query_values = [];
	for (var c = 0; c < beers_avg.scaled_order.length; c++) {
		var cat = beers_avg.scaled_order[c],
			cat_avg = beers_avg.scaled_avgs[cat],
			cat_range = 20 + 10 * Math.pow(1.5, c - 1);
		query_string += "(" + cat + " between " + Math.min((cat_avg + cat_range), (cat_avg - cat_range)) + " and " + Math.max((cat_avg + cat_range), (cat_avg - cat_range)) + ") and ";
	}
	for (var c = 0; c < binary_categories.length; c++) {
		var cat = binary_categories[c],
			cat_avg = beers_avg.binary_avgs[cat],
			cat_range = .6;
		query_string += "(" + cat + " between " + Math.min((cat_avg + cat_range), (cat_avg - cat_range)) + " and " + Math.max((cat_avg + cat_range), (cat_avg - cat_range)) + ") and ";
	}

	query_string = query_string.substring(0, query_string.length - 4) + ")";
	return query_string;
}



function scoreAndSortBeers (similar_beers, search_avg) {
	for (var b = 0; b < similar_beers.length; b++){
		var diff_score = 0;

		for (var c = 0; c < search_avg.scaled_order.length; c++) {
			var cat = search_avg.scaled_order[c];
			var cat_weight = 1 - (.2 * (c + 1));
			if (cat_weight < 0) {
				cat_weight = 0;
			}
			diff_score += Math.abs(similar_beers[b][cat] - search_avg.scaled_avgs[cat]) * cat_weight;	
		}
		if (similar_beers[b].rating < 90){
			diff_score += (90 - similar_beers[b].rating);
		}

		var final_score = Math.round(100 - (diff_score / 1.3 ));
		similar_beers[b].score = Math.round(final_score / 10);
	}

	similar_beers.sort(function(a, b){return b.score - a.score});
	similar_beers = similar_beers.filter(function(b){
		if (b.score < 5) {
			return false;
		}
		if (search_avg.beer_exclude_list.indexOf(b.name + " - " + b.brewery) != -1) {
			return false;
		}
		return true;
	});
	return similar_beers;
}

function addExplanationsToBeers (similar_beers, beers_avg) {
	for (var b = 0; b < similar_beers.length; b++) {
		var love_or_like = "love";
		if (similar_beers[b].score < 9) {
			love_or_like = "like";
		}
		var explanation = "<div>Based on your search, we think you'll " + love_or_like + " this beer because it is ";
		for (var c = 0; c < binary_categories.length; c++) {
			var cat = binary_categories[c];
			if (similar_beers[b][cat] == 1) {
				cat = cat.substring(0, cat.length-7);
				explanation += '<b>' + cat + "</b>, ";
			}
		}
		for (var c = 0; c < beers_avg.scaled_order.length; c++) {
			var cat = beers_avg.scaled_order[c],
			cat_score = similar_beers[b][cat];
			cat = cat.substring(0, cat.length-7);
			if (cat == "bitter") {
				cat = "hoppy";
			} else if (cat == "sweet") {
				cat = "malty";
			}
			if (cat_score == 100) {
				explanation += "extremely ";
			} else if (cat_score >= 85) {
				explanation += "very ";
			} else if (cat_score >= 60) {
				explanation += "";
			} else if (cat_score >= 40) {
				explanation += "moderately ";
			} else if (cat_score >= 20) {
				explanation += "a little ";
			} else if (cat_score >= 10) {
				explanation += "a bit ";
			} else if (cat_score >= 0) {
				explanation += "just a tad ";
			}
			if (cat_score >= 0) {
				explanation += '<b>' + cat + "</b>, ";
			}
			
		}
		explanation = explanation.substring(0, explanation.length - 2);
		var last_comma = explanation.lastIndexOf(',');
		if (explanation.indexOf(',') == last_comma) {
			explanation = explanation.substring(0, last_comma) + " and" + explanation.substring(last_comma + 1);
		} else {
			explanation = explanation.substring(0, last_comma + 1) + " and" + explanation.substring(last_comma + 1);
		}
		// if (similar_beers[b].score == 10) {
		// 	explanation += " (and because it's an <i>excellent</i> beer)";
		// }
		explanation += ".</div>";
		similar_beers[b].explanation = explanation;
		// console.log(similar_beers[b]);
		// console.log(explanation);
	}
	// console.log(beers_avg);

	return similar_beers;
}

exports.search = search;