import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getProfileImage } from "../../utils/webRequest";

const Result = (props) => {
  const navigate = useNavigate();
  const { searchResult = [] } = props;
  const { data } = searchResult;
  const [imagePath, setImagePath] = useState("");

  const getImageUrl = (item) => {
    if (item.file) {
      return `data:image/jpeg;base64,` + item.file;
    } else if (item.gender == "Male")
      return process.env.PUBLIC_URL + "/dummy-man.png";
    else return process.env.PUBLIC_URL + "/dummy-woman.png";
  };

  const getImage = async (item) => {
    const path = await getProfileImage({ id: 1 }).then((response) => {
      // console.log(response.data);
      // setImagePath(response.data);
      return response.data;
    });
    let x = `data:image/jpeg;base64,${btoa(
      String.fromCharCode(...new Uint8Array(path))
    )}`;
    console.log("x", x);
    return x;
  };

  const capital = (val) => {
    return val.toUpperCase();
  };

  const formatIncome = (price) => {
    return new Intl.NumberFormat().format(price);
  };

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

  const imageGrid = () => {
    return <>Image Grid</>;
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
                    {/* {JSON.stringify(item)} */}
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
                          className="next-btn"
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
                        {/* <div className="content-key">HEIGHT :</div>
                        <div className="content-value">
                          {item &&
                          item.PersonalDetails &&
                          item.PersonalDetails.height
                            ? item.PersonalDetails.height + " FEET"
                            : "Not Provided"}
                        </div> */}
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
                        {/* <div className="content-key">BIRTH DATE :</div>
                        <div className="content-value">
                          {item &&
                          item.PersonalDetails &&
                          item.PersonalDetails.dob
                            ? item.PersonalDetails.dob
                            : "Not Provided"}
                        </div> */}
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
                        {/* <div className="content-key">OCCUPATION :</div>
                        <div className="content-value">
                          {item &&
                          item.EducationDetails &&
                          item.EducationDetails.occupationDetail
                            ? capital(item.EducationDetails.occupationDetail)
                            : "Not Provided"}
                        </div> */}
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
                      {/* </div> */}
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

export default Result;
