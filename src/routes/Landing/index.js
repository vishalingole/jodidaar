import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
import Register from "../Register";
import { Button, Container, Spinner } from "react-bootstrap";
import SelectDropdown from "../../components/SelectDropdown";
import { lookingForColumns, languageColumns } from "../Search/column";
import { useLocation, useNavigate } from "react-router-dom";
import { useDistricts } from "../../hooks/useDistricts";

const Services = React.lazy(() => import("../Services"));
const AboutUs = React.lazy(() => import("../AboutUs"));
const HowToUse = React.lazy(() => import("../HowToUse"));
const SuccessStories = React.lazy(() => import("../SuccessStories"));
const LatestProfiles = React.lazy(() => import("../LatestProfiles"));
const UpToDate = React.lazy(() => import("../UpToDate"));

const Landing = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const districtList = useDistricts();

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    },
    [formData]
  );

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
              Looking For
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
      {/* Lazy-loaded components */}
      <React.Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <div id="services">
          <Services />
        </div>
        <AboutUs />
        <HowToUse /> <br />
        <SuccessStories />
        <LatestProfiles />
        <UpToDate />
      </React.Suspense>
    </>
  );
};

export default Landing;
