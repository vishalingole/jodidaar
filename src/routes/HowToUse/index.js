import React from "react";
import Container from "react-bootstrap/Container";
import "./index.css";
import Card from "react-bootstrap/Card";
import { GoDiscussionDuplicate } from "react-icons/go";
import { FaPeopleArrows } from "react-icons/fa";
import { PiUserRectangle } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";


const HowToUse = () => {
    return (
    <>
      <div className="services-header-section">
        <h5 className="common-heading">HOW TO USE THIS...</h5>
      </div>
      <Container>
        <div className="services-card">
          <Card border="primary" style={{"flex-basis":"23%"}}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <PiUserRectangle color="#f54c1e" />
                  {/* <img height="30" width={30} src="/signup.png" /> */}
                </div>
                <div className="service-title">Create Your Profile</div>
              </Card.Title>
              <Card.Text className="service-description">
              Just fill basic details & access the huge database of Brides / Grooms
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{"flex-basis":"23%"}}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <IoPeopleOutline color="#f54c1e" />
                </div>
                <div className="service-title">Set Partner Preference</div>
              </Card.Title>
              <Card.Text className="service-description">
              Set your Partner Preference & Let’s match your requirement with others
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{"flex-basis":"23%"}}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <GoDiscussionDuplicate color="#f54c1e" />
                </div>
                <div className="service-title">Receive Matching Profiles</div>
              </Card.Title>
              <Card.Text className="service-description">
              Receive matching profiles daily as per your set partner preference
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary" style={{"flex-basis":"23%"}}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <FaPeopleArrows color="#f54c1e" />
                </div>
                <div className="service-title">Send / Receive Interest calls</div>
              </Card.Title>
              <Card.Text className="service-description">
              Send / Receive interest to suitable profiles. Connect & communicate
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
    )

}

export default HowToUse;