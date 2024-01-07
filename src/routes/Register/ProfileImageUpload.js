import React, { useState } from "react";
import { uploadProfileImage } from "../../utils/webRequest";

const ProfileImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", 1);

    // const canvas = document.createElement("canvas");
    // const ctx = canvas.getContext("2d");

    // ctx.font = "24px sans-serif";
    // ctx.fillStyle = "black";
    // ctx.fillText("applicationName", 10, 10);

    // // Save the canvas element as an image
    // const canvasBlob = await canvas.toBlob("image/png");

    // // Append the canvas image to the FormData object
    // formData.append("canvasImage", canvasBlob);

    uploadProfileImage(formData);
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="file" onChange={handleFileChange} />
        <button type="submit">Upload Image</button>
      </form>
    </>
  );
};

export default ProfileImageUpload;
