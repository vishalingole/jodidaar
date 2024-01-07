import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import PersonalDetails from "../Register/PersonalDetails";
import EducationDetails from "../Register/EducationDetails";
import FamilyBackground from "../Register/FamilyBackground";
import Address from "../Register/Address";
import HoroscopeDetails from "../Register/HoroscopeDetails";
import Expectations from "../Register/Expectation";
import { Stepper, Step } from "react-form-stepper";
import "./index.css";

const SignUp = () => {
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
    setCreateProfileFor(val);
  };

  const handleSubmit = () => {
    setError({ email: "please enter email" });
  };

  const handleFinish = () => {
    setError([]);
    setIsModalOpen(false);
    setStep(1);
  };

  return (
    <>
      <div className="wrapper-div">
        <div className="signup-form">
          <Stepper
            activeStep={step - 1}
            connectorStateColors={true}
            connectorStyleConfig={{
              size: 2,
              completedColor: "green",
              activeColor: "orange",
              // style: "dotted",
            }}
            styleConfig={{
              activeBgColor: "orange",
              completedBgColor: "green",
              labelFontSize: "12px",
              // completedTextColor: "white",
            }}
          >
            <Step
              active={step - 1 == 0}
              completed={step - 1 > 0}
              label="Personal"
            />
            <Step
              active={step - 1 == 1}
              completed={step - 1 > 1}
              label="Education"
            />
            <Step
              active={step - 1 == 2}
              completed={step - 1 > 2}
              label="Family"
            />
            <Step
              active={step - 1 == 3}
              completed={step - 1 > 3}
              label="Address"
            />
            <Step
              active={step - 1 == 4}
              completed={step - 1 > 4}
              label="Horoscope"
            />
            <Step
              active={step - 1 == 5}
              completed={step - 1 > 5}
              label="Expectation"
            />
          </Stepper>
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
          {step && step == 1 && <PersonalDetails setStep={setStep} />}
          {step && step == 2 && (
            <>
              <EducationDetails setStep={setStep} />
            </>
          )}
          {step && step == 3 && (
            <>
              <FamilyBackground setStep={setStep} />
            </>
          )}
          {step && step == 4 && (
            <>
              <Address setStep={setStep} />
            </>
          )}
          {step && step == 5 && (
            <>
              <HoroscopeDetails setStep={setStep} />
            </>
          )}
          {step && step == 6 && (
            <>
              <Expectations setStep={setStep} handleClose={handleFinish} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
