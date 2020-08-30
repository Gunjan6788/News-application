import requests
from requests.auth import HTTPBasicAuth
import json
# from bs4 import BeautifulSoup

url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-28&sortBy=publishedAt&apiKey=59e8c0a2dd2e41c2b8c96a071a3d5c43'
headers = {"Accept": "application/json"}
auth = HTTPBasicAuth('apiKey', '59e8c0a2dd2e41c2b8c96a071a3d5c43')

req = requests.get(url, headers=headers )
req = req.json()
# print(req.json())
print(json.dumps(req))

# soup = BeautifulSoup(req.text,'html.parser')