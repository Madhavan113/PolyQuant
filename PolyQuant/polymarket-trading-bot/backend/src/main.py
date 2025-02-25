from flask import Flask
from flask_cors import CORS
from api.polymarket import PolymarketAPI
from database.connector import connect_to_db

app = Flask(__name__)
CORS(app)

# Initialize database connection
db = connect_to_db()

# Initialize Polymarket API client
polymarket_api = PolymarketAPI()

@app.route('/api/markets', methods=['GET'])
def get_markets():
    markets = polymarket_api.fetch_active_markets()
    return {"markets": markets}

if __name__ == '__main__':
    app.run(debug=True)