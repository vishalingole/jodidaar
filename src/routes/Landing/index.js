import React, { useEffect } from "react";
import "./index.css";
import Services from "../Services";
import Register from "../Register";
import AboutUs from "../AboutUs";
import { Container } from "react-bootstrap";
import SuccessStories from "../SuccessStories";
import LatestProfiles from "../LatestProfiles";

const Landing = () => {
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
                Find Your
                <br />
                <span style={{ color: "#f54c1e" }}>Perfect Match</span> <br />
                As per Your Personal Intrest
              </h1>
              <div className="register-btn-container">
                <Register />
              </div>
            </div>
          </div>
          <div className="top-section-right-content">Serarch box</div>
        </Container>
      </div>
      <div id="services">
        <Services />
      </div>
      <AboutUs />
      <SuccessStories />
      <LatestProfiles />
    </>
  );
};

export default Landing;
