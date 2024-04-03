import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery";
import "./index.css";
import {
  bookmarkProfile,
  getSerchResult,
  removeBookmark,
  getSearchByType,
} from "../../utils/webRequest";
import { getUserId } from "../../utils/user";
import Spinner from "react-bootstrap/Spinner";
import IsMobile from "../../components/Header/IsMobile";
import Result from "../Search/Result";
import ProfileView from "./ProfileView";

const ProfileListing = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = getUserId();
  let isMobile = IsMobile();

  useEffect(() => {
    async function getData() {
      getList();
    }
    getData();
  }, [location]);

  const getList = () => {
    const searchType = location.state ? location.state.searchType : "";
    let payload = userId ? { userId: userId, searchType: searchType } : {};
    console.log("+++++");
    getSearchByType(payload).then((response) => {
      console.log("----", response.data);
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

        {isMobile ? (
          <ImageGallery
            result={data && data.items ? data.items : []}
            handleBookmark={handleBookmark}
          />
        ) : (
          <ProfileView result={data && data.items ? data.items : []} />
        )}
      </div>
    </>
  );
};

export default ProfileListing;
