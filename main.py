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
  
#{'status': {'timestamp': '2019-06-16T02:19:03.615Z', 'error_code': 0, 'error_message': None, 'elapsed': 10, 'credit_count': 1}, 'data': {'BTC': {'id': 1, 'name': 'Bitcoin', 'symbol': 'BTC', 'slug': 'bitcoin', 'circulating_supply': 17761525, 'total_supply': 17761525, 'max_supply': 21000000, 'date_added': '2013-04-28T00:00:00.000Z', 'num_market_pairs': 7589, 'tags': ['mineable'], 'platform': None, 'cmc_rank': 1, 'last_updated': '2019-06-16T02:18:31.000Z', 'quote': {'USD': {'price': 8980.4708249, 'volume_24h': 18492331774.6265, 'percent_change_1h': 1.54598, 'percent_change_24h': 3.91337, 'percent_change_7d': 13.3724, 'market_cap': 159506857068.23196, 'last_updated': '2019-06-16T02:18:31.000Z'}}}}}

  
