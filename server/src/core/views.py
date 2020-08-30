from django.shortcuts import render
from django.http import JsonResponse
# from requests.auth import HTTPBasicAuth
import json
import requests


def home(request):
    data = {
        "home": "home page"
    }
    return JsonResponse(data)


def top_headlines(request):
    country = request.GET.get('country')
    return JsonResponse(country)
    url = 'http://newsapi.org/v2/top-headlines'
    headers = {"Accept": "application/json"}

    payload = {
        "country":"us",
        "apiKey": "59e8c0a2dd2e41c2b8c96a071a3d5c43"
    }
    req = requests.get(url, params=payload, headers=headers )
    data = req.json()

    return JsonResponse(data)
