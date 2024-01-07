import React, { useState } from "react";
import "./index.css";
import Login from "../Login";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { isUserLoggedIn, getUserId } from "../../utils/user";

const AdminHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUserId = getUserId();
  const [linkOptions, setLinkOptions] = useState([
    {
      label: "Home",
      href: "/admin/dashboard",
    },
    {
      label: "Add User",
      href: "/admin/user/add",
    },
    {
      label: "Operator",
      href: "/admin/operator",
    },
    {
      label: "Advance Search",
      href: "/admin/search",
    },
  ]);

  const handleLogout = () => {
    console.log("handleLogout");
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
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
  if (location) {
    if (location.pathname == "/admin/dashboard") currentRoute = "Home";
    else if (location.pathname == "/admin/search")
      currentRoute = "Advance Search";
    else if (location.pathname.includes("/admin/user/add"))
      currentRoute = "Add User";
    else if (location.pathname.includes("operator")) currentRoute = "Operator";
  }

  return (
    <header className="admin-header">
      <h5>JodiDaar</h5>
      <div>
        <ul className="admin-navigation-links">
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
        {isUserLoggedIn() && (
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

export default AdminHeader;
