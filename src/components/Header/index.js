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
      label: "About",
      href: "/about",
    },
    {
      label: "Search",
      href: "/search",
    },
    {
      label: "Contact",
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
      <h5>JodiDaar</h5>
      <ul>
        {linkOptions.map((option) => (
          <li key={option.label}>
            <a href={option.href}>{option.label}</a>
          </li>
        ))}
        {!isLoggedIn ? (
          <li>
            <Login />
          </li>
        ) : (
          <li>
            <a onClick={handleLogin}>Logout</a>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
