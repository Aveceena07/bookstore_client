import React, { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    username: "",
    password:"",
  });

  const handleOnChange = (e) => {
    setUserLogin((currUser) => {
      return { ...currUser, [e.target.id]: e.target.value };
    });
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);

        if (location.state) {
          navigate(`${location.state.from.pathname}`);
        } else {
          navigate("/")
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="popo">
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text"
            id="username"
            onChange={handleOnChange}
            value={userLogin.username}
            placeholder="Enter email address"
            />
          </div>
          <div className="txt_field">
            <input type="password"
            id="password"
            onChange={handleOnChange}
            value={userLogin.password}
            placeholder="Enter password"
            />
          </div>
          <div className="pass">Forgot Password?</div>
          <button
             type="button"
             className="btn btn-success btn-color mb-2 w-100"
             onClick={signIn}
            
            >
              Login
              </button>
          <div className="signup_link">
            Not a Member? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
