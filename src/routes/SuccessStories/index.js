import React from "react";
import "./index.css";
import ReadMore from "../../components/ReadMore";

const SuccessStories = () => {
  const staticText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim,";

  return (
    <>
      <div className="success-stories-section">
        <h5 className="success-stories-heading">Success Stories</h5>
        <h3 className="success-stories-sub-heading">
          Thousands Of Success Stories
        </h3>

        <div className="success-stories-cards-container">
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content">
              <div>
                <h4>Vishal & Neha</h4>
                <ReadMore text={staticText} />
              </div>
            </div>
            <img
              className="success-stories-image"
              src="/success-stories.jpeg"
            ></img>
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content">
              <div>
                <h4>Vishal & Neha</h4>
                <ReadMore text={staticText} />
              </div>
            </div>
            <img
              className="success-stories-image"
              src="/success-stories.jpeg"
            ></img>
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content">
              <div>
                <h4>Vishal & Neha</h4>
                <ReadMore text={staticText} />
              </div>
            </div>
            <img
              className="success-stories-image"
              src="/success-stories.jpeg"
            ></img>
          </div>
          <div className="success-stories-content-wrapper">
            <div className="success-stories-content">
              <div>
                <h4>Vishal & Neha</h4>
                <ReadMore text={staticText} />
              </div>
            </div>
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

const customCompartor = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default React.memo(SuccessStories, customCompartor);
