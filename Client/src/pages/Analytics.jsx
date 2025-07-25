import React from "react";

const Analytics = () => {
  return (
    <div className="container">
      <h1>Analytics</h1>
      <p>Analyze your financial data with interactive charts and filters.</p>
      <h3>Filters</h3>
      <label>Date Range</label>
      <input type="text" placeholder="Select date range" />
      <label>Category</label>
      <input type="text" placeholder="Select category" />
      <h3>Spending by Category</h3>
      <div className="fake-chart">[Chart Placeholder]</div>
      <h3>Monthly Debits and Credits</h3>
      <div className="fake-chart">[Chart Placeholder]</div>
    </div>
  );
};

export default Analytics;