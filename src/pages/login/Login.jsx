import axios from "axios";
import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NotificationSuccess,
  NotificationError,
} from "../../components/Notification";
const Login = ({ userLogin }) => {
  const navigate = useNavigate();
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get("http://localhost:7777/users");
    const users = response.data;
    const user = users.find(
      (user) =>
        user.username === usernameInput && user.password === passwordInput
    );
    console.log(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      userLogin(user);
      NotificationSuccess("Login Successful");
      navigate("/");
    } else if (usernameInput === "" || passwordInput === "") {
      NotificationError("Username and Password can't be null");
    } else {
      NotificationError("Invalid username or password");
      setErr("Invalid username or password");
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={usernameInput}
                onChange={(event) => setUsername(event.target.value)}
                // required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={passwordInput}
                onChange={(e) => setPassword(e.target.value)}
                // required
              />
            </div>
            {err && <p style={{ color: "red" }}>{err}</p>}
            <button type="submit">Login</button>
          </form>
          Don't have account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
