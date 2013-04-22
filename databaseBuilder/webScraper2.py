import urllib, re
from bs4 import BeautifulSoup



def getURLsFromStart (start_url):
    start_url_open = urllib.urlopen(start_url)
    start_page = start_url_open.read() 
    start_page = start_page.replace('valign=t"op"', 'valign="top"')   
    start_soup = BeautifulSoup(start_page)
    links = start_soup.find_all("a")
    links = filter(lambda l: re.search(r'/beer/profile/\d+/\d+', str(l)), links)
    short_links = []
    for link in links:
        short_link = re.search(r'/beer/profile/\d+/\d+', str(link)).group(0)
        short_links.append(short_link)
        # print short_link
    print "dionysus found this many links: " + str(len(short_links))
    return short_links


def getPageFromURL (url):
    if re.search(r'^/beer/profile/\d*/\d*$', str(url)):
        url_string = 'http://beeradvocate.com' + str(url) + '?sort=topr'
        url = urllib.urlopen(url_string)
        page = url.read()
        return page
    return 


def getPagesFromURLs (urls):
    pages = []
    for url in urls:
        page = getPageFromURL(url)
        pages.append(page)
    return pages


def parsePage (url, html_page):
    html_page = html_page.replace('valign=t"op"', 'valign="top"')   

    page_soup = BeautifulSoup(html_page)
    beer_title = page_soup.h1
    if beer_title!= None:
        beer_title = beer_title.renderContents()
        beer_rating = page_soup.find("span", {"class": "BAscore_big"})
        if beer_rating != None:
            beer_rating = beer_rating.renderContents()
        else:
            beer_rating = 'N/A'
    else:
        beer_title = 'N/A'
        beer_rating = 'N/A'
    # print beer_rating

    beer_name = beer_title[: beer_title.find('<span')]
    # print beer_name
    brewery_name = beer_title[beer_title.find('> - ') + 4 : beer_title.find('</span>')]
    # print brewery_name
    review_text = parseReviewsFromPage(html_page)

    link = 'http://beeradvocate.com' + url
    
    return {"Name" : beer_name, "Brewery" : brewery_name, "Rating" : beer_rating, "Review Text" : review_text, "Link" : link}

    

def parseReviewsFromPage (html_page):
    html_page = html_page.replace('valign=t"op"', 'valign="top"')   

    page_soup = BeautifulSoup(html_page)
    review_list = page_soup.find_all(id="rating_fullview_content_2")

    full_text = ''
    for review in review_list:
        full_text += parseReviewText(review)

    return full_text

def parseReviewText (review_html):
    review = review_html.get_text()
    review_numbers = re.search(r'overall: (\d|\d.\d|\d\.\d\d)', review)
    review_text = ''
    if review_numbers != None:
        review_text = review[review_numbers.end(0) : review.find("Serving type:")]
    return review_text




def parseAllBeersOnPage(url):
    if (url != None and url != ''):
        style_url = urllib.urlopen(url)
        style_page = style_url.read()
        style_page = style_page.replace('valign=t"op"', 'valign="top"')  

        style_soup = BeautifulSoup(style_page)
        style = style_soup.h1.renderContents()

        urls = getURLsFromStart(url)
        urls = filter (lambda u: re.search(r'^/beer/profile/\d*/\d*$', str(u)), urls)

        pages = getPagesFromURLs(urls)
        all_beers = {}
        if (len(urls) != len(pages)):
            print "uh oh"
        for i in range(len(urls)):
            url = urls[i]
            page = pages[i]
            # print page
            page_dict = parsePage(url, page)
            page_dict["Style"] = style
            all_beers[page_dict["Name"]] = page_dict
        return all_beers
    else:
        return None



def getStyleURLs ():
    start_url = 'http://beeradvocate.com/beer/style/'
    start_url_open = urllib.urlopen(start_url)
    start_page = start_url_open.read()
    start_soup = BeautifulSoup(start_page)

    links = start_soup.find_all("a")
    style_links = []
    for link in links:
        partial_link = re.search(r'/beer/style/\d+', str(link))
        if partial_link != None:
            style_links.append('http://beeradvocate.com' + str(partial_link.group(0)))
        else:
            style_links.append('')
    return style_links





# urls = getValidURLsFrom(10, 10, 1)
# pages = getPagesFromURLs(urls)
# print parsePage(pages[0])

#urls = getAllURLs (2, 1000)
#for url in urls:
#    print str(url)
    
# writeCSV('./beerAdvocateOutput.csv', urls)

# all_beers = parseAllPages(10, 100, 100)


# all_beers = parseAllBeersOnPage('http://beeradvocate.com/beer/style/128')
# for beer in all_beers:
#     print beer  
