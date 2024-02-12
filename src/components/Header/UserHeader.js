import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import Login from "../Login";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { isUserLoggedIn, getUserId } from "../../utils/user";
import IsMobile from "./IsMobile";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const getImageUrl = () => {
  return process.env.PUBLIC_URL + "/dummy-woman.png";
};

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

  const user = localStorage.getItem("user");
  const userObj = user ? JSON.parse(user) : {};
  const userId = userObj && userObj.id ? userObj.id : "";

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
    if (userId) {
      localStorage.removeItem("user");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  const handleClick = (searchType) => {
    toggleMobileMenu();
    navigate("/profile-listing", {
      state: {
        searchType: searchType,
      },
    });
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
          <img className="ganpati-img" style={{ height:"40px", position:"absolute", left:"50%"}}  src="https://cdn.pixabay.com/photo/2023/09/09/16/03/ai-generated-8243406_640.jpg"/>
          <div className="login-btn-container">
            {!isUserLoggedIn() ? (
              <Login /> 
            ) : (
              <>
                <Button
                  className={!isMobile ? "login-btn" : "login-btn-mobile"}
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
          <ul className="list-of-menubar">
            <li>
              <img
                className="user-profile-image"
                style={{}}
                src={getImageUrl(userObj)}
                // onClick={() => handleImageClick(item)}
              />
              <div className="user-name">
                {/* {userObj && userObj.user && userObj.user.lastName
                  ? capital(userObj.user.lastName)
                  : ""} */}
              </div>
            </li>
            <li>Choose Language</li>
            <li
              onClick={() => navigate("/search")}
              className={currentRoute == "Advance Search" ? "active-link" : ""}
            >
              <FaSearch /> Advance Search
            </li>
            <li onClick={() => handleClick("groom")}> <IoIosMan /> Groom</li>
            <li
              onClick={() =>
                navigate("/profile-listing", {
                  state: {
                    searchType: "bridge",
                  },
                })
              }
            > <FaFemale />
              Bridge
            </li>
            <li
              onClick={() =>
                navigate("/profile-listing", {
                  state: {
                    searchType: "divorceeGroom",
                  },
                })
              }
            > <IoIosMan />
              Divorcee Groom
            </li>
            <li
              onClick={() =>
                navigate("/profile-listing", {
                  state: {
                    searchType: "divorceeBridge",
                  },
                })
              }
            > <FaFemale />
              Divorcee Bridge
            </li>
            <li
              onClick={() =>
                navigate("/profile-listing", {
                  state: {
                    searchType: "window",
                  },
                })
              }
            > <FaFemale />
              Window
            </li>
            <li
              onClick={() =>
                navigate("/profile-listing", {
                  state: {
                    searchType: "windower",
                  },
                })
              }
            > <IoIosMan />
              Windower
            </li>
            <li onClick={() => navigate("/terms-conditions")}>
              Terms & Conditions
            </li>
          </ul>
          <div
            style={{
              position: "absolute",
              bottom: "0%",
              padding: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderTop: "1px solid #ccc",
              width: "100%",
              borderRadius: "0px 30px 0px 0px",
            }}
          >
            <div>Finding this app useful?</div>
            <div style={{ marginLeft: "10px" }}>
              <FaRegThumbsUp />
            </div>
            <div style={{ marginLeft: "10px", marginTop: "5px" }}>
              <FaRegThumbsDown />
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleLogin = () => {
    // TODO: Implement login logic
  };

  // let currentRoute = "";
  // console.log(location.pathname);
  // if (location) {
  //   if (location.pathname == "/") currentRoute = "Home";
  //   else if (location.pathname == "/search") currentRoute = "Advance Search";
  //   else if (location.pathname == "/contact") currentRoute = "Contact Us";
  //   else if (location.pathname == "/about") currentRoute = "About Us";
  //   else if (location.pathname.includes("/myprofile"))
  //     currentRoute = "myprofile";
  // }

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
                  className={!isMobile ? "login-btn" : "login-btn-mobile"}
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
