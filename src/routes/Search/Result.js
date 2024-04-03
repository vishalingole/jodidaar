import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getProfileImage } from "../../utils/webRequest";
import { getImageUrl } from "../../utils/getImageUrl";

const capital = (val) => {
  return val.toUpperCase();
};
const formatIncome = (price) => {
  return new Intl.NumberFormat().format(price);
};

const Result = (props) => {
  console.log("props", props);
  const navigate = useNavigate();
  const { searchResult = [] } = props;
  const { data } = searchResult;

  const handleViewProfile = (item) => {
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
      navigate(`/search/profile-detail/${item.uuid}`);
    } else {
      alert("Please register yourself.");
      return false;
    }
  };

  return (
    <>
      {data && data.totalItems && data.totalItems == 0 ? (
        <div>No Result Found.</div>
      ) : (
        <Container className="search-result-container">
          {data &&
            data.items.map((item, index) => {
              console.log(item);
              return (
                <div key={index} className="search-result-widget">
                  <div className="search-result">
                    <div className="profile-section-left">
                      <img
                        style={{
                          width: "150px",
                          height: "150px",
                          padding: "2px",
                          borderRadius: "10px",
                        }}
                        src={getImageUrl(item)}
                      />
                      <div className="view-profile-btn">
                        <Button
                          variant="primary"
                          size="sm"
                          className="view-profile"
                          type="submit"
                          onClick={() => handleViewProfile(item)}
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>
                    <div className="profile-middle-section">
                      <div className="profile-id">
                        {item && item.PersonalDetails.displayId
                          ? capital(item.PersonalDetails.displayId)
                          : ""}
                      </div>
                      {/* <div> */}
                      <div className="primary-detail">
                        <div className="content-key">SURNAME : </div>
                        <div className="content-value">
                          {item &&
                          item.PersonalDetails &&
                          item.PersonalDetails.lastName
                            ? capital(item.PersonalDetails.lastName)
                            : "Not Provided"}
                        </div>
                        {/* <div className="content-key">GENDER</div>
                        <div className="content-value">
                          {item &&
                          item.PersonalDetails &&
                          item.PersonalDetails.gender
                            ? capital(item.PersonalDetails.gender)
                            : "Not Provided"}
                        </div> */}
                      </div>
                      <div className="primary-detail">
                        <div className="content-key">NATIVE DISTRICT:</div>
                        <div className="content-value">
                          {item &&
                          item.FamilyBackground &&
                          item.FamilyBackground.nativeDistrict
                            ? capital(item.FamilyBackground.nativeDistrict)
                            : "Not Provided"}
                        </div>
                      </div>
                      <div className="primary-detail">
                        <div className="content-key">INCOME:</div>
                        <div className="content-value">
                          {item &&
                          item.EducationDetails &&
                          item.EducationDetails.income
                            ? formatIncome(item.EducationDetails.income) +
                              " / " +
                              item.EducationDetails.incomeType
                            : "Not Provided"}
                        </div>
                      </div>
                      <div className="primary-detail">
                        <div className="content-key">EDUCATION:</div>
                        <div className="content-value">
                          {item &&
                          item.EducationDetails &&
                          item.EducationDetails.education
                            ? capital(item.EducationDetails.education)
                            : "Not Provided"}
                        </div>
                      </div>
                      <div className="primary-detail">
                        <div className="content-key">OCCUPATION :</div>
                        <div className="content-value">
                          {item &&
                          item.EducationDetails &&
                          item.EducationDetails.occupationDetail
                            ? capital(item.EducationDetails.occupationDetail)
                            : "Not Provided"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Container>
      )}
    </>
  );
};

export default React.memo(Result);
