import urllib, re
from bs4 import BeautifulSoup


def parseBeerPage (url_string):
	if not re.search(r'^http://beeradvocate.com/beer/profile/\d+/\d+', url_string):
		print "parseBeerPage received a url that is not a valid beer page link: " + url_string
		return None

	beer_object = {}
	beer_object["Link"] = url_string

	# open the url
	open_url = urllib.urlopen(url_string)
	html_page = open_url.read()
	html_page = html_page.replace('valign=t"op"', 'valign="top"')
	html_page = html_page.replace('&amp;', '&')

	page_parser = BeautifulSoup(html_page)

	# get the beer name from the header
	page_title = page_parser.title.renderContents()
	beer_name = page_title[ : page_title.find(' -')]
	beer_object["Name"] = beer_name

	# get the beer rating
	beer_rating = page_parser.find("span", {"class": "BAscore_big"})
	if beer_rating == None:
		return None
	beer_rating = beer_rating.renderContents()
	if beer_rating == "N/A":
		return None
	beer_object["Rating"] = beer_rating
	

	# get the brewery name from the header
	brewery_start = page_title.find('- ') + 2
	brewer_end = page_title.find(' -', brewery_start)
	brewery_name = page_title[brewery_start : brewer_end]
	beer_object["Brewery"] = brewery_name

	# get the beer style
	style_link = page_parser.find(href=re.compile(r'/beer/style/\d+'))
	if style_link.b != None:
		beer_style = style_link.b.renderContents()
	else:
		beer_style = style_link.renderContents()
	beer_object["Style"] = beer_style

	# combine the text of all of the reviews into one string and remove the html tags
	review_array = page_parser.find_all(id="rating_fullview_content_2")
	full_review_text = ''
	for review in review_array:
		review_text = review.get_text()
		review_numbers = re.search(r'overall: (\d|\d.\d|\d\.\d\d)', review_text)
		if review_numbers != None:
			review_text = review_text[review_numbers.end(0) : review.find("Serving type:")]
			full_review_text += review_text
	beer_object["Review Text"] = full_review_text.lower()

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
		page_parser = BeautifulSoup(start_page)
		
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
	page_parser = BeautifulSoup(start_page)

	page_links = page_parser.find_all("a")
	style_links = []
	for link in page_links:
		partial_link = re.search(r'/beer/style/\d+', str(link))
		if partial_link != None:
			style_links.append('http://beeradvocate.com' + str(partial_link.group(0)))
	return style_links


# print parseBeerPage('http://beeradvocate.com/beer/profile/132/1597')


# parseBeersFromStartPage()
# print parseBeersFromStartPage('http://beeradvocate.com/beer/style/128')
