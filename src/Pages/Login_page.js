
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login_page.css"; // For styling

import React from 'react'

import './Login_page.css'




export default function Login_page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Used for navigation

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      alert("Login Successful!");
      navigate("/Home_page.js"); // Redirect to another page
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (

    <div className="login-container">
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />

    <div>
     
     </div>
  )
}


      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}