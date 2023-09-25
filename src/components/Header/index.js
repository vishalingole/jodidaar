import React, { useState } from "react";
import "./index.css";
import Login from "../Login";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { isUserLoggedIn, getUserId } from "../../utils/user";

// const isUserLoggedIn = () => {
//   const user = localStorage.getItem("user");
//   const userObj = user ? JSON.parse(user) : {};
//   const userId = userObj && userObj.id ? userObj.id : "";
//   console.log("++++");
//   if (userId) {
//     console.log("---");
//     return true;
//   }
//   return false;
// };

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUserId = getUserId();
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
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
      console.log("----");
      localStorage.removeItem("user");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  const handleLogin = () => {
    // TODO: Implement login logic
  };

  let currentRoute = "";
  console.log(location.pathname);
  if (location) {
    if (location.pathname == "/") currentRoute = "Home";
    else if (location.pathname == "/search") currentRoute = "Advance Search";
    else if (location.pathname == "/contact") currentRoute = "Contact Us";
    else if (location.pathname == "/about") currentRoute = "About Us";
    else if (location.pathname.includes("/myprofile"))
      currentRoute = "myprofile";
  }

  console.log(location, currentRoute);

  return (
    <header>
      <div>
        <h5>JodiDaar</h5>
      </div>
      <div>
        <ul className="navigation-links">
          {linkOptions.map((option) => (
            <li key={option.label}>
              <a
                className={currentRoute == option.label ? "active-link" : ""}
                href={option.href}
              >
                {option.label}
              </a>
            </li>
          ))}
          {isUserLoggedIn() && (
            <li>
              <a
                className={currentRoute == "myprofile" ? "active-link" : ""}
                href={`/myprofile/${loggedInUserId}`}
              >
                My Profile
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="login-btn-container">
        {!isUserLoggedIn() ? (
          <Login />
        ) : (
          <>
            <Button
              className="login-btn"
              variant="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
