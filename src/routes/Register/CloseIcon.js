import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CloseIcon = ({ onClick }) => {
  return (
    <AiOutlineCloseCircle
      onClick={onClick}
      style={{ fontSize: "20px", cursor: "pointer" }}
    />
  );
};

export default CloseIcon;
