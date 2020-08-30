from django.shortcuts import render
from django.http import JsonResponse
import json
import requests


def home(request):
    data = {
        "home": "home page"
    }
    return JsonResponse(data)


def top_headlines(request):
    country = request.GET['country']
    category = request.GET['category']
    # return JsonResponse(country, safe=False)
    url = 'http://newsapi.org/v2/top-headlines'
    headers = {"Accept": "application/json"}

    payload = {
        "country": country,
        "category": category,
        "apiKey": "59e8c0a2dd2e41c2b8c96a071a3d5c43"
    }
    req = requests.get(url, params=payload, headers=headers)
    data = req.json()

    return JsonResponse(data)


def search_news(request):
    q = request.GET['q']
    from_date = request.GET['from']

    url = 'http://newsapi.org/v2/everything'
    headers = {"Accept": "application/json"}

    payload = {
        "q": q,
        "from": from_date,
        "sortBy": "publishedAt",
        "apiKey": "59e8c0a2dd2e41c2b8c96a071a3d5c43"
    }
    req = requests.get(url, params=payload, headers=headers)
    data = req.json()

    return JsonResponse(data)
