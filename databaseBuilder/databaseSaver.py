import csv

def createBeerDatabaseRow (beer):

	# count the number of times the beer keywords appear
	# and get the "rating" for each keyword category
	ratings_and_counts = getBeerCategoryRatingsAndCounts(beer["Review Text"])
	beer["Ratings"] = ratings_and_counts[0]
	beer["Counts"] = ratings_and_counts[1]
	
	# save each of the beer attributes to an array
	beer_row = []
	beer_row.append(str(beer["Name"]))
	beer_row.append(str(beer["Brewery"]))
	beer_row.append(str(beer["Rating"]))
	beer_row.append(str(beer["Link"]))
	beer_row.append(str(beer["Style"]))

	# save the Ratings and keyword Counts to the array
	for category in beer["Ratings"].keys():
		beer_row.append(str(beer["Ratings"][category]))
	for category in beer["Counts"].keys():
		beer_row.append(str(beer["Counts"][category]))

	print beer_row
	return beer_row



def addBeersToDatabase(beers, output_filename):
	if beers == {} or beers == None:
		return None

	with open(output_filename, 'a') as csvfile:
		csvwriter = csv.writer(csvfile)

		# construct the file headers
		beer_categories = getBeerWordCategories()
		beer_categories = map(lambda s: s.title(), beer_categories)
		headers = ["Name", "Brewery", "BeerAdvocate Rating", "Link", "Style"]
		headers.extend(beer_categories)
		headers.extend(beer_categories)

		# if the file is empty write the headers to the file
		csvreader = csv.reader(csvfile)
		if csvreader.line_num == 0:
			csvwriter.writerow(headers)

		# create the beer rows and save them to the database
		for beer_name in beers.keys():
			beer_row = createBeerDatabaseRow(beers[beer_name])
			csvwriter.writerow(beer_row)

	csvfile.close()
	return