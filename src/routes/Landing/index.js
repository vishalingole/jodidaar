import React from "react";
import "./index.css";
import Services from "../Services";
const Landing = () => {
  return (
    <>
      <div className="top-section">
        <div className="jodidaar-logo">
          <img src="/favicon.ico" alt="Image" />
        </div>
      </div>
      <div id="services">
        <Services />
      </div>
    </>
  );
};

export default Landing;
