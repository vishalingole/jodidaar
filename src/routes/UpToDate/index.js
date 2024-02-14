import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Register from "../Register";

const UpToDate = () => {
  return (
    <>
      <Container>
        <div className="uptodate-section">
          <div className="uptodate-text">
            <h3>
              Stay up-to-date with your
              <br />
              partnersearch using our
              <br />
              <span className="common-heading">JodiDaar</span>
            </h3>
          </div>
          <div className="get-started">
            <Register name="Get Started" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default React.memo(UpToDate);
