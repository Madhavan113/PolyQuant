import os

class Config:
    API_KEY = os.getenv('POLYMARKET_API_KEY', 'your_default_api_key')
    DATABASE_URI = os.getenv('MONGODB_URI', 'mongodb://localhost:27017/polymarket')
    DEBUG = os.getenv('DEBUG', 'False') == 'True'
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')