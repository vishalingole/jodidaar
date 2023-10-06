import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Card from "react-bootstrap/Card";

const cardItems = [
  {
    id: 1,
    title: "TOTAL PROFILES",
  },
  {
    id: 2,
    title: "ACTIVE PROFILES",
  },
  {
    id: 3,
    title: "INACTIVE PROFILES",
  },
  {
    id: 4,
    title: "SUCCESS STORIES",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-page">
        <Container>
          <div className="logged-in-user">Hi Vishal, Good Morning!</div>
          <div className="report-section">
            {cardItems.map((item) => {
              return (
                <Card
                  bg={"white"}
                  key={"light"}
                  text={"black"}
                  style={{ width: "17em" }}
                  className="mb-2"
                >
                  <Card.Header style={{ background: "white" }}>
                    {item.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Card Title </Card.Title>
                    <Card.Text>{item.id}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
