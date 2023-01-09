import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <a href="#" className="navbar-brand">My Navbar</a> */}
      <Link to="/" className="navbar-brand">
        <img
          className="img"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a href="#" >Home</a> */}
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          {/* <a href="#" className="nav-link">Products</a> */}
          <Link to="/product" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          {/* <a href="#" className="nav-link">Categories</a> */}
          <Link to="/category" className="nav-link">
            Categories
          </Link>
        </li>
        <li className="nav-item">
          {/* <a href="#" className="nav-link">About</a> */}
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          {/* <a href="#" className="nav-link">Contact</a> */}
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="button">
        {/* <a href="#" className="btnlogin">Login</a> */}
        <Link to="/login" className="btnlogin">
          Login
        </Link>

        {/* <a href="#" className="btnregister">Register</a> */}
        <Link to="/Register" className="btnregister">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
