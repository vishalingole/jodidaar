import React from "react";
import Container from "react-bootstrap/Container";
import "./index.css";
import Card from "react-bootstrap/Card";
import { MdVerified } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { GoDiscussionDuplicate } from "react-icons/go";
import { MdNotificationsActive } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { RiUserSearchLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services-header-section">
        <h5 className="common-heading">SPECIAL FEATURES WE PROVIDES</h5>
      </div>
      <Container>
        <div className="services-card">
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <MdVerified color="#f54c1e" />
                  {/* <img height="30" width={30} src="/signup.png" /> */}
                </div>
                <div className="service-title">Verified Profiles</div>
              </Card.Title>
              <Card.Text className="service-description">
                Geniun Profiles verfication based on the Goverment Id Proff.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <SiGnuprivacyguard color="#f54c1e" />
                </div>
                <div className="service-title">Privacy Controlled</div>
              </Card.Title>
              <Card.Text className="service-description">
                Restrict unwanted access to contact details & photos.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <GoDiscussionDuplicate color="#f54c1e" />
                </div>
                <div className="service-title">Matching Profiles</div>
              </Card.Title>
              <Card.Text className="service-description">
                Profile will be shared based on the expectations set.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <MdNotificationsActive color="#f54c1e" />
                </div>
                <div className="service-title">Notifications</div>
              </Card.Title>
              <Card.Text className="service-description">
                Email, SMS, Whatsup Notifications
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <FaBookmark color="#f54c1e" />
                </div>
                <div className="service-title">Bookmark Profiles</div>
              </Card.Title>
              <Card.Text className="service-description">
                Profile can be Bookmark/Saved for latre refrences.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <RiUserSearchLine color="#f54c1e" />
                </div>
                <div className="service-title">Advance Search</div>
              </Card.Title>
              <Card.Text className="service-description">
                Occupation, City, Education, Income.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Services;
