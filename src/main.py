import csv

with open('family.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    tree = {}
    for row in reader:
        parent = row[0]
        child = row[1]
        if parent not in tree:
            tree[parent] = {'name': parent, 'children': []}
        if child != "":
            tree[parent]['children'].append({'name': child, 'children': []})
        siblings = row[2].split()
        if siblings:
            for sibling in siblings:
                if sibling != "" and sibling != child:
                    tree[parent]['children'].append({'name': sibling, 'children': []})

print(tree)
{'Rashid': {'name': 'Rashid', 'children': []}, '': {'name': '', 'children': [{'name': 'Shlash', 'chil
dren': []}, {'name': 'Rashid', 'children': []}, {'name': 'Rasheed', 'children': []}, {'name': 'Daaebi
s', 'children': []}, {'name': 'Tuma', 'children': []}, {'name': 'Braheem', 'children': []}, {'name': 
'Eid', 'children': []}, {'name': 'Dlaim', 'children': []}, {'name': 'Sulayman', 'children': []}]}, 'S
alami': {'name': 'Salami', 'children': []}}
