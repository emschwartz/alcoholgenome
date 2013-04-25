# coding=utf-8

import urllib, re, random
from bs4 import BeautifulSoup


def getName (page_parser):
	# get the beer name from the header
	page_title = page_parser.title.renderContents()
	beer_name = page_title[ : page_title.find(' -')]
	return beer_name

def getRating (page_parser):
	# get the beer rating
	beer_rating = page_parser.find("span", {"class": "BAscore_big"})
	if beer_rating == None:
		return None
	beer_rating = beer_rating.renderContents()
	return beer_rating

def getBrewery (page_parser):
	page_title = page_parser.title.renderContents()
	brewery_start = page_title.find('- ') + 2
	brewer_end = page_title.find(' -', brewery_start)
	brewery_name = page_title[brewery_start : brewer_end]
	return brewery_name

def getStyle (page_parser):
	# get the beer style
	style_link = page_parser.find(href=re.compile(r'/beer/style/\d+'))
	if style_link != None or style_link.b != None:
		beer_style = style_link.b.renderContents()
	else:
		beer_style = style_link.renderContents()
	return beer_style

def getNumReviews(page_parser):
	review_array = page_parser.find_all(id="rating_fullview_content_2")
	if len(review_array) <= 0:
		print str(page_parser)[0 : 100]
	return len(review_array)

def getAllReviewText (page_parser):
	review_array = page_parser.find_all(id="rating_fullview_content_2")
	full_review_text = ''
	for review in review_array:
		review_text = review.get_text()
		review_numbers = re.search(r'overall: (\d|\d.\d|\d\.\d\d)', review_text)
		if review_numbers != None:
			review_text = review_text[review_numbers.end(0) : review.find("Serving type:")]
			full_review_text += review_text
	return full_review_text.lower()

def getReviewerLocations (html_page):
	locations_with_tags = re.findall(r'\<\/h6\>\<br\>[A-Za-z\(\) ]+\<br\>', str(html_page))
	locations = []
	for loc in locations_with_tags:
		new_loc = loc[9 : (len(loc) - 4)]
		locations.append(new_loc)
	return locations


def parseBeerPage (url_string):
	if not re.search(r'^http://beeradvocate.com/beer/profile/\d+/\d+', url_string):
		print "parseBeerPage received a url that is not a valid beer page link: " + url_string
		return None

	beer_object = {}
	beer_object["Link"] = url_string

	# open the url
	open_url = urllib.urlopen(url_string)
	html_page = open_url.read()
	page_parser = BeautifulSoup(html_page, from_encoding='utf-8')

	beer_object["Name"] = getName(page_parser)
	if beer_object["Name"] == None:
		# print "this beer returned None for Name: " + str(url_string)
		return None

	beer_object["Rating"] = getRating(page_parser)
	if beer_object["Rating"] == "N/A":
		# print "this beer returned None for Rating: " + str(url_string)
		return None

	beer_object["Brewery"] = getBrewery(page_parser)
	beer_object["Style"] = getStyle(page_parser)

	beer_object["Num Reviews"] = 0
	beer_object["Review Text"] = ''
	beer_object["Locations"] = {}


	reviews_page = 0
	# iterate through all of the pages of reviews to ...
	while html_page.find('<b>next &rsaquo;</b>') != -1 and reviews_page < 4:

		# open the next page of reviews
		next_link = url_string + '/?view=beer&sort=&start=' + str(reviews_page * 25)
		open_next_link = urllib.urlopen(next_link)
		html_page = open_next_link.read()
		page_parser = BeautifulSoup(html_page, from_encoding='utf-8')

		beer_object["Num Reviews"] += getNumReviews(page_parser)
		beer_object["Review Text"] += getAllReviewText(page_parser)

		list_of_locs = getReviewerLocations(html_page)
		for loc in list_of_locs:
			if not loc in beer_object["Locations"]:
				beer_object["Locations"][loc] = 0
			beer_object["Locations"][loc] += 1



		reviews_page += 1
	
	if beer_object["Num Reviews"] == 0:
		# print "this beer returned no reviews: " + str(url_string)
		return None

	return beer_object


# print parseBeerPage('http://beeradvocate.com/beer/profile/694/15881')

def parseBeerPages (url_strings):
	all_beers = {}
	for url in url_strings:
		beer = parseBeerPage(url)
		all_beers[beer["Name"]] = beer
	return all_beers



def getBeerLinksFromStylePage (start_url):
	start_url_open = urllib.urlopen(start_url)
	if start_url_open.geturl() != 'http://beeradvocate.com/404':
		start_page = start_url_open.read()
		start_page = start_page.replace('valign=t"op"', 'valign="top"') 
		page_parser = BeautifulSoup(start_page, from_encoding='utf-8')
		
		all_links = page_parser.find_all(href=re.compile(r'/beer/profile/\d+/\d+'))
		full_beer_links = []
		for link in all_links:
			short_beer_link = re.search(r'/beer/profile/\d+/\d+', str(link)).group(0) + '/'
			full_beer_link = 'http://beeradvocate.com' + str(short_beer_link) + '?sort=topr'
			full_beer_links.append(full_beer_link)

		return full_beer_links
	else:
		return None


def getStyleLinks (start_url='http://beeradvocate.com/beer/style/'):
	start_url_open = urllib.urlopen(start_url)
	start_page = start_url_open.read()
	page_parser = BeautifulSoup(start_page, from_encoding='utf-8')

	page_links = page_parser.find_all("a")
	style_links = []
	for link in page_links:
		partial_link = re.search(r'/beer/style/\d+', str(link))
		if partial_link != None:
			style_links.append('http://beeradvocate.com' + str(partial_link.group(0)))
	random.shuffle(style_links)
	return style_links


# print parseBeerPage('http://beeradvocate.com/beer/profile/132/1597')
# parseBeersFromStartPage()
# print parseBeersFromStartPage('http://beeradvocate.com/beer/style/128')
