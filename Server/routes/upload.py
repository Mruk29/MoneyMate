from flask import Blueprint, request, jsonify
from models import Transaction
from database import db
import pandas as pd

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/upload', methods=['POST'])
def upload():
    file = request.files.get('file')
    user_id = request.form.get('user_id')

    if not file or not user_id:
        return jsonify({"error": "Missing file or user_id"}), 400

    if not file.filename.endswith('.csv'):
        return jsonify({"error": "Only CSV files supported"}), 400

    df = pd.read_csv(file)
    df.columns = df.columns.str.strip()
    expected = ['Txn Date', 'Value Date', 'Description', 'Ref No./Cheque No.', 'Debit', 'Credit', 'Balance']
    if not all(col in df.columns for col in expected):
        return jsonify({"error": "Required columns missing"}), 400

    for _, row in df.iterrows():
        txn = Transaction(
            user_id=int(user_id),
            txn_date=str(row['Txn Date']),
            value_date=str(row['Value Date']),
            description=row['Description'],
            ref_no=row['Ref No./Cheque No.'],
            debit=float(row['Debit']) if row['Debit'] else 0,
            credit=float(row['Credit']) if row['Credit'] else 0,
            balance=float(row['Balance']) if row['Balance'] else 0,
        )
        db.session.add(txn)
    
    db.session.commit()
    return jsonify({"message": "Upload successful"}), 200
