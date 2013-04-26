# coding=utf-8

import csv, re

state_adj_codes = {
"Alaska":["AK"],
"Alabama":["AL","FL","GA","MS","TN"],
"Arkansas":["AR","LA","MO","MS","OK","TN","TX"],
"Arizona":["AZ","CA","CO","NM","NV","UT"],
"California":["CA","NV","OR","AZ"],
"Colorado":["CO","KS","NE","NM","OK","UT","WY"],
"Connecticut":["CT","MA","NY","RI"],
"District of Columbia":["DC","MD","VA"],
"Delaware":["DE","MD","NJ","PA"],
"Florida":["FL","GA","AL"],
"Georgia":["GA","AL","SC","TN","FL"],
"Hawaii":["HI"],
"Iowa":["IA","IL","MN","MO","NE","SD","WI"],
"Idaho":["ID","MT","NV","OR","UT","WA","WY"],
"Illinois":["IL","IN","KY","MO","WI","IA","MI"],
"Indiana":["IN","KY","MI","OH","IL"],
"Kansas":["KS","MO","NE","OK","CO"],
"Kentucky":["KY","MO","OH","TN","VA","WV","IN","IL"],
"Louisiana":["LA","MS","TX","AR"],
"Massachusetts":["MA","NH","NY","RI","VT","CT"],
"Maryland":["MD","PA","VA","WV","DE"],
"Maine":["ME","NH"],
"Michigan":["MI","OH","WI","IL","IN"],
"Minnesota":["MN","ND","SD","WI","IA"],
"Missouri":["MO","NE","OK","TN","KS","AR","KY","IL"],
"Mississippi":["MS","TN","AL","AR","LA"],
"Montana":["MT","ND","SD","WY","ID"],
"North Carolina":["NC","SC","TN","VA"],
"North Dakota":["ND","SD","MN","MT"],
"Nebraska":["NE","SD","WY","CO","KS","MO","IA"],
"New Hampshire":["NH","VT","MA","ME"],
"New Jersey":["NJ","NY","PA"],
"New Mexico":["NM","OK","TX","UT","CO","AZ"],
"Nevada":["NV","OR","UT","ID","CA","AZ"],
"New York":["NY","PA","VT","MA","CT","NJ"],
"Ohio":["OH","PA","WV","KY","IN","MI"],
"Oklahoma":["OK","TX","AR","MO","KS","CO","NM"],
"Oregon":["OR","WA","CA","NV","ID"],
"Pennsylvania":["PA","WV","NJ","MD","NY","OH"],
"Rhode Island":["RI","CT","MA"],
"South Carolina":["SC","NC","GA"],
"South Dakota":["SD","WY","MT","ND","MN","IA","NE"],
"Tennessee":["TN","VA","KY","NC","TN","MO","IL","IN","OH","WV"],
"Texas":["TX","LA","AR","OK","NM"],
"Utah":["UT","WY","CO","NM","AZ","NV","ID"],
"Virginia":["VA","WV","MD","KY","TN","NC"],
"Washington":["WA","ID","OR"],
"West Virginia":["WV","PA","MD","VA","KY","OH"],
"Wisconsin":["WI","MI","IL","IA","MN"],
"Wyoming":["WY","MT","SD","NE","CO","UT","ID"]
}


def readOldFile(csv_filename):
	with open(csv_filename, 'r') as csvfile:
		csvreader = csv.reader(csvfile)

		for row in csvreader:
			old_locs = row[5]
			new_locs = set()
			# print old_locs
			state_names = re.findall(r'\'[A-Za-z ]+\'', str(old_locs))

			for state in state_names:
				state = state[1 : len(state) -1]
				if state in state_adj_codes:
					new_locs.update(state_adj_codes[state])

			
			print len(new_locs)
			row[5] = list(new_locs)
			writeRowToNewFile(row, csv_filename)


	csvfile.close()


def writeRowToNewFile(row, csv_filename):
	with open(csv_filename + "_new", 'a') as csvfile:
		csvwriter = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
		csvwriter.writerow(row)

	csvfile.close()


readOldFile('dionysusDatabase_copy.csv')
