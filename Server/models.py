# models.py
from database import db  # ✅ FIXED: Import from database.py instead of app.py

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    txn_date = db.Column(db.String(20))
    value_date = db.Column(db.String(20))
    description = db.Column(db.String(200))
    ref_no = db.Column(db.String(100))
    debit = db.Column(db.Float, default=0.0)
    credit = db.Column(db.Float, default=0.0)
    balance = db.Column(db.Float, default=0.0)
