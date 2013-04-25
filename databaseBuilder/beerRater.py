# coding=utf-8

import csv

def getBeerWords (file='beerWords.csv'):
    beerWords = {}
    with open(file, 'rU') as csvfile:
        csvreader = csv.reader(csvfile)
        for row in csvreader:
            beerWords[row[0].title()] = row

    # remove blanks
    for category in beerWords:
        beerWords[category] = filter(lambda x: x != '', beerWords[category]) 
    return beerWords


def getBeerWordCategories ():
    return getBeerWords().keys()


def countBeerWordsInText (review, beerWords={}):
    if beerWords == {}:
        beerWords = getBeerWords()
    category_matches = {}

    for category in beerWords:
        category_count = 0

        for word in beerWords[category]:
            category_count += review.count(word)

        category_matches[category] = category_count

    return category_matches
    

def getBeerCategoryRatingsAndCounts(review, beerWords={}):
    category_matches = countBeerWordsInText(review, beerWords)
    return category_matches
    # total_matches = 0

    # for key in category_matches.keys():
    #     total_matches += category_matches[key]
    # total_matches = float(total_matches)

    # category_ratings = {}
    # for key in category_matches.keys():

    #     if total_matches != 0:
    #         category_ratings[key + " Score"] = float(category_matches[key])/total_matches
        
    #     else:
    #         category_ratings[key + " Score"] = 'N/A'

    # return (category_ratings, category_matches)



# def getBeerCategoryRatings(review):
#     return getBeerCategoryRatingsAndCounts(review)[0]




# TESTS

# beerWords = getBeerWords('beerWords.csv')

# test_review = '"Grapefruit Bomb" is a highly overused term, yet it pretty much nails the flavor of Heady Topper: so many of the super hopped-up ales have a strong bitter aftertaste. HT has just the right combination of pleasant bitterness on the palate and carbonation, making it a superbly brewed DIPA, one that is very drinkable,and most enjoyable from start to finish. The unpasteurized unfiltered Heady drinks like a meal, is chewy and not suited to chugging, but is completely satisfying If you are lucky enough to get your hands on a 4 pack, you may well find yourself enjoying each can more than the last one (like myself), especially after making the rounds with other DIPA offerings in between tastings. Wait until at least can #3 before writing a review, and try other DIPAs in between: you may agree that Heady Topper comes out on top! HT has become one of the few elite DIPAs by which all others are judged, worth the legendary Pliny status (though completely different in character). This top notch DIPA is readily available to me fresh from the "cannery" and I am looking for someone with fresh Hopslam and/or Zombie Dust to trade.'

# print countBeerWordsInText(test_review)
