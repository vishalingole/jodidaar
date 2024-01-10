import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Button from "react-bootstrap/Button";

const AboutUs = () => {
  return (
    <>
      <Container>
        <div className="about-us-section">
          <div className="about-us-left-section">
            <div className="about-us-image"></div>
          </div>
          <div className="about-us-right-section">
            <h5 className="about-us-heading">About Us</h5>
            <h2 className="about-us-sub-heading">A Legacy of Harmony</h2>
            <div className="about-us-details">
              For over 5 years, we've helped countless couples from the Maratha
              community find love and build beautiful families together. Our
              commitment to providing a safe, secure, and faith-based
              environment has earned us the trust of families across
              generations.
            </div>
            <div>
              <Button className="contact-btn">
                Phone Number: +002698 22 33
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
