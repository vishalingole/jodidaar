import React from "react";
import Container from "react-bootstrap/Container";
import "./index.css";
import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <>
      <div className="services-header-section">
        <h5 className="common-heading">SPECIAL FEATURES</h5>
        <h2>Which we provides</h2>
      </div>
      <Container>
        <div className="services-card">
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <img height="30" width={30} src="/signup.png" />
                </div>
                <div className="service-title">100% Screended Profiles</div>
              </Card.Title>
              <Card.Text>-</Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <img height="30" width={30} src="/search.png" />
                </div>
                <div className="service-title">Privacy Controlled</div>
              </Card.Title>
              <Card.Text>-</Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <img height="30" width={30} src="/stories.png" />
                </div>
                <div className="service-title">Matching Profiles</div>
              </Card.Title>
              <Card.Text>-</Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <img height="30" width={30} src="/stories.png" />
                </div>
                <div className="service-title">Notifications</div>
              </Card.Title>
              <Card.Text>-</Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <img height="30" width={30} src="/signup.png" />
                </div>
                <div className="service-title">Bookmark Profiles</div>
              </Card.Title>
              <Card.Text>-</Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <div className="service-icon">
                  <img height="30" width={30} src="/search.png" />
                </div>
                <div className="service-title">Advance Search</div>
              </Card.Title>
              <Card.Text>-</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Services;
