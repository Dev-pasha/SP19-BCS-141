import React from "react";
import "./login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Actions/user";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email, password);

    dispatch(loginUser(email, password));
    
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3">Social Hub</Typography>

        <input
          type="email"
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Link to="/forgot/password">
          <Typography>Forgot Password?</Typography>
        </Link>

        <Button
          style={{ padding: "13px 23vh", borderRadius: "50px" }}
          variant="outlined"
          type="submit"
        >
          Login
        </Button>
        <Link to="/register">
          <Typography>Don't have an account? Register</Typography>
        </Link>
      </form>
    </div>
  );
};

export default Login;
