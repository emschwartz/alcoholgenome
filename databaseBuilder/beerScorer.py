# coding=utf-8

import csv

property_columns_start = 7
headers = ["Light", "Dark", "Fruit", "Sweet", "Carbonation", "Bitter", "Spice"]

def divideBeerWordsByTotalCounts (csv_filename, new_filename):
	
	with open(csv_filename, 'r') as old_file:
		csvreader = csv.reader(old_file)
	
		with open(new_filename, 'w') as new_file:
			csvwriter = csv.writer(new_file)
			new_headers = csvreader.next()
			new_headers.append("Total Count")
			for category in headers:
				new_headers.append(category + " Percent")
			csvwriter.writerow(new_headers)

		with open(new_filename, 'a') as new_file:
			csvwriter = csv.writer(new_file)
			for row in csvreader:
				total_count = 0
				for c in range(property_columns_start, property_columns_start + len(headers)):
					total_count += int(row[c])
				row.append(total_count)

				
				for c in range(0, len(headers)):
					if total_count != 0:
						col_percent = float(row[c + property_columns_start]) / float(total_count)
					else:
						col_percent = 0
					row.append(col_percent)
				if total_count >= 100:
					csvwriter.writerow(row)


def getAverageCountPercents (new_filename):
	with open(new_filename, 'r') as new_file:
		csvreader = csv.reader(new_file)

		num_rows = 0
		avg_count_percents = [0 for i in range(0, len(headers))]

		averages_cols_start = property_columns_start + len(headers) + 1
		print averages_cols_start
		csvreader.next()
		for row in csvreader:
			for c in range(0, len(headers)):
				if c + averages_cols_start  >= len(row):
					print "index is " + str(c + averages_cols_start) + " while row is " + str(row)
				avg_count_percents[c] += float(row[c + averages_cols_start])
			num_rows += 1
		print num_rows
		for c in range(0, len(headers)):
			avg_count_percents[c] = avg_count_percents[c] / float(num_rows)

		return avg_count_percents


# only call this after divideBeerWordsByTotalCounts
def calculateBeerScores (old_filename, new_filename, avg_count_percents):
	with open(old_filename, 'r') as old_file:
		csvreader = csv.reader(old_file)

		new_headers = csvreader.next()
		for category in headers:
			new_headers.append(category + " Score")

		with open(new_filename, 'w') as new_file:
			csvwriter = csv.writer(new_file)
			csvwriter.writerow(new_headers)

			averages_cols_start = property_columns_start + len(headers) + 1
			for row in csvreader:
				for c in range(0, len(headers)):
					# print float(row[c + averages_cols_start]) - avg_count_percents[c]
					# print (float(row[c + averages_cols_start]) - avg_count_percents[c]) / avg_count_percents[c]
					row.append((float(row[c + averages_cols_start]) - avg_count_percents[c]) / avg_count_percents[c])
				csvwriter.writerow(row)


def normalizeScores ()



def processCSV (csv_filename):
	avgs_filename = csv_filename[: len(csv_filename) - 4] + "_withAverages.csv"
	divideBeerWordsByTotalCounts(csv_filename, avgs_filename)

	avg_count_percents = getAverageCountPercents(avgs_filename)
	print avg_count_percents

	ratings_filename = csv_filename[: len(csv_filename) - 4] + "_withScores.csv"
	calculateBeerScores(avgs_filename, ratings_filename, avg_count_percents)




processCSV('dionysusDatabase04.26_02.28.csv')