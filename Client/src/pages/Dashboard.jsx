import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [creditTotal, setCreditTotal] = useState(0);
  const [debitTotal, setDebitTotal] = useState(0);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8080/user-data?user_id=${userId}`)
        .then(res => {
          const data = res.data.data;
          setTransactions(data);

          let credit = 0, debit = 0;
          data.forEach(row => {
            credit += parseFloat(row.Credit || 0);
            debit += parseFloat(row.Debit || 0);
          });

          setCreditTotal(credit);
          setDebitTotal(debit);
        })
        .catch(err => {
          console.error("Failed to fetch user data:", err);
        });
    }
  }, [userId]);

  const netBalance = creditTotal - debitTotal;

  const chartData = {
    labels: transactions.map(txn => txn["Txn Date"]),
    datasets: [
      {
        label: "Credit ₹",
        data: transactions.map(txn => parseFloat(txn["Credit"] || 0)),
        borderColor: "green",
        fill: false,
      },
      {
        label: "Debit ₹",
        data: transactions.map(txn => parseFloat(txn["Debit"] || 0)),
        borderColor: "red",
        fill: false,
      }
    ]
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="card-row">
        <div className="card">Total Credit<br /><b>₹{creditTotal.toLocaleString()}</b></div>
        <div className="card">Total Debit<br /><b>₹{debitTotal.toLocaleString()}</b></div>
        <div className="card">Net Balance<br /><b>₹{netBalance.toLocaleString()}</b></div>
      </div>
      <div className="chart-box">
        <h3>Cash Flow</h3>
        <p>₹{netBalance.toLocaleString()}</p>
        <div className="fake-chart" style={{ height: "300px" }}>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}
