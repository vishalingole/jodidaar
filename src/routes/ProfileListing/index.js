import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery";
import "./index.css";
import { getSerchResult } from "../../utils/webRequest";
import { Container } from "react-bootstrap";

const ProfileListing = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  console.log(location.state);

  useEffect(() => {
    async function getData() {
      await getSerchResult({}).then((response) => {
        console.log(response);
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

export default ProfileListing;
