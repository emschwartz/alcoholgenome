var results_start,
results_per_page = 10,
div_height;

$(document).ready(function() {
	createSearchExampleButtons();
	$('#search').select2({
		placeholder: 'Loading up thousands of beers...',
		multiple: true,
		width: "100%",
		data: []
	});

	$.get('/get_beer_list', function(response) {
		var beer_list = response;
		$('#search').select2({
			placeholder: 'Enter one or more beers...',
			width: "100%",
			multiple: true,
			minimumInputLength: 3,
			data: beer_list,
			formatInputTooShort: function (term, minLength) {
				if (term.length < minLength) {
					return "To add a beer to your search, please type at least <b>" + (minLength-term.length) + "</b> more characters...";
				}
			},
			formatNoMatches: function (term) {
				return "We're sorry, we couldn't find anything by that name. Please try another!"
			}
		});

		div_height = $('#main').height();
		body_height = $('')
	});

	$("#search").change(function() {
		if ($("#search").select2("val").length == undefined || $("#search").select2("val") == '') {
			hideResults();
		} else {
			performSearch();
		}
	});
});


function createMailToLink(search_query, results) {
	var mailto = "mailto: ?subject=Dionysus%20Beer%20Recommendations&body=";
	var body = "When%20you%20searched%20the%20Alcohol%20Genome%20Project%20for:%0d%0d";
	body += search_query.replace(',', ', ');
	body += "%0d%0d%0dThe Top Recommendations Were:%0d%0d";
	for (var r = 0; r < results.length; r++) {
		if (body.length >= 1000) {
			break;
		}
		var name = results[r].name;
		name = encodeURI(name);
		var brewery = encodeURI(results[r].brewery);
		body += (r + 1) + ".%20" + name + "%20-%20" + brewery;
		body += "%0d";
	}
	body += "%0dFind%20the%20full%20results%20at%20http%3A%2F%2Falcoholgenome.com";
	body = body.replace(/&amp;/g, '%26')
	mailto += body;
	return mailto;
}

function createSearchExampleButtons() {
	var sponsored_beers = ['Samuel Adams Boston Lager - Boston Beer Company (Samuel Adams)', 'Sierra Nevada Pale Ale - Sierra Nevada Brewing Co.', 'Rampant Imperial IPA - New Belgium Brewing', 'Obsidian Stout - Deschutes Brewery', 'A Little Sumpin\' Sumpin\' Ale - Lagunitas Brewing Company'];

	function shuffle(o) {
		for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
	}
	sponsored_beers = shuffle(sponsored_beers);
	var examples_html = '<br>For example, try:<br><ul>';
	for (var ex = 0; ex < 3; ex++) {
		var ex_name = sponsored_beers[ex];
		examples_html += '<li><button class="btn btn-small search-example">' + ex_name + '</button></li>   ';
	}
	examples_html += '</ul>';
	$("#search-examples").html(examples_html);
	$(".search-example").click(function() {
		$(this).addClass("disabled");
		$("#search").select2("val", [$(this).text()]);
		performSearch();
	});
}

function hideResults() {
	$("#results").removeClass("visible");
	$("#results").addClass("invisible");
	$("#email").remove();
	createSearchExampleButtons();
	$("#main").height(div_height);
}

function performSearch() {
	results_start = 0;
	var search_query = $("#search").val(),
	to_send = { 
		"search_items": search_query,
		"results_start": results_start,
		"num_results": results_per_page
	};
	if (search_query != '') {
		$("#search-examples").html('');
	}
	$.post('/search', to_send, function(response) {
		var new_results = response;
		if (new_results.length == undefined) {
			hideResults();
		} else {
			displayResults(search_query, new_results);
		}
	});
}

