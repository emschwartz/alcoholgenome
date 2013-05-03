# coding=utf-8

import urllib, re
from bs4 import BeautifulSoup



def getName (page_parser):
	page_title = page_parser.title
	if page_title == None:
		return None
	page_title = page_title.renderContents()
	beer_name = page_title[ : page_title.find(' -')]
	return beer_name



def getRating (page_parser):
	beer_rating = page_parser.find("span", {"class": "BAscore_big"})
	if beer_rating == None:
		return None
	beer_rating = beer_rating.renderContents()
	return beer_rating



def getBrewery (page_parser):
	page_title = page_parser.title
	if page_title == None:
		return None
	page_title = page_title.renderContents()
	brewery_start = page_title.find('- ') + 2
	brewer_end = page_title.find(' -', brewery_start)
	brewery_name = page_title[brewery_start : brewer_end]
	return brewery_name



def getStyle (page_parser):
	style_link = page_parser.find(href=re.compile(r'/beer/style/\d+'))
	if style_link != None:
		if style_link.b != None:
			beer_style = style_link.b.renderContents()
		else:
			beer_style = style_link.renderContents()
		return beer_style
	return None



def getNumReviews(page_parser):
	review_array = page_parser.find_all(id="rating_fullview_content_2")
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



def getReviewerLocations (page_parser):
	page_string = str(page_parser)
	locations_with_tags = re.findall(r'\<\/h6\>\<br\/?\>[A-Za-z\(\) ]+\<br\/?\>', page_string)
	locations = []
	for loc in locations_with_tags:
		new_loc = re.search(r'[A-Za-z\(\) ]{3,50}', loc).group(0)
		locations.append(new_loc)
	return locations



def openURL (url_string):
	open_url = urllib.urlopen(url_string)
	html_page = open_url.read()
	page_parser = BeautifulSoup(html_page, from_encoding='utf-8')
	return page_parser



def parseBeerPage (url_string):
	if not re.search(r'^http://beeradvocate.com/beer/profile/\d+/\d+', url_string):
		print "parseBeerPage received a url that is not a valid beer page link: " + url_string
		return None

	page_parser = openURL(url_string)

	beer_object = {}
	beer_object["Link"] = url_string
	beer_object["Name"] = getName(page_parser)

	if beer_object["Name"] == None:
		return None

	beer_object["Rating"] = getRating(page_parser)
	if beer_object["Rating"] == "N/A":
		return None

	beer_object["Brewery"] = getBrewery(page_parser)
	beer_object["Style"] = getStyle(page_parser)

	beer_object["Num Reviews"] = 0
	beer_object["Review Text"] = ''
	beer_object["Locations"] = {}

	reviews_page = 0
	while reviews_page == 0 or page_parser.find('<b>next &rsaquo;</b>') != -1 and reviews_page < 4:
		next_link = url_string + '/?view=beer&sort=&start=' + str(reviews_page * 25)
		page_parser = openURL(next_link)

		beer_object["Num Reviews"] += getNumReviews(page_parser)
		beer_object["Review Text"] += getAllReviewText(page_parser)

		list_of_locs = getReviewerLocations(page_parser)
		for loc in list_of_locs:
			if not loc in beer_object["Locations"]:
				beer_object["Locations"][loc] = 0
			beer_object["Locations"][loc] += 1
		reviews_page += 1
	
	if beer_object["Num Reviews"] == 0:
		return None

	return beer_object

# print parseBeerPage('http://beeradvocate.com/beer/profile/43/64798/?sort=topr')





