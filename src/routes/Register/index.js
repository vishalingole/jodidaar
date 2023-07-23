import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import FamilyBackground from "./FamilyBackground";
import Address from "./Address";
import HoroscopeDetails from "./HoroscopeDetails";
import Expectations from "./Expectation";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createProfileFor, setCreateProfileFor] = useState("");
  const [error, setError] = useState([]);
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setError([]);
    setIsModalOpen(false);
  };

  const handleProfileSelection = (val) => {
    console.log("+++", val);
    setCreateProfileFor(val);
  };

  const handleSubmit = () => {
    setError({ email: "please enter email" });
  };

  return (
    <>
      <Button onClick={handleOpen}>Register</Button>
      {isModalOpen && (
        <Modal show={isModalOpen} onHide={handleClose} backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <p>Creating profile for.</p>

            {options.map((item) => {
              return (
                <>
                  <Button
                    variant={
                      createProfileFor == item ? "success" : "outline-primary"
                    }
                    size="xs"
                    onClick={() => handleProfileSelection(item)}
                  >
                    {item}
                  </Button>
                </>
              );
            })} */}
            {step && step == 1 && <PersonalDetails />}
            {step && step == 2 && (
              <>
                <EducationDetails />
              </>
            )}
            {step && step == 3 && (
              <>
                <FamilyBackground />
              </>
            )}
            {step && step == 4 && (
              <>
                <Address />
              </>
            )}
            {step && step == 5 && (
              <>
                <HoroscopeDetails />
              </>
            )}
            {step && step == 6 && (
              <>
                <Expectations />
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            {step != 1 && (
              <Button variant="primary" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step && step != 6 ? (
              <Button variant="primary" onClick={() => setStep(step + 1)}>
                Next
              </Button>
            ) : (
              <Button variant="primary" onClick={handleSubmit}>
                Finish
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

export default Register;
