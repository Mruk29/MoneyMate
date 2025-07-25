// Upload.jsx
import React, { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [transactions, setTransactions] = useState([]);

  // 👉 STEP 4 CODE GOES HERE
  const handleUpload = async () => {
    const userId = localStorage.getItem("user_id");
    if (!userId || userId === "null") {
      alert("Please log in again. User ID missing.");
      return;
    }

    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", userId);

    try {
      await axios.post("http://localhost:8080/upload", formData, {
        withCredentials: true,
      });

      const res = await axios.get("http://localhost:8080/last5", {
        params: { user_id: userId },
        withCredentials: true,
      });

      setTransactions(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div
      className="upload-container"
      style={{
        marginLeft: "250px",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2>Upload Bank Statement (CSV)</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <h3 style={{ marginTop: "30px" }}>Last 5 Transactions</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr style={{ backgroundColor: "#e0e0e0" }}>
            <th>Date</th><th>Description</th><th>Debit</th><th>Credit</th><th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, idx) => (
            <tr key={idx}>
              <td>{txn.txn_date}</td>
              <td>{txn.description}</td>
              <td>{txn.debit}</td>
              <td>{txn.credit}</td>
              <td>{txn.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
