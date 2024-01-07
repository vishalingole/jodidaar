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
    verifyOTP(formData).then((data) => {
      if (data.status == "success") {
        const { accessToken, refreshToken } = data;
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {/* <a style={{ color: "white" }} onClick={handleOpen}>
        Login
      </a> */}
      <Button className="login-btn" variant="primary" onClick={handleOpen}>
        Login
      </Button>
      {isModalOpen && (
        <Modal className="login-modal" show={isModalOpen} onHide={handleClose}>
          <Modal.Header closeButton={false}></Modal.Header>
          <Modal.Body>
            <div className="login-logo">
              <img src="/logo192.png" />
            </div>
            <div className="login-text">
              <h5>Log In</h5>
            </div>
            <div className="login-form">
              {!otp ? (
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile"
                  onChange={handleInputChange}
                  value={formData && formData.mobile ? formData.mobile : ""}
                />
              ) : (
                <input
                  type="text"
                  name="otp"
                  className="form-control"
                  placeholder="OTP"
                  onChange={handleInputChange}
                  value={formData && formData.otp ? formData.otp : ""}
                />
              )}
              {error && <div className="otp-error-message">{error}</div>}
              {otp && (
                <div className="otp-message">
                  Please enter OTP sent on mobile or registered email id.
                </div>
              )}
            </div>
            <div className="login-button-container">
              {!otp ? (
                <div className="popup-login-btn">
                  <Button variant="primary" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              ) : (
                <div className="popup-login-btn">
                  <Button variant="primary" onClick={handleOtp}>
                    Verify OTP
                  </Button>
                </div>
              )}
              <div className="popup-close-btn">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Login;
