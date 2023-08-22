import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Result = (props) => {
  const navigate = useNavigate();
  const { searchResult = [] } = props;
  const { data } = searchResult;
  console.log(data.totalItems);

  const getImageUrl = (item) => {
    if (item.gender == "Male") return process.env.PUBLIC_URL + "/dummy-man.png";
    else return process.env.PUBLIC_URL + "/dummy-woman.png";
  };

  return (
    <>
      {data && data.totalItems && data.totalItems == 0 ? (
        <div>No Result Found.</div>
      ) : (
        data.items.map((item) => {
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
                  <div className="profile-id">{item?.displayId || ""}</div>
                  <div className="primary-detail">
                    <div>
                      <strong>Surname : </strong>
                      {item?.lastName || "Not Provided"}
                    </div>
                    <div>
                      <strong>Gender :</strong> {item?.gender || "Not Provided"}
                    </div>
                    <div>
                      <strong>Residance :</strong> 28/01/1990
                    </div>
                    <div>
                      <strong>Birth Date : </strong>
                      {item?.dob || "Not Provided"}
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
