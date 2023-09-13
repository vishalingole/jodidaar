import React, { useEffect, useState } from "react";
import { getProfileDetail } from "../../utils/webRequest";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Personal from "../ProfileDetail/Personal";
import Educational from "../ProfileDetail/Educational";
import Family from "../ProfileDetail/Family";
import Address from "../ProfileDetail/Address";
import Expectation from "../ProfileDetail/Expectation";

const getImageUrl = (item) => {
  if (item.file) {
    return `data:image/jpeg;base64,` + item.file;
  } else if (item.gender == "Male")
    return process.env.PUBLIC_URL + "/dummy-man.png";
  else return process.env.PUBLIC_URL + "/dummy-woman.png";
};

const ProfileDetail = () => {
  const { profileId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getProfileDetail({ profileId: profileId }).then((response) =>
      setData(response.data)
    );
  }, []);

  return (
    <>
      <div className="profile-detail-section-header">Header Section</div>
      <Container>
        <div className="profile-detail-section">
          <div className="profile-detail-left-section">
            <div>
              <img
                style={{
                  width: "260px",
                  height: "285px",
                  padding: "2px",
                  border: "1px solid #ccc",
                  borderRadius: "16px",
                }}
                src={getImageUrl(data)}
              />
            </div>
            <div className="profile-id-section">
              {data && data.PersonalDetails && data.PersonalDetails.displayId
                ? data.PersonalDetails.displayId
                : ""}
            </div>
            <div className="profile-name-section">
              {data && data.PersonalDetails && data.PersonalDetails.lastName
                ? data.PersonalDetails.lastName
                : ""}
            </div>
            <div className="get-detail-section">
              <Button>REQUEST DETAILS</Button>
            </div>
          </div>
          <div className="profile-detail-right-section">
            <Personal data={data} />
            <Educational data={data} />
            <Family data={data} />
            {/* <Address data={data} /> */}
            <Expectation data={data} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfileDetail;
