from django.shortcuts import render
from django.http import JsonResponse
import json
import requests
from config import API_KEY

def home(request):
    data = {
        'home': 'home page'
    }
    return JsonResponse(data)


# This api is used to send the top headlines
# It is scraping the news headlines from newsapi
def top_headlines(request):
    try:
        country = request.GET['country']
        category = request.GET['category']
        url = 'http://newsapi.org/v2/top-headlines'
        headers = {'Accept': 'application/json'}

        payload = {
            'country': country,
            'category': category,
            'apiKey': API_KEY
        }
        req = requests.get(url, params=payload, headers=headers)
        data = req.json()

        return JsonResponse(data)
    except Exception as err:
        return json.dumps({'error': True, 'message': format(err)})


# This api is used to send for any query search
# It is also scraping the searched news from newsapi
def search_news(request):
    try:
        query = request.GET['q']
        from_date = request.GET['from']

        url = 'http://newsapi.org/v2/everything'
        headers = {'Accept': 'application/json'}

        payload = {
            'q': query,
            'from': from_date,
            'sortBy': 'publishedAt',
            'apiKey': API_KEY
        }
        req = requests.get(url, params=payload, headers=headers)
        data = req.json()

        return JsonResponse(data)
    except Exception as err:
        return json.dumps({'error': True, 'message': format(err)})
