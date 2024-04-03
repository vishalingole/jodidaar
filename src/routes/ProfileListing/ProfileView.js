import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getProfileImage } from "../../utils/webRequest";
import { getImageUrl } from "../../utils/getImageUrl";
import { getUserId } from "../../utils/user";

const capital = (val) => {
  return val.toUpperCase();
};
const formatIncome = (price) => {
  return new Intl.NumberFormat().format(price);
};

const ProfileView = (props) => {
  console.log("props", props);
  const { result: data } = props;
  const navigate = useNavigate();

  const handleViewProfile = (item) => {
    const userId = getUserId();
    if (userId) {
      navigate(`/search/profile-detail/${item.uuid}`);
    } else {
      alert("Please register yourself.");
      return false;
    }
  };

  return (
    <>
      <Container className="search-result-container">
        {data &&
          data.map((item, index) => {
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
    </>
  );
};

export default ProfileView;