function displayResults (search_query, new_results) {
	results_start += new_results.length;
	results_accordion = buildResultsAccordion(new_results);
	$("#main").css({"height": "auto"});

	$('#search_results').html(results_accordion);
	// $(".collapse").collapse('hide');
	// $("#collapse1").collapse('show');
	$('#collapse1').addClass('in');
	$("#show_more").click(function () {
		getMoreResults();
	});

	// $('.accordion-toggle').on('click',function(e){
 //    if($(this).parents('.accordion-group').children('.accordion-body').hasClass('in')){
 //        e.stopPropagation();
 //    }
// });

	// $('.like-rec-btn').popover({
	// 	"content": "Like this beer? Click here to let us know and we'll continue to improve our recommendations!",
	// 	"trigger": "hover"
	// });
	// $('.like-rec-btn').click(function() {
	// 	$(this).addClass('btn-success disabled');
	// 	var row_num = parseInt($(this).attr('id').substring(4)) + 1,
	// 		beer_name = $(table.rows[row_num].cells[0]).text(),
	// 		brewery = $(table.rows[row_num].cells[1]).text();
	// 	var search_val = $("#search").select2("val"),
	// 		beer_and_brewery = beer_name + " - " + brewery;
	// 	beer_and_brewery = beer_and_brewery.replace('&amp;', '&');
	// 	if (beer_and_brewery.charAt(beer_and_brewery.length) == '\s' || beer_and_brewery.charAt(beer_and_brewery.length) == '') {
	// 		beer_and_brewery = beer_and_brewery.substring(0, beer_and_brewery.length);
	// 	}
	// 	search_val.push(beer_and_brewery);
	// 	$("#search").select2("val", search_val);
	// 	performSearch();
	// });
	// $(".purchase").click(function() {
	// 	alert("We're sorry, this feature is under development.\n\nNevertheless, we've noted that you might be interested in being able to purchase recommended drinks from Dionysus or find where you can purchase them in your local area. We'll try to get this working as soon as we can!\n\n- The Alcohol Genome Project");
	// });
$("#results").removeClass("invisible");
$("#results").addClass("visible");
	// $('#email-container').html('<a id="email" href="" class="btn  btn-small pull-right"><i class="icon-envelope"></i></a>');
	// $("#email").attr("href", createMailToLink(search_query, new_results));
}

function buildResultsAccordion(results) {
	var html = '<div class="container-fluid results"><div class="accordion"  id="results_accordion">';
	html += buildResultsAccordionContent(results, 0);
	html += '</div>';
	html += '<button id="show_more" class="btn"><b>Show 10 More</b></button>';
	html += '</div>';

	return html;
}

function buildResultsAccordionContent (results, start) {
	var html = '';
	for (var b = 0; b < results.length; b++) {
		var beer = results[b];
		html += '<div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#results_accordion" href="#collapse' + (b + 1 + start) + '">'
		html += '<table><tr>';
		html += '<td class="beer-name ellipsis"> <b> ' + beer.name + '</b></td>';
		html += '<td class="brewery-name ellipsis">' + beer.brewery + '</td>';
		html += '<td class="rating">' + beer.score + '/10' + '</td>';
		html += '</tr></table>';
		html += '</a></div><div id="collapse' + (b + 1 + start) + '" class="accordion-body collapse"><div class="accordion-inner">';
		html += '<table><tr>';
		html += '<td class="style">' + beer.style + '</td>';
		html += '<td class="explanation">' + beer.explanation + '</td>';
		html += '<td class="ba-link hidden-phone"><a href="' + beer.link + '" target="_blank"><i class=" icon-share-alt"></i> Read More</a></td>';
		html += '</tr></table>';
		html += '</div></div></div>';
	}
	return html;
}

function getMoreResults () {
	var search_query = $("#search").val(),
	to_send = { 
		"search_items": search_query,
		"results_start": results_start,
		"num_results": results_per_page
	};
	$.post('/search', to_send, function(response) {
		var new_results = response;
		if (new_results.length == undefined || new_results.length == 0) {
			$("#show_more").remove();
		} else {
			results_start += new_results.length;
			var new_accordion_content = buildResultsAccordionContent(new_results, results_start);
			$("#results_accordion").append(new_accordion_content);
		}
	});
}