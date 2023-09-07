import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
const LatestProfiles = () => {
  return (
    <>
      <Container>
        <h5 className="success-stories-heading">Latest Profiles</h5>
        <h3 className="success-stories-sub-heading">Look For Your Match</h3>
        <div className="latest-profile-container">
          <div className="latest-profile-card">
            <div className="profile-img-section">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
                </svg>
              </div>
              <div>
                <div>MG1234</div>
                <div>Ingole</div>
              </div>
            </div>
            <div className="dob-section">
              <div>Date of Birth : </div>
              <div> 28/011990</div>
            </div>
            <div className="height-section">
              <div>Height : </div>
              <div> 5.4 ft</div>
            </div>
            <div className="height-section">
              <div>Occupation : </div>
              <div>Software Engineer</div>
            </div>
            <div className="height-section">
              <div>Native Place : </div>
              <div>Washim</div>
            </div>
            <div className="height-section">
              <div>Education : </div>
              <div>Washim</div>
            </div>
          </div>
          <div className="latest-profile-card">Two</div>
          <div className="latest-profile-card">Three</div>
          <div className="latest-profile-card">Four</div>
        </div>
      </Container>
    </>
  );
};

export default LatestProfiles;
