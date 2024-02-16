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
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsGenderFemale } from "react-icons/bs";
import { BsGenderMale } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { getImageUrl } from "../../utils/getImageUrl";
import { RiUserSearchLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { CiBookmark } from "react-icons/ci";

const capital = (val) => {
  return val.toUpperCase();
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
    else if (location.pathname == "/profile-listing") {
      console.log(location.state);
      let searchType =
        location.state && location.state.searchType
          ? location.state.searchType
          : "";
      switch (searchType) {
        case "groom":
          currentRoute = "groom-listing";
          break;
        case "bride":
          currentRoute = "bride-listing";
          break;
        case "divorceeGroom":
          currentRoute = "divorcee-groom-listing";
          break;
        case "divorceeBride":
          currentRoute = "divorcee-bride-listing";
          break;
        case "window":
          currentRoute = "window-listing";
          break;
        case "windower":
          currentRoute = "windower-listing";
          break;
        default:
          break; 
      }
    } else if ((location.pathname == "/terms-conditions")) {
      currentRoute = "terms-and-conditions";
    }
     else if ((location.pathname == "/bookmarks")){
      currentRoute = "bookmarks";
     }
    
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
          <img
            className="lord-ganesh-image"
            src="https://cdn.pixabay.com/photo/2023/09/09/16/03/ai-generated-8243406_640.jpg"
            loading="lazy"
          />
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
                {userObj && userObj.userInfo && userObj.userInfo.lastName
                  ? capital(userObj.userInfo.lastName)
                  : ""}
              </div>
            </li>
            <li
              onClick={() => navigate("/search")}
              className={currentRoute == "Advance Search" ? "active-link" : ""}
            >
              <RiUserSearchLine /> Advance Search
            </li>
            <li
              onClick={() => handleClick("groom")}
              className={currentRoute == "groom-listing" ? "active-link" : ""}
            >
              <BsGenderMale /> Groom
            </li>
            <li
              onClick={() => handleClick("bride")}
              className={currentRoute == "bride-listing" ? "active-link" : ""}
            >
              <BsGenderFemale /> Bride
            </li>
            <li
              onClick={() => handleClick("divorceeGroom")}
              className={
                currentRoute == "divorcee-groom-listing" ? "active-link" : ""
              }
            >
              <BsGenderMale /> Divorcee Groom
            </li>
            <li
              onClick={() => handleClick("divorceeBride")}
              className={
                currentRoute == "divorcee-bride-listing" ? "active-link" : ""
              }
            >
              <BsGenderFemale />
              Divorcee Bride
            </li>
            <li
              onClick={() => handleClick("windower")}
              className={
                currentRoute == "windower-listing" ? "active-link" : ""
              }
            >
              <BsGenderMale /> Windower
            </li>
            <li
              onClick={() => handleClick("window")}
              className={currentRoute == "window-listing" ? "active-link" : ""}
            >
              <BsGenderFemale /> Window
            </li>
            <li>
              <TfiEmail /> Recommended Profiles
            </li>
            <li
              onClick={() => navigate("/bookmarks") }
              className={
                currentRoute == "bookmarks" ? "active-link" : ""
              }
            >
              <CiBookmark /> Saved Profiles
            </li>
            <li>
              <TfiEmail /> Write to us
            </li>
            <li
              onClick={() => navigate("/terms-conditions")}
              className={
                currentRoute == "terms-and-conditions" ? "active-link" : ""
              }
            >
              <GoLaw /> Terms & Conditions
            </li>
          </ul>
          <div
            style={{
              position: "absolute",
              bottom: "0%",
              padding: "10px 0px 0px 40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderTop: "1px solid #ccc",
              width: "100%",
              borderRadius: "30px 30px 50px 50px",
              fontSize: "12px",
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
          {/* <div>
            <h5>JodiDaar</h5>
          </div> */}
          <div
            className="logo"
            style={{ fontWeight: 600 }}
            onClick={() => navigate("/")}
          >
            JOD<span style={{ color: "#F54C1E" }}>I</span>DAAR
          </div>
          <img
            className="lord-ganesh-image-laptop"
            src="https://cdn.pixabay.com/photo/2023/09/09/16/03/ai-generated-8243406_640.jpg"
            loading="lazy"
          />
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
              <li>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Quick Search"
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                  // menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => handleClick("groom")}>
                    Groom
                  </NavDropdown.Item>
                  <NavDropdown.Item active onClick={() => handleClick("bride")}>
                    Bride
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleClick("divorceeGroom")}
                  >
                    Divorcee Groom
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleClick("divorceeBride")}
                  >
                    divorcee Bride
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("windower")}>
                    Windower
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("window")}>
                    Window
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
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
