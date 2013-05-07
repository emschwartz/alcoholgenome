import csv, ast


states = {
        'AK': 'Alaska',
        'AL': 'Alabama',
        'AR': 'Arkansas',
        'AZ': 'Arizona',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DC': 'District of Columbia',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'IA': 'Iowa',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'MA': 'Massachusetts',
        'MD': 'Maryland',
        'ME': 'Maine',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MO': 'Missouri',
        'MS': 'Mississippi',
        'MT': 'Montana',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'NE': 'Nebraska',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NV': 'Nevada',
        'NY': 'New York',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VA': 'Virginia',
        'VT': 'Vermont',
        'WA': 'Washington',
        'WI': 'Wisconsin',
        'WV': 'West Virginia',
        'WY': 'Wyoming'
}

def getCodeOfState(state):
	for key in states.keys():
		if state.title() == states[key]:
			return key
	return None

def isState(location):
	if getCodeOfState(location) != None:
		return True
	else:
		return False

def getIndexOfState(location):
	for s in range(0, len(states.keys())):
		if location.title() == states[states.keys()[s]]:
			return s
	return -1

# breweries = {}

def getBreweryList1():
	breweries = []
	with open('beerDistByState.csv', 'rU') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()

		for row in csvreader:
			brewery = row[0]
			if brewery.find('CLOSED') != -1:
				continue
			if brewery.lower().find(' see ') != -1:
				continue
			if brewery.find('Score') != -1:
				continue
			if brewery == '':
				continue
			breweries.append(brewery)
	print len(breweries)
	return breweries

def getBreweryList2():
	breweries = []
	with open('beerDB.csv', 'r') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()

		for row in csvreader:
			if row[6] not in breweries:
				breweries.append(row[6])

	return breweries


def getBreweryListIntersection():
	brewery_list1 = getBreweryList1()
	brewery_list2 = getBreweryList2()

	intersection1 = []
	intersection2 = []
	for brewery1 in brewery_list1:
		for brewery2 in brewery_list2:
			if brewery2.find(brewery1) == 0:
				# print "Found " + brewery1 + " in " + brewery2
				intersection1.append(brewery1)
				intersection2.append(brewery2)
				break;

	return (intersection1, intersection2)

# getBreweryListIntersection()


def getBeerData():
	brewery_list = getBreweryListIntersection()
	brewery_list1 = brewery_list[0]
	brewery_list2 = brewery_list[1]

	with open('beerDB.csv', 'r') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()

		breweries = {}

		for row in csvreader:
			brewery = row[6]
			if brewery not in brewery_list2:
				continue
			locations = ast.literal_eval(row[4])

			if brewery not in breweries:
				csv_row = []
				csv_row.append(brewery)
				csv_row.extend([0]*51)

				for loc in locations.keys():
					loc_index = getIndexOfState(loc)
					if loc_index != -1:
						csv_row[loc_index + 1] += locations[loc]
				breweries[brewery] = csv_row
			else:
				for loc in locations.keys():
					loc_index = getIndexOfState(loc)
					if loc_index != -1:
						breweries[brewery][loc_index + 1] += locations[loc]



		new_csvfile = open('beerLocations.csv', 'w')
		csvwriter = csv.writer(new_csvfile)

		headers = ["Brewery"]
		state_keys = states.keys()
		state_keys.sort()
		headers.extend(state_keys)
		csvwriter.writerow(headers)

		for brewery in breweries.keys():
			csvwriter.writerow(breweries[brewery])
			

		# 	csvwriter.writerow(csv_row)


		# new_csvfile = open('beerLocations.csv', 'w')
		# csvwriter = csv.writer(new_csvfile)

		# headers = ["Brewery"]
		# headers.extend(states.keys())
		# csvwriter.writerow(headers)



getBeerData()

