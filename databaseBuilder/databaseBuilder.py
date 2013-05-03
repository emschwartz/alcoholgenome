# coding=utf-8

import csv, urllib, datetime

from beerAdvocateBeerPageParser import parseBeerPage
from beerAdvocateStylePageParser import getBeerLinksFromStyle, getAllStyleLinks
from beerScorer import countBeerWordsInText, getBeerWordCategories

csvfile = None
csvwriter = None


def prepareDBHeaderRow (beer):
	headers = []
	for col in beer.keys():
		if col != 'Review Text':
			headers.append(col)

	for col in getBeerWordCategories():
		headers.append(col.title())

	headers.append("Total Count")

	# for col in getBeerWordCategories():
	# 	headers.append(col.title() + " Percent")

	return headers



def prepareDBRow (beer):
	row = []
	for col in beer.keys():
		if col != 'Review Text':
			row.append(beer[col])

	total_beer_words = 0
	beer_word_counts = countBeerWordsInText(beer["Review Text"])

	for category in getBeerWordCategories():
		words_in_category = beer_word_counts[str(category)]
		row.append(words_in_category)
		total_beer_words += words_in_category

	row.append(total_beer_words)

	# for category in getBeerWordCategories():
	# 	words_in_category = beer_word_counts[str(category)]
	# 	category_percent = float(words_in_category) / total_beer_words
	# 	row.append(category_percent)

	return row



def createDBFile (beer_example, output_filename='beerDB'):
	if output_filename == 'beerDB':
		now = datetime.datetime.now()
		output_filename += now.strftime("%m.%d_%H.%M") + '.csv'

	global csvfile, csvwriter
	csvfile = open(output_filename, 'w')
	csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)

	headers = prepareDBHeaderRow(beer_example)
	csvwriter.writerow(headers)



def addBeerToDBFile (beer):
	global csvfile, csvwriter
	if csvfile == None or csvwriter == None:
		createDBFile(beer)
	row = prepareDBRow(beer)
	csvwriter.writerow(row)




def addToDBFromStyle (style_url, pages_per_style=20):
	beer_links = getBeerLinksFromStyle(style_url, pages_per_style)
	beers = []
	for b in range(0, len(beer_links)):
		beer = parseBeerPage(beer_links[b])

		if beer != None:
			addBeerToDBFile(beer)
			print "\t" + str(b) + "/" + str(len(beer_links)) + ": " + str(beer["Link"])
			if beer["Num Reviews"] < 10:
				return



def addToDBFromAllStyles (pages_per_style=20):
	style_links = getAllStyleLinks()
	for s in range(0, len(style_links)):
		print "style " + str(s) + "/" + str(len(style_links)) + ": " + str(style_links[s])
		
		style_start_time = datetime.datetime.now()
	
		addToDBFromStyle(style_links[s], pages_per_style)

		style_stop_time = datetime.datetime.now()
		time_diff = style_stop_time - style_start_time
		print str(time_diff.total_seconds())

	csvfile.close()



addToDBFromAllStyles()


