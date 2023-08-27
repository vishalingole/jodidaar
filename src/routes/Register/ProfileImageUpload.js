import React, { useState } from "react";
import { uploadProfileImage } from "../../utils/webRequest";

const ProfileImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", 1);
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
