# coding=utf-8

import csv, re

beerWordLookup = {}
beerWordCategories = {"scaled":{}, "binary":{}}


def getBeerWords (file='beerWords.csv'):
	global beerWordLookup, beerWordCategories
	if beerWordLookup == {}:
		with open(file, 'rU') as csvfile:
			csvreader = csv.reader(csvfile)
			cols = zip(*csvreader)
			for col in cols:
				category = col[0]
				if col[0].find('scaled') != -1:
					beerWordCategories["scaled"][category] = 0
				if col[0].find('binary') != -1:
					beerWordCategories["binary"][category] = 0
				
				for r in range(1, len(col)):
					if col[r] != '':
						beerWordLookup[col[r]] = category

def getBeerWordLookup ():
	global beerWordLookup
	return beerWordLookup


def getBeerWordCategories ():
	global beerWordCategories
	return beerWordCategories

def getBeerWordCategories ():
	if beerWordLookup == {}:
		getBeerWords()
	new_obj = {}
	for key1 in beerWordCategories.keys():
		new_obj[key1] = {}
		for key2 in beerWordCategories[key1].keys():
			new_obj[key1][key2] = 0
	return new_obj


def countBeerWordsInText (review_text):
	words = re.findall(r'[A-Za-z]{3,15}', review_text)

	counts = getBeerWordCategories()
	for word in words:
		try:
			word_category = beerWordLookup[word]
			
			if word_category in counts["scaled"].keys():
				counts["scaled"][word_category] = 1 + counts["scaled"][word_category]
			else:
				counts["binary"][word_category] = 1 + counts["binary"][word_category]
		except:
			continue
	return counts


getBeerWords()
