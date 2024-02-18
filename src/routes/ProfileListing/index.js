import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery";
import "./index.css";
import {
  bookmarkProfile,
  getSerchResult,
  removeBookmark,
} from "../../utils/webRequest";
import { getUserId } from "../../utils/user";

const ProfileListing = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const userId = getUserId();
  useEffect(() => {
    async function getData() {
      getList();
    }
    getData();
  }, []);

  const getList = () => {
    let payload = userId ? { userId: userId } : {};

    getSerchResult(payload).then((response) => {
      setData(response.data);
    });
  };

  const handleBookmark = (item, type) => {
    console.log(item);
    let payload = {
      bookmarkTo: item.uuid,
      bookmarkBy: userId,
    };
    if (type == "add")
      bookmarkProfile(payload).then((response) => {
        console.log(response);
        let { statusCode } = response.data;
        if (statusCode == 200) getList();
      });
    else
      removeBookmark(payload).then((response) => {
        console.log(response);
        let { statusCode } = response.data;
        if (statusCode == 200) getList();
      });
  };

  return (
    <>
      <div className="profile-listing-container">
        <ImageGallery
          result={data && data.items ? data.items : []}
          handleBookmark={handleBookmark}
        />
      </div>
    </>
  );
};

export default ProfileListing;
