#!/usr/bin/env python

from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
coin = 'BTC'
parameters = {
  #'start':'1',
  #'limit':'5000',
  'convert':'USD',
  'symbol':'BTC'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': '206e064d-eae9-4ec5-82f7-243e7ba46ff8',
}

session = Session()
session.headers.update(headers)

try:
  response = session.get(url, params=parameters)
  data = json.loads(response.text)
  print(data['data'][coin]['quote']['USD']['price'])
except (ConnectionError, Timeout, TooManyRedirects) as e:
  print(e)
 
