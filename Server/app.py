# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from database import db  # Assumes db = SQLAlchemy() in database.py
from routes.upload import upload_bp
from routes.transaction import txn_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///personal_manager.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Import models after db.init_app() to avoid circular import
from models import User, Transaction

with app.app_context():
    db.create_all()
    print("DEBUG TABLE COLUMNS:", [c.name for c in User.__table__.columns])

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    existing = User.query.filter_by(email=email).first()
    if existing:
        return jsonify({"error": "Email already exists"}), 400

    user = User(name=name, email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "Signup successful", "user_id": user.id}), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({"message": "Login successful", "user_id": user.id}), 200

app.register_blueprint(upload_bp)
app.register_blueprint(txn_bp)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
