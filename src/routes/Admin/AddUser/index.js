import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PersonalDetails from "./PersonalDetails";
import "./index.css";
import { register } from "../../../utils/webRequest";
import { AddUserProvider } from "./AddUserContext";
import EducationDetails from "./EducationDetails";
import Button from "react-bootstrap/Button";
import FamilyBackground from "./FamilyBackground";
import Address from "./Address";
import HoroscopeDetails from "./HoroscopeDetails";
import Expectations from "./Expectation";

const AddUser = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", formData);
    register(formData).then((data) => {
      console.log(data);
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
      }
    });
  };

  const handleClear = () => {
    console.log("----");
    setFormData({});
  };

  return (
    <>
      <div className="admin-search">
        <Container>
          <div className="admin-search-header">New User</div>
          <div className="admin-add-user-container">
            <AddUserProvider
              value={{
                formData: formData,
                handleInputChange: handleInputChange,
              }}
            >
              <form onSubmit={handleFormSubmit}>
                <PersonalDetails />
                <EducationDetails />
                <FamilyBackground />
                <Address />
                <HoroscopeDetails />
                <Expectations />

                <div className="search-buttons">
                  <Button
                    variant="primary"
                    size="sm"
                    className="next-btn"
                    onClick={handleClear}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="next-btn"
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </form>
            </AddUserProvider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AddUser;
