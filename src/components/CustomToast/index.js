import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "./index.css";

const CustomToast = (props) => {
  const { showToast, handleShowToast, message } = props;
  return (
    <ToastContainer className="custom-toast">
      <Toast
        onClose={() => handleShowToast(false)}
        className="d-inline-block m-1"
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Request Details</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{showToast && message ? message : ""}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
