import React, { useState } from "react";
import "./index.css";
import IsMobile from "../Header/IsMobile";
const ReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobileDevice = IsMobile();
  const maxChars = isMobileDevice ? 72 : 67;
  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const trimmedText = `${text.substring(0, maxChars)}${
    isExpanded ? "" : "..."
  }`;

  return (
    <p>
      {trimmedText}
      {!isExpanded && (
        <a className="read-more-text" onClick={handleReadMore}>
          Read More
        </a>
      )}
    </p>
  );
};

export default ReadMore;
