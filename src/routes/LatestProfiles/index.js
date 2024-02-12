import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import { getLatestProfiles } from "../../utils/webRequest";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { AiOutlineCloseCircle } from "react-icons/ai";
import IsMobile from "../../components/Header/IsMobile";
import { RxBookmarkFilled } from "react-icons/rx";
import { FaRegBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

import { getImageUrl } from "../../utils/getImageUrl";

const capital = (val) => {
  return val.toUpperCase();
};

const LatestProfiles = () => {
  const [data, setData] = useState([]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const imageRef = useRef(null);
  let isMobile = IsMobile();

  const navigate = useNavigate();

  useEffect(() => {
    getLatestProfiles().then((response) => {
      console.log("response", response);
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    if (isPreviewOpen) {
      console.log("+++");
      const image = imageRef.current;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      // Draw image onto canvas
      canvas.width = image.width;
      canvas.height = image.height;
      // ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Write brand website name on canvas
      ctx.font = "20px Arial BOLD"; // Adjust font as needed
      ctx.fillStyle = "black"; //"rgba(255, 255, 255, 0.8)"; // Semi-transparent white
      ctx.textAlign = "center";
      ctx.fillText("JODIDAAR.com", canvas.width / 2, canvas.height - 30); // Adjust position as needed
      console.log("canvas", canvas);
      // Display the modified canvas image
      image.src = canvas.toDataURL();
    }
  }, [isPreviewOpen]);

  const handleQuickSearch = (id) => {
    navigate("/search", { state: { displayId: id } });
  };

  const handleImageClick = async (item) => {
    let imageUrl = getImageUrl(item);
    setImageUrl(imageUrl);
    setIsPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
  };

  const getCard = () => {
    return (
      data &&
      data.rows &&
      data.rows.map((item) => {
        return (
          <div className="latest-profiles card text-center">
            <div className="latest-profiles card-header">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "2px",
                  border: "1px solid #ccc",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                src={getImageUrl(item)}
                onClick={() => handleImageClick(item)}
              />
            </div>
            <div className="latest-profiles card-body">
              <div className="common-heading">
                <a
                  onClick={() =>
                    handleQuickSearch(item.PersonalDetails.displayId)
                  }
                >
                  {item.PersonalDetails.displayId}
                </a>
              </div>
              <h5 className="card-title">
                {item && item.PersonalDetails && item.PersonalDetails.lastName
                  ? capital(item.PersonalDetails.lastName)
                  : ""}
              </h5>
              <p className="card-text" style={{ height: "70px" }}>
                I am a {item.EducationDetails.occupationDetail}. Earning an
                income of Rs.
                {item.EducationDetails.income
                  ? item.EducationDetails.income +
                    " " +
                    "per " +
                    item.EducationDetails.incomeType
                  : ""}
                . I am from {item.FamilyBackground.nativeDistrict} District. I
                have completed my education in
                {item.EducationDetails.education}.
              </p>
            </div>
            <div className="latest-profiles card-footer text-muted">
              <a
                href="#"
                style={{
                  background: "#031333",
                  color: "white",
                  padding: "6px 10px 6px 10px",
                  fontSize: "12px",
                }}
              >
                Request Details
              </a>
              <CiBookmark
                title="Save Profile"
                style={{
                  height: "30px",
                  width: "25px",
                  position: "absolute",
                  right: "3%",
                  bottom: "2%",
                  cursor: "pointer",
                }}
              />

              {/* <RxBookmarkFilled
                title="Remove Profile"
                background="#031333"
                style={{
                  height: "30px",
                  width: "25px",
                  position: "absolute",
                  right: "3%",
                  bottom: "2%",
                  cursor: "pointer",
                }}
              /> */}
            </div>
          </div>
        );
      })
    );
  };

  const getSlide = () => {
    return;
  };

  return (
    <>
      <div className="latest-profiles-page">
        <h5 className="success-stories-heading">
          Who knows,
          <br /> Your forever might be just a click away.
        </h5>
        <h3 className="latest-profile-sub-heading">
          Check out the new profiles!
        </h3>
        <div className="latest-profile-container">
          <Slider>{getCard()}</Slider>
        </div>
      </div>
      {isPreviewOpen && (
        <div className="image-preview-overlay">
          <img ref={imageRef} src={imageUrl} alt="Profile Image Preview" />
          <button className={"preview-close-btn"} onClick={handlePreviewClose}>
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}
    </>
  );
};

export default LatestProfiles;
