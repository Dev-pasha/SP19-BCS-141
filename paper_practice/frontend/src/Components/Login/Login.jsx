import React, { useState } from 'react';
import './style.css';

function Login() {
  const [form, setValues] = useState({
    email: '',
    password: ''
  });

  const [forgotPassword, setForgotPassword] = useState(false);

  const handleChange = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };

  const toggleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  return (
    <div className="login-container">
      {forgotPassword ? (
        <ForgotPassword toggleForgotPassword={toggleForgotPassword} />
      ) : (
        <LoginForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleForgotPassword={toggleForgotPassword}
        />
      )}
    </div>
  );
}

const LoginForm = ({ form, handleChange, handleSubmit, toggleForgotPassword }) => (
  <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn">
        Login
      </button>
    </div>
    <div className="form-group">
      <button type="button" onClick={toggleForgotPassword} className="btn btn-link">
        Forgot password?
      </button>
    </div>
  </form>
);

const ForgotPassword = ({ toggleForgotPassword }) => (
  <form>
    <h1>Forgot password</h1>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" required />
    </div>
    <div className="form-group">
      <button type="submit" className="btn">
        Send reset link
      </button>
    </div>
    <div className="form-group">
      <button type="button" onClick={toggleForgotPassword} className="btn btn-link">
        Cancel
      </button>
    </div>
  </form>
);

export default Login;
