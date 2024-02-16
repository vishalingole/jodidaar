import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery";
// import "./index.css";
import { getSerchResult } from "../../utils/webRequest";
import { getUserId } from "../../utils/user";

const Bookmarks = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  console.log(location.state);
  const userId = getUserId();
  useEffect(() => {
    async function getData() {
      let payload = userId ? { userId: userId } : {};

      await getSerchResult(payload).then((response) => {
        setData(response.data);
      });
    }
    getData();
  }, []);

  return (
    <>
      <div className="profile-listing-container">
        <ImageGallery result={data && data.items ? data.items : []} />
      </div>
    </>
  );
};

export default Bookmarks;

