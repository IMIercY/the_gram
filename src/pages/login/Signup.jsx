import React from "react";
import { useState } from "react";
import "./signup.css";
import axios from "axios";
import {
  NotificationError,
  NotificationSuccess,
} from "../../components/Notification";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get("http://localhost:7777/users");
    console.log(response);
    const checkUser = response.data.find((user) => user.username === username);
    if (checkUser) {
      console.log("checkUser", { checkUser });
      setError("User already exits");
      NotificationError("User already exits");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      NotificationError("Passwd Not Match");
    } else {
      setError("");
      console.log("Form submitted", { username, password, confirmPassword });
      // Add signup logic here
      const response = await axios.post("http://localhost:7777/users", {
        username,
        password,
      });
      if (response.status === 201) {
        console.log(response);
        NotificationSuccess("Sign Up Success}");
        navigate("/login");
      }
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
