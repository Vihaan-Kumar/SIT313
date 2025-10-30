import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <div className="newsletter-container">
      <h1>Welcome to DEV@Deakin</h1>
      <h3>Subscribe to our Newsletter</h3>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
