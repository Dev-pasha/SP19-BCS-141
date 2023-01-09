import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleregister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-container">
      <h1>Create an account</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit" onClick={handleregister} className="btn">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
