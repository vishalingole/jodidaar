import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getProfileImage } from "../../utils/webRequest";

const Result = (props) => {
  const navigate = useNavigate();
  const { searchResult = [] } = props;
  const { data } = searchResult;
  const [imagePath, setImagePath] = useState("");
  console.log(data.totalItems);

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

  return (
    <>
      {data && data.totalItems && data.totalItems == 0 ? (
        <div>No Result Found.</div>
      ) : (
        data.items.map((item) => {
          console.log(item);
          return (
            <div className="search-result-widget">
              <div className="search-result">
                {/* {JSON.stringify(item)} */}
                <div>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid #ccc",
                      padding: "2px",
                    }}
                    src={getImageUrl(item)}
                  />
                </div>
                <div>
                  <div className="profile-id">
                    {item && item.displayId ? item.displayId : ""}
                  </div>
                  <div className="primary-detail">
                    <div>
                      <strong>Surname : </strong>
                      {item && item.lastName ? item.lastName : "Not Provided"}
                    </div>
                    <div>
                      <strong>Gender :</strong>{" "}
                      {item && item.gender ? item.gender : "Not Provided"}
                    </div>
                    <div>
                      <strong>Residance :</strong> 28/01/1990
                    </div>
                    <div>
                      <strong>Birth Date : </strong>
                      {item && item.dob ? item.dob : "Not Provided"}
                    </div>
                  </div>
                  <div>
                    <strong>Occupation : </strong> CENTRAL RAILWAY SR. ASSISTANT
                    LOCO PILOT SANGLI/8,00,000 PA
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
                      navigate(`/search/profile-detail/${item.userId}`);
                    }}
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Result;
