import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <>
      <div className="services-header-section">
        <h5 className="common-heading">WE PROVIDE</h5>
        <h2>Special Features which we provides</h2>
      </div>
      <Container>
        <Row className="services-card">
          <Col>
            <Card border="primary">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <div className="service-icon">
                    <img height="60" width={60} src="/signup.png" />
                  </div>
                  <div>Sign Up</div>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <div className="service-icon">
                    <img height="60" width={60} src="/search.png" />
                  </div>
                  <div>Advance Search</div>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <div className="service-icon">
                    <img height="60" width={60} src="/stories.png" />
                  </div>
                  <div>Matching Profiles</div>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <div className="service-icon">
                    <img height="60" width={60} src="/stories.png" />
                  </div>
                  <div>Notifications</div>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <div className="service-icon">
                    <img height="60" width={60} src="/signup.png" />
                  </div>
                  <div>Profile</div>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <div className="service-icon">
                    <img height="60" width={60} src="/search.png" />
                  </div>
                  <div>Success Stories</div>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
