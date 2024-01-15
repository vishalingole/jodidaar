import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { getLatestProfiles } from "../../utils/webRequest";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";

const getImageUrl = (item) => {
  if (item.file) {
    return `data:image/jpeg;base64,` + item.file;
  } else if (item.gender == "Male")
    return process.env.PUBLIC_URL + "/dummy-man.png";
  else return process.env.PUBLIC_URL + "/dummy-woman.png";
};

const capital = (val) => {
  return val.toUpperCase();
};

const LatestProfiles = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getLatestProfiles().then((response) => setData(response.data));
  }, []);

  const handleQuickSearch = (id) => {
    navigate("/search", { state: { displayId: id } });
  };

  const getCard = () => {
    return (
      data &&
      data.rows &&
      data.rows.map((item) => {
        return (
          <div className="latest-profiles card text-center">
            <div className="latest-profiles card-header">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "2px",
                  border: "1px solid #ccc",
                  borderRadius: "50px",
                }}
                src={getImageUrl(item)}
              />
            </div>
            <div className="latest-profiles card-body">
              <div className="common-heading">
                <a
                  onClick={() =>
                    handleQuickSearch(item.PersonalDetails.displayId)
                  }
                >
                  {item.PersonalDetails.displayId}
                </a>
              </div>
              <h5 className="card-title">
                {item && item.PersonalDetails && item.PersonalDetails.lastName
                  ? capital(item.PersonalDetails.lastName)
                  : ""}
              </h5>
              <p className="card-text">
                I am a {item.EducationDetails.occupationDetail}. Earning an
                income of Rs.
                {item.EducationDetails.income
                  ? item.EducationDetails.income +
                    " " +
                    "per " +
                    item.EducationDetails.incomeType
                  : ""}
                . I am from {item.FamilyBackground.nativeDistrict} District. I
                have completed my education in
                {item.EducationDetails.education}.
              </p>
            </div>
            <div className="latest-profiles card-footer text-muted">
              <a
                href="#"
                style={{
                  background: "#031333",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "12px",
                }}
              >
                Request Details
              </a>
            </div>
          </div>
        );
      })
    );
  };

  const getSlide = () => {
    return;
  };

  return (
    <>
      <div className="latest-profiles-page">
        <h5 className="success-stories-heading">
          Who knows, your forever might be just a click away.
        </h5>
        <h3 className="latest-profile-sub-heading">
          Check out the new profiles!
        </h3>
        <div className="latest-profile-container">
          <Slider>{getCard()}</Slider>
        </div>
      </div>
    </>
  );
};

export default LatestProfiles;
