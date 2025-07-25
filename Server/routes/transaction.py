from flask import Blueprint, request, jsonify
from models import Transaction

txn_bp = Blueprint('transactions', __name__)

@txn_bp.route('/last5', methods=['GET'])
def last5():
    user_id = request.args.get('user_id')
    txns = Transaction.query.filter_by(user_id=user_id).order_by(Transaction.id.desc()).limit(5).all()
    return jsonify([{
        "txn_date": t.txn_date,
        "description": t.description,
        "debit": t.debit,
        "credit": t.credit,
        "balance": t.balance
    } for t in txns])

@txn_bp.route('/user-data', methods=['GET'])
def all_data():
    user_id = request.args.get('user_id')
    txns = Transaction.query.filter_by(user_id=user_id).all()
    return jsonify({
        "data": [{
            "Txn Date": t.txn_date,
            "Description": t.description,
            "Debit": t.debit,
            "Credit": t.credit,
            "Balance": t.balance
        } for t in txns]
    })
