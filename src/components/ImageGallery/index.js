import "./index.css";
import React from "react";

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
              <div className="user-surname">
                {item && item.PersonalDetails && item.PersonalDetails.lastName
                  ? capital(item.PersonalDetails.lastName)
                  : "Not Provided"}
              </div>
              <div className="user-years">22 Years</div>
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
