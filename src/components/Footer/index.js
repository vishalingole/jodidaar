import React, { Component } from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Copyright © 2023 Company Name</p>
        <ul className="footer-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
