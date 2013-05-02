# coding=utf-8

import csv, re

beerWords = {}
beerWordCategories = []


def getBeerWords (file='beerWords.csv'):
	global beerWords
	if beerWords == {}:
		with open(file, 'rU') as csvfile:
			csvreader = csv.reader(csvfile)
			cols = zip(*csvreader)
			for col in cols:
			# 	beerWords[col[0]] = filter(lambda word: word != '', col)
				for word in col:
					if word != '':
						beerWords[word] = col[0]
				beerWordCategories.append(col[0])
	return beerWords



def getBeerWordCategories ():
	global beerWordCategories
	return beerWordCategories



def countBeerWordsInText (review_text):
	words = re.findall(r'[A-Za-z]{3,15}', review_text)

	counts = {}
	for category in getBeerWordCategories():
		counts[category] = 0
	for word in words:
		try:
			counts[beerWords[word]] = counts[beerWords[word]] + 1
		except:
			continue
	return counts


getBeerWords()
