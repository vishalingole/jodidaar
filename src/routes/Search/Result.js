import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="search-result-widget">
        <div className="search-result">
          <div>
            <img
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid #ccc",
                padding: "2px",
              }}
              src={process.env.PUBLIC_URL + "/dummy-man.png"}
            />
          </div>
          <div>
            <div className="profile-id">G001</div>
            <div className="primary-detail">
              <div>
                <strong>Birth Date :</strong> 28/01/1990
              </div>
              <div>
                <strong>Education :</strong> 28/01/1990
              </div>
              <div>
                <strong>Residance :</strong> 28/01/1990
              </div>
              <div>
                <strong>Birth Date : </strong> 28/01/1990
              </div>
            </div>
            <div>
              <strong>Occupation : </strong> CENTRAL RAILWAY SR. ASSISTANT LOCO
              PILOT SANGLI/8,00,000 PA
            </div>
          </div>
          <div>
            <Button
              variant="primary"
              size="sm"
              className="next-btn"
              type="submit"
              onClick={() => {
                // console.log("clear");
                navigate("/search/profile-detail/001");
              }}
            >
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
