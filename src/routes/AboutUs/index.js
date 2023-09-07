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
            <h2 className="about-us-sub-heading">
              Influencer Marketing for Your Business
            </h2>
            <div className="about-us-details">
              With over 25 years of experience, we have crafted thousands of
              Strategic discovery process that enables us to peel back the
              Layers which enable us to understand, connect, represent and
              Dominate your market.
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
