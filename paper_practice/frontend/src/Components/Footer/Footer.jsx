import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__logo">
          <img className="img"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
          />
        </div>
        <div className="footer__container__links">
          <ul className="links">
            <li className="l">Audio and Subtitles</li>
            <li  className="l">Media Center</li>
            <li  className="l">Privacy</li>
            <li  className="l">Contact Us</li>
          </ul>
        </div>
        {/* <div className="footer__container__social">
          <ul>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>

            <li>
              <i className="fab fa-youtube"></i>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
