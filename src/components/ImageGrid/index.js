import React, { useState, useEffect } from "react";
import "./index.css";

const ImageGrid = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let columns = 2;
  console.log(props);
  const { result } = props;
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateColumns = () => {
    if (windowWidth > 768) {
      return Math.min(columns, Math.floor(windowWidth / 200)); // Adjust 200 based on image width
    } else {
      return 1; // Single column for small screens
    }
  };

  const gridColumns = calculateColumns();

  const getImageUrl = (item) => {
    if (item.file) {
      return `data:image/jpeg;base64,` + item.file;
    } else if (item.gender == "Male")
      return process.env.PUBLIC_URL + "/dummy-man.png";
    else return process.env.PUBLIC_URL + "/dummy-woman.png";
  };

  return (
    <div style={{}} className="image-grid">
      {result.map((item) => (
        <img
          key={item.id} // Ensure unique keys for images
          className="image-grid-content"
          src={getImageUrl(item)}
          alt={item.alt || ""} // Provide image alt text
        />
      ))}
    </div>
  );
};

export default ImageGrid;
