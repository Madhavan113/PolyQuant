class PolymarketAPI:
    def __init__(self, client):
        self.client = client

    def fetch_active_markets(self):
        response = self.client.get('/markets')
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Error fetching active markets: {response.status_code}")