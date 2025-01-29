import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./Login_page.css"; // For styling




export default function Login_page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "1234") {
      alert("Login Successful!");
      navigate("/Home_page");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
          placeholder="Enter Username"
        />
        <p className="error">{errors.username?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Enter Password"
        />
        <p className="error">{errors.password?.message}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
