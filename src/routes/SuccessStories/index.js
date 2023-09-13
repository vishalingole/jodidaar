import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";

const SuccessStories = () => {
  return (
    <>
      <div className="success-stories-section">
        <h5 className="success-stories-heading">Success Stories</h5>
        <h3 className="success-stories-sub-heading">
          Thousands Of Success Stories
        </h3>

        <div className="success-stories-cards-container">
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content"></div>
            <img
              style={{
                height: "344px",
                width: "246px",
                borderRadius: "10px",
                background:
                  "linear-gradient(1deg, #FD5C30 0.53%, rgba(0, 0, 0, 0.00) 101.68%)",
              }}
              src="/success-stories.jpeg"
            ></img>
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content"></div>
            <img
              style={{ height: "344px", width: "246px", borderRadius: "10px" }}
              src="/success-stories.jpeg"
            />
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content"></div>
            <img
              style={{ height: "344px", width: "246px", borderRadius: "10px" }}
              src="/success-stories.jpeg"
            />
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content"></div>
            <img
              style={{ height: "344px", width: "246px", borderRadius: "10px" }}
              src="/success-stories.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
