import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { login, verifyOTP } from "../../utils/webRequest";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { error } from "jquery";

const Login = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState();
  const [otp, setOtp] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    console.log(formData);
    login(formData).then((response) => {
      if (response.status == "success") {
        setUserId(response.id);
        setOtp(true);
        setError(false);
      } else {
        setError(response.message);
      }
    });
  };

  const handleOtp = () => {
    console.log(formData);
    verifyOTP(formData).then((data) => {
      if (data.status == "success") {
        const { accessToken, refreshToken } = data;
        console.log(userId);
        const cloneObj = Object.assign({}, data);
        delete cloneObj["message"];
        delete cloneObj["status"];
        delete cloneObj["statusCode"];
        cloneObj.id = userId;
        localStorage.setItem("user", JSON.stringify(cloneObj));
        setIsModalOpen(false);
        setOtp(false);
        setError(null);
        setFormData({});
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setError(data.message);
      }
    });
  };

  const handleInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <a style={{ color: "white" }} onClick={handleOpen}>
        Login
      </a>
      {isModalOpen && (
        <Modal show={isModalOpen} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!otp ? (
              <input
                type="text"
                name="mobile"
                className="form-control"
                placeholder="Mobile"
                onChange={handleInputChange}
                value={formData?.mobile || ""}
              />
            ) : (
              <input
                type="text"
                name="otp"
                className="form-control"
                placeholder="OTP"
                onChange={handleInputChange}
                value={formData?.otp || ""}
              />
            )}
            {error && <div className="otp-error-message">{error}</div>}
            {otp && (
              <div className="otp-message">
                Please enter OTP sent on mobile or registered email id.
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            {!otp ? (
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            ) : (
              <Button variant="primary" onClick={handleOtp}>
                Verify OTP
              </Button>
            )}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Login;
