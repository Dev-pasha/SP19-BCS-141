import React from 'react';
import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">My Navbar</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Products</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Categories</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
      <div className="button">
        <a href="#" className="btnlogin">Login</a>
        <a href="#" className="btnregister">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;
