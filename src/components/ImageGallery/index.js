import "./index.css";
import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { getImageUrl } from "../../utils/getImageUrl";
import { bookmarkProfile, getBookmarList } from "../../utils/webRequest";
import { getUserId } from "../../utils/user";
import moment from "moment";

const capital = (val) => {
  return val.toUpperCase();
};

const getAge = (item) => {
  var years = moment().diff("1981-01-01", "years", false);
  console.log(years);
};

const ImageGallery = (props) => {
  const { result } = props;
  const [bookmarList, setBookmarkList] = useState([]);

  const userId = getUserId();

  useEffect(() => {
    getBookmarList({ loggedInUserId: userId }).then((response) => {
      setBookmarkList(response.data.items);
    });
  }, []);

  const isProfileBookmarked = (uuid) => {
    const isItemPresent = bookmarList.includes(uuid);
    return isItemPresent;
  };

  const handleBookmark = (item) => {
    console.log(item);
    let payload = {
      bookmarkTo: item.uuid,
      bookmarkBy: userId,
    };
    bookmarkProfile(payload);
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
                <div className="user-years">
                  {item && item.PersonalDetails && item.PersonalDetails.dob
                    ? item.PersonalDetails.dob
                    : "Not Provided"}
                  Yr
                </div>
              </div>
              <span
                className="img-bookmark-icon"
                style={{ position: "absolute", bottom: "3%", right: "5%" }}
              >
                {/* <FaBookmark style={{ fontSize: "26px" }} /> */}
                {!isProfileBookmarked(item.uuid) ? (
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
                ) : (
                  <FaBookmark
                    title="Remove Profile"
                    style={{
                      height: "20px",
                      width: "20px",
                      // position: "absolute",
                      // right: "3%",
                      // bottom: "2%",
                      cursor: "pointer",
                      color: "white",
                    }}
                  />
                )}
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
