from mongoengine import Document, StringField, FloatField, DateTimeField, ListField, ReferenceField
from datetime import datetime

class Market(Document):
    market_id = StringField(required=True, unique=True)
    title = StringField(required=True)
    description = StringField()
    outcome_type = StringField(choices=["YES_NO", "MULTIPLE_CHOICE"], required=True)
    creation_time = DateTimeField(default=datetime.utcnow)
    end_time = DateTimeField(required=True)
    current_price = FloatField(required=True)
    volume = FloatField(default=0.0)
    outcomes = ListField(StringField())

class UserInteraction(Document):
    user_id = StringField(required=True)
    market = ReferenceField(Market, required=True)
    action = StringField(choices=["BUY", "SELL"], required=True)
    amount = FloatField(required=True)
    price = FloatField(required=True)
    timestamp = DateTimeField(default=datetime.utcnow)