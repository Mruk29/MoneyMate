import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>MoneyMate</h2>
      <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
      <NavLink to="/upload" activeClassName="active">Upload</NavLink>
      <NavLink to="/analytics" activeClassName="active">Analytics</NavLink>
      <NavLink to="/insights" activeClassName="active">Insights</NavLink>
      <NavLink to="/reports" activeClassName="active">Reports</NavLink>
    </div>
  );
};

export default Sidebar;
