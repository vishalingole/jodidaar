import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { getLatestProfiles } from "../../utils/webRequest";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
          <>
            <div class="latest-profiles card text-center">
              <div class="latest-profiles card-header">
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
              <div class="latest-profiles card-body">
                <div className="common-heading">
                  <a
                    onClick={() =>
                      handleQuickSearch(item.PersonalDetails.displayId)
                    }
                  >
                    {item.PersonalDetails.displayId}
                  </a>
                </div>
                <h5 class="card-title">
                  {item && item.PersonalDetails && item.PersonalDetails.lastName
                    ? capital(item.PersonalDetails.lastName)
                    : ""}
                </h5>
                <p class="card-text">
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
              <div class="latest-profiles card-footer text-muted">
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
            {/* <div className="latest-profile-card">
              <div className="profile-img-section">
                <div>
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
                <div>
                  <div className="common-heading">
                    <a
                      onClick={() =>
                        handleQuickSearch(item.PersonalDetails.displayId)
                      }
                    >
                      {item.PersonalDetails.displayId}
                    </a>
                  </div>
                  <div>
                    {item &&
                    item.PersonalDetails &&
                    item.PersonalDetails.lastName
                      ? capital(item.PersonalDetails.lastName)
                      : ""}
                  </div>
                </div>
              </div>
              <div className="detail-section">
                <div>DATE OF BIRTH : </div>
                <div> {item.PersonalDetails.dob}</div>
              </div>
              <div className="detail-section">
                <div>HEIGHT : </div>
                <div> 5.4 ft</div>
              </div>

              <div className="detail-section">
                <div>OCCUPATION : </div>
                <div>{item.EducationDetails.occupationDetail}</div>
              </div>
              <div className="detail-section">
                <div>INCOME : </div>
                <div>
                  {item.EducationDetails.income
                    ? item.EducationDetails.income +
                      " " +
                      item.EducationDetails.incomeType
                    : ""}
                </div>
              </div>
              <div className="detail-section">
                <div>NATIVE DISTRICT : </div>
                <div>{item.FamilyBackground.nativeDistrict}</div>
              </div>
              <div className="education-content">
                <div>EDUCATION : </div>
                <div>{item.EducationDetails.education}</div>
              </div>
            </div> */}
          </>
        );
      })
    );
  };

  return (
    <>
      {/* <Container className="latest-profiles"> */}
      <div className="latest-profiles-page">
        <h5 className="success-stories-heading">Latest Profiles</h5>
        <h3 className="success-stories-sub-heading">Look For Your Match</h3>
        <div className="latest-profile-container">{getCard()}</div>

        {/* </Container> */}
      </div>
    </>
  );
};

export default LatestProfiles;
