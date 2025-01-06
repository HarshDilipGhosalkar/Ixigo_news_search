import os

class Config:
    NEWS_API_KEYS = os.getenv('NEWS_API_KEYS', '').split(',')

config = Config()
