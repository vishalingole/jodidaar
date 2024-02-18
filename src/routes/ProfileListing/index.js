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
import Spinner from "react-bootstrap/Spinner";

const ProfileListing = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    let payload = {
      bookmarkTo: item.uuid,
      bookmarkBy: userId,
    };
    if (type == "add")
      bookmarkProfile(payload).then((response) => {
        setLoading(false);
        let { statusCode } = response.data;
        if (statusCode == 200) getList();
      });
    else
      removeBookmark(payload).then((response) => {
        setLoading(false);
        let { statusCode } = response.data;
        if (statusCode == 200) getList();
      });
  };

  return (
    <>
      <div className="profile-listing-container">
        {loading && (
          <div className="spinner-overlay">
            <Spinner animation="grow" variant="light" />
          </div>
        )}
        <ImageGallery
          result={data && data.items ? data.items : []}
          handleBookmark={handleBookmark}
        />
      </div>
    </>
  );
};

export default ProfileListing;
