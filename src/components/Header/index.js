import React, { useState } from "react";
import "./index.css";
import Login from "../Login";

const Header = ({ isLoggedIn }) => {
  const [linkOptions, setLinkOptions] = useState([
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Advance Search",
      href: "/search",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ]);

  const handleLogout = () => {
    console.log("handleLogout");
  };

  const handleLogin = () => {
    // TODO: Implement login logic
  };

  return (
    <header>
      <div>
        <h5>JodiDaar</h5>
      </div>
      <div>
        <ul className="navigation-links">
          {linkOptions.map((option) => (
            <li key={option.label}>
              <a href={option.href}>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="login-btn-container">
        {!isLoggedIn ? <Login /> : <a onClick={handleLogin}>Logout</a>}
      </div>
    </header>
  );
};

export default Header;
