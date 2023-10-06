import React, { useState } from "react";
import "./index.css";
import Login from "../Login";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { isUserLoggedIn, getUserId } from "../../utils/user";
import UserHeader from "./UserHeader";
import AdminHeader from "./AdminHeader";

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
  console.log("+++", location);
  return (
    <>
      {location.pathname.includes("/admin") ? <AdminHeader /> : <UserHeader />}
    </>
  );
};

export default Header;
