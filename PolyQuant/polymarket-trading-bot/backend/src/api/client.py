import requests

class PolymarketClient:
    BASE_URL = "https://api.polymarket.com/v1"

    @staticmethod
    def fetch_markets():
        response = requests.get(f"{PolymarketClient.BASE_URL}/markets")
        if response.status_code == 200:
            return response.json()
        else:
            response.raise_for_status()

    @staticmethod
    def fetch_market_data(market_id):
        response = requests.get(f"{PolymarketClient.BASE_URL}/markets/{market_id}")
        if response.status_code == 200:
            return response.json()
        else:
            response.raise_for_status()