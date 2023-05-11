import json
with open("input.json",'r')as f:
    data=json.load(f)
    # print(data)
    for person in data['states']:
        # print(person['name'])
        # if person['name']=="Alaska":
        #     del person['name']
        del person['name']   #to delete the name
        # print(person['name'])


new_string=json.dumps(data,indent=2,sort_keys=True)  #sort key will sort the data
# print(new_string)

from urllib.request import urlopen
# with urlopen("https://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote?format=json") as response:
#     source=response.read()

# print(source)


import requests
response=requests.get('https://formulae.brew.sh/api/formula.json')
package_json=response.json()
print(package_json)


