# coding=utf-8

import csv, psycopg2
from beerScorer import getBeerWordCategories

def getBeerWordColumns (csv_filename):
	beer_word_categories = getBeerWordCategories()

	with open(csv_filename, 'rU') as csvfile:
		csvreader = csv.reader(csvfile)
		header_row = csvreader.next()

		for cat_type in beer_word_categories.keys():
			for category in beer_word_categories[cat_type]:
				beer_word_categories[cat_type][category] = header_row.index(category)

	return beer_word_categories



def getCategoryAvgs(csv_filename):
	category_columns = getBeerWordColumns(csv_filename)
	category_totals = getBeerWordCategories()
	num_beers = 0

	with open(csv_filename, 'rU') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()
		for row in csvreader:
			num_beers += 1
			for cat_type in category_columns.keys():
				for category in category_columns[cat_type].keys():
					cat_count = row[category_columns[cat_type][category]]
					total_count = row[len(row) - 1]
					category_totals[cat_type][category] += float(cat_count) / float(total_count)
			

		for cat_type in category_totals.keys():
			for category in category_totals[cat_type].keys():
				print category + ": " + str(category_totals[cat_type][category])
				category_totals[cat_type][category] = category_totals[cat_type][category] / num_beers
		print "num beers: " + str(num_beers)
	return category_totals

 


def csvToPostgres(csv_filename, table_name=''):

	conn = psycopg2.connect("host=localhost dbname=eschwartz user=eschwartz")
	cur = conn.cursor()

	if table_name == '':
		table_name = csv_filename[0 : (len(table_name) - 4)]

	with open(csv_filename, 'rU') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()

		table_creation_string = "create table " + table_name 
		table_creation_string += ' \
			(rating int,\
			style text,\
			name text,\
			numReviews int,\
			locations text,\
			link text,\
			brewery text,'

		insert_string = "insert into " + table_name
		insert_string += ' (rating, style, name, numReviews, locations, link, brewery, '

		numColumns = 7
		beer_word_columns = getBeerWordColumns(csv_filename)
		for cat_type in beer_word_columns.keys():
			for category in beer_word_columns[cat_type].keys():
				numColumns += 1
				category = category.replace(' (', '_')
				category = category.replace(')', '')
				table_creation_string += category + " int, "
				insert_string += category + ", "


		table_creation_string = table_creation_string[: len(table_creation_string) - 2]
		table_creation_string += ')'
		cur.execute(table_creation_string)

		insert_string = insert_string[: len(insert_string) - 2]
		insert_string += ') values (' + '%s, '*numColumns
		insert_string = insert_string[: len(insert_string) - 2] + ')'
	
		category_avgs = getCategoryAvgs(csv_filename)

		for row in csvreader:
			row_to_insert = row[:7]

			for cat_type in beer_word_columns.keys():
				for category in beer_word_columns[cat_type].keys():
					category_count = row[beer_word_columns[cat_type][category]]
					total_count = int(row[len(row) - 1])
					category_percent = float(category_count) / total_count

					category_avg = category_avgs[cat_type][category]
					category_score = (category_percent - category_avg) / category_avg

					if category_score > 1:
						category_score = 1
					if category_score < -1:
						category_score = -1

					category_score = round(category_score * 100, 0)
					if category.find('binary') != -1:
						if category_score >= 20:
							category_score = 1
						else:
							category_score = 0
					row_to_insert.append(category_score)

			try:
				print row_to_insert
				cur.execute(insert_string, row_to_insert)
			except psycopg2.IntegrityError:
				# conn.rollback()
				print "had duplicate"


	conn.commit()
	cur.close()
	conn.close()


# csvToPostgres('beerDB05.02_10.11.csv', 'alcoholgenome')

csvToPostgres('beerDB05.07_13.30.csv', 'alcoholgenome_test1')
