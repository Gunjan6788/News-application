## Notes
- First put your API_KEY of [NewsApi](https://newsapi.org/) in src/config.py

# Show Top Headlines Api

Get the details of the top news headlines of the day.

**URL** : `/top_headlines/?`

**Method** : `GET`

**Params** : country=[string], category=[string]

## Success Response

**Code** : `200 OK`

**Content examples**
```json
{
"status": "ok",
"totalResults": 4286,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Cointelegraph By Diogo Monica",
            "title": "Crypto has a chance to upgrade the legacy financial system",
            "description": "Humanity may never have a better chance to change finance than we do now, and crypto and blockchain could help us.",
            "url": "https://cointelegraph.com/news/         crypto-has-a-chance-to-upgrade-the-legacy-financial-system",
            "urlToImage": "https://s3.eu-central-1.amazonaws.com/s3.cointelegraph.com/uploads/2020-08/          5059b6fc-7674-48db-b00c-a5f9012eab1d.jpg",
            "publishedAt": "2020-08-30T14:00:00Z",
            "content": "If Bitcoin (BTC) was born in response to the systemic failures laid bare by one global financial crisis, then the subsequent rise of various decentralized   networks can be seen as differences in opini… [+5622 chars]"
        }
    ]
}
```
## Failure Response 

**Code** : `401`

**Content examples**
```json
{
  "error": true,
  "message": "exception error"
}
```


# Show Search News 

Get the details of the search news of the day by the user.

**URL** : `/everything/?`

**Method** : `GET`

**Params** : q=[string], from=[string]

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
"status": "ok",
"totalResults": 4286,
    "articles": [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Mike Butcher",
            "title": "10 Berlin-based VCs discuss how COVID-19 has changed the landscape",
            "description": "A breeding ground for European entrepreneurs, Berlin has a knack for producing a lot of new startups: the city attracts top international,diverse talent, and it is packed with investors, events      and accelerators. Also important: it’s a more affordable place t…",
            "url": "https://techcrunch.com/2020/08/30/    9-berlin-based-vcs-discuss-how-covid-19-has-changed-their-strategy/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/08/GettyImages-1249581852.jpg?w=551",
            "publishedAt": "2020-08-30T13:45:25Z",
            "content": "A breeding ground for European entrepreneurs,Berlin has a knack for producing a lot of new startups:the city attracts top international, diverse talent, and it is packed with investors, events and … [+7871 chars]"
        }
    ]
}
```

## Failure Response 

**Code** : `401`

**Content examples**
```json
{
  "error": true,
  "message": "exception error"
}
```

