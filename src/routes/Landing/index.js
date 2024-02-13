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
import { lookingForColumns, languageColumns } from "../Search/column";
import { useLocation, useNavigate } from "react-router-dom";
import { getDisticts } from "../../utils/webRequest";

const Landing = () => {
  const [formData, setFormData] = useState({});
  const [districtList, setDistrictList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleLanguageChange = (e) => {
    let url = window.location.href;
    let lng = e.target.value;
    if (e.target.value) {
      if (window.location.search.indexOf("?lng=") == -1) url += `?lng=${lng}`;
      else url = url.replace(/(\?lng=).*/, `?lng=${lng}`);
      window.location.href = url;
    }
  };

  return (
    <>
      <div className="top-section">
        <Container className="top-section-content">
          <div className="language-dropdown">
            <SelectDropdown
              data={languageColumns}
              name="language"
              onChange={handleLanguageChange}
              value={formData && formData.lookingFor ? formData.lookingFor : ""}
            />
          </div>
          <div className="top-section-left-content">
            <div>
              <h1>
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
