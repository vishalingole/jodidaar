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
              className="success-stories-image"
              src="/success-stories.jpeg"
            ></img>
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content"></div>
            <img
              className="success-stories-image"
              src="/success-stories.jpeg"
            ></img>
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content"></div>
            <img
              className="success-stories-image"
              src="/success-stories.jpeg"
            ></img>
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content"></div>
            <img
              className="success-stories-image"
              src="/success-stories.jpeg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
