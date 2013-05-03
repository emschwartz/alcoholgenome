# coding=utf-8

import urllib, re, datetime, random
from bs4 import BeautifulSoup

from beerAdvocateBeerPageParser import parseBeerPage, openURL



def getBeerLinksFromStylePage (start_url):
	if not re.search(r'^http://beeradvocate.com/beer/style/\d+', start_url):
		return None
	start_url_open = urllib.urlopen(start_url)
	if start_url_open.geturl() == 'http://beeradvocate.com/404':
		return None

	page_parser = openURL(start_url)
	all_links = page_parser.find_all(href=re.compile(r'/beer/profile/\d+/\d+'))
	full_beer_links = []
	for link in all_links:
		if str(link).find('?ba=bros') != -1:
			continue
		short_beer_link = re.search(r'/beer/profile/\d+/\d+', str(link)).group(0) + '/'
		full_beer_link = 'http://beeradvocate.com' + str(short_beer_link) + '?sort=topr'
		full_beer_links.append(full_beer_link)

	return full_beer_links



def getBeerLinksFromStyle (start_url, pages_per_style=20):
	beer_links = []
	for page_num in range (0, pages_per_style):
		start = page_num * 50
		page_url = start_url + "?start=" + str(start)
		beer_links.extend(getBeerLinksFromStylePage(page_url))
	return beer_links



def getAllStyleLinks ():
	start_url='http://beeradvocate.com/beer/style/'
	page_parser = openURL(start_url)

	page_links = page_parser.find_all("a")
	style_links = []
	for link in page_links:
		partial_link = re.search(r'/beer/style/\d+', str(link))
		if partial_link != None:
			style_links.append('http://beeradvocate.com' + str(partial_link.group(0)))
	random.shuffle(style_links)
	return style_links



# def getBeerLinksFromAllStyles (pages_per_style=20):
# 	style_links = getAllStyleLinks()
# 	beer_links = []
# 	for link in style_links:
# 		beer_links.extend(getBeerLinksFromStyle(link, pages_per_style))
# 	return beer_links

