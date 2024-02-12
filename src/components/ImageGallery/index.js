import "./index.css";
import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

const capital = (val) => {
  return val.toUpperCase();
};

const ImageGallery = (props) => {
  const { result } = props;
  console.log(props);

  const getImageUrl = (item) => {
    if (item.file) {
      return `data:image/jpeg;base64,` + item.file;
    } else if (item.gender == "Male")
      return process.env.PUBLIC_URL + "/dummy-man.png";
    else return process.env.PUBLIC_URL + "/dummy-woman.png";
  };

  const getImageItem = () => {
    return result.map((item) => {
      return (
        <>
          <div className="grid-item">
            <img
              className="user-image"
              key={item.id}
              src={getImageUrl(item)}
              alt={item.alt || ""}
            />
            <div className="card-overlay">
              <div className="user-profile-details">
                <div className="user-surname">
                  {item && item.PersonalDetails && item.PersonalDetails.lastName
                    ? capital(item.PersonalDetails.lastName)
                    : "Not Provided"}
                </div>
                <div className="user-years">22 Yr</div>
              </div>
              <span
                className="img-bookmark-icon"
                style={{ position: "absolute", bottom: "3%", right: "5%" }}
              >
                {/* <FaBookmark style={{ fontSize: "26px" }} /> */}
                <CiBookmark
                  title="Save Profile"
                  style={{
                    height: "30px",
                    width: "25px",
                    // position: "absolute",
                    // right: "3%",
                    // bottom: "2%",
                    cursor: "pointer",
                    color: "white",
                  }}
                />
              </span>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="profile-image-grid">{getImageItem()}</div>
    </>
  );
};

export default ImageGallery;
