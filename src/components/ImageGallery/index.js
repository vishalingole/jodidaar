import "./index.css";
import React from "react";
import { FaBookmark } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { getImageUrl } from "../../utils/getImageUrl";
import { bookmarkProfile } from "../../utils/webRequest";

const capital = (val) => {
  return val.toUpperCase();
};

const ImageGallery = (props) => {
  const { result } = props;

  const handleBookmark = (item) => {
    console.log(item);
    let payload = {
      bookmarkBy: item.uuid,
      bookmarkTo: "",
    };
    // bookmarkProfile(payload).then((data) => console.log(data));
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
                  onClick={() => handleBookmark(item)}
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
