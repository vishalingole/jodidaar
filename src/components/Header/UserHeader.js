import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import Login from "../Login";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { isUserLoggedIn, getUserId } from "../../utils/user";
import IsMobile from "./IsMobile";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";

const UserHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUserId = getUserId();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => setIsChecked(!isChecked);

  const isMobile = IsMobile();
  const mobileMenuRef = useRef(null);
  const { i18n, t } = useTranslation();
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const [linkOptions, setLinkOptions] = useState([
    {
      label: t("home"),
      href: "/",
    },
    {
      label: t("How To Use"),
      href: "/about",
    },
    {
      label: t("advance-search"),
      href: "/search",
    },
    {
      label: t("Terms & Conditions"),
      href: "/contact",
    },
  ]);

  const handleLogout = () => {
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

  const getMobileMenu = () => {
    return (
      <>
        <nav className="mobile-nav">
          <div className="links">
            <strong onClick={toggleMobileMenu}>
              <RxHamburgerMenu />
            </strong>
          </div>
          <div
            className="logo"
            style={{ marginLeft: "30px", fontWeight: 600 }}
            onClick={() => navigate("/")}
          >
            JOD<span style={{ color: "#F54C1E" }}>I</span>DAAR
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
                {/* <CustomToggleButton
                  imageSrc={process.env.PUBLIC_URL + "/dummy-man.png"} // Replace with your image URL
                  checked={isChecked}
                  onChange={handleToggle}
                /> */}
              </>
            )}
          </div>
        </nav>
        <div
          className="mobile-menu"
          ref={mobileMenuRef}
          style={{ display: isMobileMenuOpen ? "flex" : "none" }}
        >
          <ul className="list-of-menubar" >
            <li>How To Use</li>
            <li>Advance Search</li>
            <li onClick={() => navigate('/groom')}>Groom</li>
            <li onClick={() => navigate('/bridge')}>Bridge</li>
            <li onClick={() => navigate('/divorcee-groom')}>Divorcee Groom</li>
            <li onClick={() => navigate('/divorcee-bridge')}>Divorcee Bridge</li>
            <li onClick={() => navigate('/window')}>Window</li>
            <li onClick={() => navigate('/windower')}>Windower</li>
            <li onClick={() => navigate('/terms-conditions')} >Terms & Conditions</li>
            <li>My Profile</li>
            <li>Login</li>
          </ul>
        </div>
      </>
    );
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

  return (
    <>
      {isMobile ? (
        getMobileMenu()
      ) : (
        <header className="user-header">
          <div>
            <h5>JodiDaar</h5>
          </div>
          <div>
            <ul className="navigation-links">
              {linkOptions.map((option) => (
                <li key={option.label}>
                  <a
                    className={
                      currentRoute == option.label ? "active-link" : ""
                    }
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
      )}
    </>
  );
};

export default UserHeader;
