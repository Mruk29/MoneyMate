import React from "react";
import "./Modal.css";

export default function SignupModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Join Second Brain</h2>
        <p>Save tweets, organize links, and declutter your mind.</p>

        <label>Username</label>
        <input type="text" placeholder="Username" />

        <label>Password</label>
        <input type="password" placeholder="Password" />

        <small>Minimum 6 characters</small>

        <button className="black-btn">Create Account</button>

        <p className="bottom-text">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}
