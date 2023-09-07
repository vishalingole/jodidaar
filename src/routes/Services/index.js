import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h5 className="common-heading">WE PROVIDE</h5>
        <h2>Special Features which we provides</h2>
      </div>
      <Container>
        <Row className="services-card">
          <Col>
            <Card border="primary">
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Sign Up</Card.Title>
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
                  Advance Search
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
                  Matching Profiles
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
                  Notifications
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
                <Card.Title style={{ textAlign: "center" }}>Profile</Card.Title>
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
                  Success Stories
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
