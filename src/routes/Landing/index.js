import React, { useEffect, useState } from "react";
import "./index.css";
import Services from "../Services";
import Register from "../Register";
import AboutUs from "../AboutUs";
import { Button, Container } from "react-bootstrap";
import SuccessStories from "../SuccessStories";
import LatestProfiles from "../LatestProfiles";
import UpToDate from "../UpToDate";
import SelectDropdown from "../../components/SelectDropdown";
import { lookingForColumns } from "../Search/column";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { getDisticts } from "../../utils/webRequest";

const Landing = () => {
  const [formData, setFormData] = useState({});
  const [districtList, setDistrictList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDistictsList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getDistictsList = () => {
    getDisticts().then((response) => setDistrictList(response.data));
  };

  const handleQuickSearch = () => {
    navigate("/search", { state: { ...formData } });
  };

  return (
    <>
      <div className="top-section">
        {/* <div className="jodidaar-logo">
          <img src="/favicon.ico" alt="Image" />
        </div> */}
        <Container className="top-section-content">
          <div className="top-section-left-content">
            <div>
              <h1>
                {/* Find Your
                <br />
                <span style={{ color: "#f54c1e" }}>Perfect Match</span> <br /> */}
                {/* As per Your Personal Intrest Match beyond the basics. */}
                {/* <br /> */}
                Find
                <br />
                <span style={{ color: "#f54c1e" }}> Perfect Life Partner </span>
                <br />
                through shared passions.
              </h1>
              <div className="register-btn-container">
                <Register />
              </div>
            </div>
          </div>
          <div className="top-section-right-content">
            <div className="quick-search">
              I Am Looking For
              <div>
                <SelectDropdown
                  data={lookingForColumns}
                  name="lookingFor"
                  onChange={handleInputChange}
                  value={
                    formData && formData.lookingFor ? formData.lookingFor : ""
                  }
                />
              </div>
              <div>
                <SelectDropdown
                  data={districtList}
                  name="nativeDistrict"
                  onChange={handleInputChange}
                  value={
                    formData && formData.nativeDistrict
                      ? formData.nativeDistrict
                      : ""
                  }
                />
              </div>
              <div>
                <Button
                  className="quick-search-button"
                  onClick={handleQuickSearch}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="shivaji-maharaj-logo-container">
            <img
              className="shivaji-maharaj-logo"
              src="/chatrapati.png"
              alt="Image"
            />
          </div>
        </Container>
      </div>
      <div id="services">
        <Services />
      </div>
      <AboutUs />
      <SuccessStories />
      <LatestProfiles />
      <UpToDate />
    </>
  );
};

export default Landing;
