import React from "react";

const Reports = () => {
  return (
    <div className="container">
      <h1>Reports</h1>
      <p>Generate, download, and email your financial reports.</p>
      <button>Generate Report</button>
      <button>Download PDF</button>
      <input type="email" placeholder="Enter email address" />
      <button>Email Report</button>
      <h2>Report Preview</h2>
      <div className="fake-chart">[Last Month Summary Preview]</div>
      <label>Start Date</label>
      <input type="text" placeholder="Select start date" />
      <label>End Date</label>
      <input type="text" placeholder="Select end date" />
    </div>
  );
};

export default Reports;