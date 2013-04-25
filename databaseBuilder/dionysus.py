# coding=utf-8

import csv, urllib

from beerRater import *
from webScraper import *

database_headers = []
already_wrote_to_file = False
beerWords = {}

def createBeerDatabaseRow (beer, header_array):

	global beerWords
	if beerWords == {}:
		beerWords = getBeerWords()

	# count the number of times the beer keywords appear
	# and get the "rating" for each keyword category
	ratings_and_counts = getBeerCategoryRatingsAndCounts(beer["Review Text"], beerWords)
	# beer["Ratings"] = ratings_and_counts[0]
	beer["Counts"] = ratings_and_counts
	
	# save each of the beer attributes to an array
	beer_row = ["" for x in range(len(header_array))]
	beer_row[header_array.index("Name")] = (str(beer["Name"]))
	beer_row[header_array.index("Brewery")] = (str(beer["Brewery"]))
	beer_row[header_array.index("Rating")] = (str(beer["Rating"]))
	beer_row[header_array.index("Link")] = (str(beer["Link"]))
	beer_row[header_array.index("Style")] = (str(beer["Style"]))
	beer_row[header_array.index("Locations")] = (str(beer["Locations"]))
	beer_row[header_array.index("Num Reviews")] = (str(beer["Num Reviews"]))

	# save the Ratings and keyword Counts to the array
	# for category in beer["Ratings"].keys():
	# 	beer_row[header_array.index(category)] = (str(beer["Ratings"][category]))
	for category in beer["Counts"].keys():
		beer_row[header_array.index(category)] = (str(beer["Counts"][category]))

	
	return beer_row



def addBeersToDatabase(beers, output_filename):
	if beers == {} or beers == None:
		return None

	global already_wrote_to_file
	if already_wrote_to_file == False:
		file_option = 'w'
	else:
		file_option = 'a'

	with open(output_filename, file_option) as csvfile:
		csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)

		# construct the file headers
		global database_headers
		if database_headers == []:
			beer_categories = getBeerWordCategories()
			beer_categories = map(lambda s: s.title(), beer_categories)
			database_headers = ["Name", "Brewery", "Rating", "Link", "Style", "Locations", "Num Reviews"]
			# add the database_headers for the raw counts
			database_headers.extend(beer_categories)

			# add the database_headers for the scores
			# score_headers = map(lambda h: str(h) + " Score", beer_categories)
			# database_headers.extend(score_headers)

		# if the file is empty write the headers to the file
		if already_wrote_to_file == False:
			csvreader = csv.reader(csvfile)
			csvwriter.writerow(database_headers)
			already_wrote_to_file = True

		# create the beer rows and save them to the database
		for beer_name in beers.keys():
			beer_row = createBeerDatabaseRow(beers[beer_name], database_headers)
			csvwriter.writerow(beer_row)

	csvfile.close()
	return



def createDBFrom (start_url='http://beeradvocate.com/beer/style/', pages_per_style=1, output_filename='dionysusDatabase.csv'):
	if re.search(r'^http://beeradvocate.com/beer/profile/\d+/\d+', start_url):
		beer = parseBeerPage(start_url)
		if beer == None:
			return None
		beers = {}
		beers[beer["Name"]] = beer
		addBeersToDatabase(beers, output_filename)

	elif re.search(r'^http://beeradvocate.com/beer/style/\d+', start_url):
		for page_num in range(0, pages_per_style):
			beers = {}
			start = page_num * 50
			page_url = start_url + "?start=" + str(start)
			print "\tworking on page: " + str(page_url)
			beer_links = getBeerLinksFromStylePage(page_url)
			if beer_links != None:
				for beer_link in beer_links:
					beer = parseBeerPage(beer_link)
					if beer != None:
						beers[beer["Name"]] = beer
				addBeersToDatabase(beers, output_filename)

	elif re.search(r'^http://beeradvocate.com/beer/style/$', start_url):
		style_links = getStyleLinks(start_url)
		for s in range(1, len(style_links)):
			style_link = style_links[s]
			print "parsing from style " + str(s) + "/" + str(len(style_links)) + ": " + style_link
			createDBFrom(style_link, pages_per_style, output_filename)


def dionysus (start_url='http://beeradvocate.com/beer/style/', pages_per_style=5, output_filename=
	'dionysusDatabase.csv'):

	createDBFrom(start_url, pages_per_style, output_filename)

	# if start_url == 'http://beeradvocate.com/beer/style/':
	# 	style_urls = getStyleURLs()

	# 	for page_num in range(0, pages_per_style):
	# 		start = page_num * 50

	# 		for style_url in style_urls:

	# 			if style_url != None:
	# 				url_to_parse = style_url

	# 				if page_num > 0:
	# 					url_to_parse += '&start=' + start

	# 				print "working on this link: " + url_to_parse
	# 				getBeersFromPageOfLinks(url_to_parse)

	# if re.search('http://beeradvocate.com/beer/style/\d+', start_url):
	# 	getBeersFromPageOfLinks(start_url)

	# if re.search('http://beeradvocate.com/beer/profile/\d+/\d+', start_url):
	# 	beer = parsePage(start_url, getPageFromURL(urllib.urlopen(start_url)))
	# 	addBeersToDatabase({beer["Name"] : beer}, 'dionysusDatabase.csv')


# dionysus('http://beeradvocate.com/beer/style/', 25)

dionysus()

# first_beer = parseBeersFromStartPage('http://beeradvocate.com/beer/style/128')["Bell's Amber Ale"]
# print createBeerDatabaseRow(first_beer)


# dionysus('http://beeradvocate.com/beer/style/128')

# dionysus('http://beeradvocate.com/beer/style/128')
# with open('beerOutput.csv', 'wb') as f:
# 	dw = csv.DictWriter(f, all_beers.keys())
# 	dw.writerow(all_beers)

