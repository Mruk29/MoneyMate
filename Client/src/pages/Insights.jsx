import React from "react";

const Insights = () => {
  return (
    <div className="container">
      <h1>AI Insights</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-07-20</td>
            <td>Grocery shopping at SuperMart</td>
            <td><span className="tag">Groceries</span></td>
            <td>-$120.50</td>
          </tr>
          <tr>
            <td>2024-07-19</td>
            <td>Dinner at The Italian Place</td>
            <td><span className="tag">Dining</span></td>
            <td>-$75.00</td>
          </tr>
        </tbody>
      </table>
      <h2>Insights</h2>
      <p><strong>Anomaly Alert:</strong> $250.00 at TechGadgets. Higher than usual for Electronics.</p>
    </div>
  );
};

export default Insights;