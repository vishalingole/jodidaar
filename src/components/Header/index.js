import React, { useState } from "react";
import "./index.css";

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
      label: "Contact",
      href: "/contact",
    },
  ]);

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
        {!isLoggedIn && (
          <li>
            <button onClick={handleLogin}>Login</button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
