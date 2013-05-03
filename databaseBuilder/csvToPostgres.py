# coding=utf-8

import csv, psycopg2

def getCategoryAvgs(csv_filename, counts_startcol, totalcount_col):
	category_totals = [0]*(totalcount_col - counts_startcol)
	num_beers = 0
	with open(csv_filename, 'r') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()

		for row in csvreader:
			for c in range(counts_startcol, totalcount_col):
				# print "row[c] is " + str(row[c]) + " and row[totalcount_col] is " + str(row[totalcount_col])
				category_totals[c - counts_startcol] += float(row[c])/float(row[totalcount_col])
			num_beers += 1

		for c in range(0, len(category_totals)):
			category_totals[c] = category_totals[c] / num_beers

	return category_totals



def getScoreRanges (csv_filename, counts_startcol, totalcount_col):
	score_maxes = [0]*(totalcount_col - counts_startcol)
	score_mins = [0]*len(score_maxes)

	with open(csv_filename, 'r') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()

		counts_startcol = 7
		totalcount_col = 17
		category_avgs = getCategoryAvgs(csv_filename, counts_startcol, totalcount_col)

		for row in csvreader:

			for c in range(0, len(score_maxes)):
				if int(row[totalcount_col]) != 0:
					category_percent = float(row[c + counts_startcol])/float(row[totalcount_col])
					category_score = (category_percent - category_avgs[c]) / category_avgs[c]
					
					if category_score > score_maxes[c]:
						score_maxes[c] = category_score
					if category_score < score_mins[c]:
						score_mins[c] = category_score

	ranges = [0]*len(score_maxes)
	for c in range(0, len(score_maxes)):
		ranges[c] = {"min": score_mins[c], "max": score_maxes[c]}

	return ranges
 


def csvToPostgres(csv_filename, table_name=''):

	conn = psycopg2.connect("host=localhost dbname=eschwartz user=eschwartz")
	cur = conn.cursor()

	if table_name == '':
		table_name = csv_filename[0 : (len(table_name) - 4)]

	with open(csv_filename, 'r') as csvfile:
		csvreader = csv.reader(csvfile)
		csvreader.next()

		table_creation_string = "create table " + table_name 
		table_creation_string += ' \
			(Rating int, \
			Style text, \
			Name text, \
			NumReviews int, \
			Locations text, \
			Link text, \
			Brewery text, \
			LightCount int, \
			DarkCount int, \
			RoastedCount int, \
			SweetCount int, \
			BitterCount int, \
			CarbonationCount int, \
			FruitCount int, \
			SpiceCount int, \
			SourCount int, \
			SmokeyCount int, \
			TotalCount int, \
			LightScore int, \
			DarkScore int, \
			RoastedScore int, \
			SweetScore int, \
			BitterScore int, \
			CarbonationScore int, \
			FruitScore int, \
			SpiceScore int, \
			SourScore int, \
			SmokeyScore int)'
		cur.execute(table_creation_string)

		counts_startcol = 7
		totalcount_col = 17
		category_avgs = getCategoryAvgs(csv_filename, counts_startcol, totalcount_col)
		print category_avgs

		for row in csvreader:

			# swap roasted and fruit categories
			roasted_val = row[9]
			fruit_val = row[13]
			row[9] = fruit_val
			row[13] = roasted_val

			for c in range(0, totalcount_col - counts_startcol):
				if int(row[totalcount_col]) != 0:
					category_percent = float(row[c + counts_startcol])/float(row[totalcount_col])
					category_score = (category_percent - category_avgs[c]) / category_avgs[c]
					
					if category_score > 1:
						category_score = 1
					if category_score < -1:
						category_score = -1

					category_score = round(category_score * 100, 0)

					if c >= 5:
						if category_score >= 20:
							category_score = 1
						else:
							category_score = 0

					row.append(category_score)
					print category_score
				else:
					row.append(0)

			insert_string = 'insert into ' + table_name
			insert_string += ' \
				(Rating, \
				Style, \
				Name, \
				NumReviews, \
				Locations, \
				Link, \
				Brewery, \
				LightCount, \
				DarkCount, \
				FruitCount, \
				SweetCount, \
				BitterCount, \
				CarbonationCount, \
				RoastedCount, \
				SpiceCount, \
				SourCount, \
				SmokeyCount, \
				TotalCount, \
				LightScore, \
				DarkScore, \
				RoastedScore, \
				SweetScore, \
				BitterScore, \
				CarbonationScore, \
				FruitScore, \
				SpiceScore, \
				SourScore, \
				SmokeyScore)'
			insert_string += ' values (' + '%s,'*28 
			insert_string = insert_string[0 : (len(insert_string) - 1)]
			insert_string += ')'
			cur.execute(insert_string, row)



	conn.commit()
	cur.close()
	conn.close()


csvToPostgres('beerDB05.02_10.11.csv', 'alcoholgenome')
