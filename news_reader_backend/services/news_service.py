import requests
from datetime import datetime, timedelta

NEWS_API_KEY = '9f6420e0cef840a38b099e596dc0cebd'
GOOGLE_NEWS_API_KEY = 'edd78716acmshc806555de2b3ee0p11fdd4jsnca03b10455c4'

NEWS_API_BASE_URL = "https://newsapi.org/v2/everything"
GOOGLE_NEWS_API_BASE_URL = "https://google-news1.p.rapidapi.com/search"

def fetch_news(query):
    news_api_articles = fetch_newsapi_articles(query)
    google_news_articles = fetch_google_news_articles(query)
    combined_articles = news_api_articles + google_news_articles
    return combined_articles

def fetch_newsapi_articles(query):
    two_weeks_ago = (datetime.now() - timedelta(weeks=2)).strftime('%Y-%m-%d')
    params = {
        'q': query,
        'from': two_weeks_ago,
        'sortBy': 'publishedAt',
        'language': 'en',
        'apiKey': NEWS_API_KEY
    }
    response = requests.get(NEWS_API_BASE_URL, params=params)
    if response.status_code == 200:
        data = response.json()
        return data.get('articles', [])
    else:
        return []

def fetch_google_news_articles(query):
    headers = {
        'X-RapidAPI-Key': GOOGLE_NEWS_API_KEY,
        'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
    }
    params = {
        'q': query,
        'country': 'US',
        'lang': 'en'
    }
    response = requests.get(GOOGLE_NEWS_API_BASE_URL, headers=headers, params=params)
    if response.status_code == 200:
        data = response.json()
        return data.get('articles', [])
    else:
        return []
