from pymongo import MongoClient
from pymongo.errors import ConnectionError

class MongoDBConnector:
    def __init__(self, uri, db_name):
        self.uri = uri
        self.db_name = db_name
        self.client = None
        self.db = None

    def connect(self):
        try:
            self.client = MongoClient(self.uri)
            self.db = self.client[self.db_name]
            print("Connected to MongoDB")
        except ConnectionError as e:
            print(f"Could not connect to MongoDB: {e}")

    def get_collection(self, collection_name):
        if self.db is None:
            raise Exception("Database not connected. Call connect() first.")
        return self.db[collection_name]

    def close(self):
        if self.client:
            self.client.close()
            print("Connection to MongoDB closed")