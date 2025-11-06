import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No registered user found. Please register first.");
      return;
    }

    if (storedUser.contact === contact && storedUser.password === password) {
      alert(`Welcome  ${storedUser.firstName} !`);
      navigate("/home"); 
    } else {
      setError("Invalid email/phone or password.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Email or Phone"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="user">
          <Link to="/new_user">New User / </Link>
          <Link to="/forget">Forget Password</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
