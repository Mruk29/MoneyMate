import React from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
    <div className="welcome-container">
      <header className="navbar">
        <div className="logo">MoneyMate</div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </header>

      <main className="main-section">
        <h1>Welcome to <span>MoneyMate</span></h1>
        <p>Your Smart Personal Finance Assistant</p>

        <div className="info-boxes">
          <div className="info-card">
            <h3>Track Your Spending</h3>
            <p>Automatically analyze and categorize your bank transactions to keep track of expenses.</p>
          </div>
          <div className="info-card">
            <h3>Monthly Insights</h3>
            <p>Get detailed charts and comparisons to understand your spending habits better.</p>
          </div>
          <div className="info-card">
            <h3>Stay Secure</h3>
            <p>Your data is encrypted and securely stored. You stay in control of your finances.</p>
          </div>
        </div>

        <button className="get-started" onClick={() => navigate('/signup')}>Get Started</button>
      </main>
    </div>
    </div>
  );
};

export default Welcome;
