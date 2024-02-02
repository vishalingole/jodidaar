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
import { Stepper, Step } from "react-form-stepper";
import ProfileImageUpload from "./ProfileImageUpload";
import IsMobile from "../../components/Header/IsMobile";
import { IoPerson } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaStarOfDavid } from "react-icons/fa";
import { DiRequirejs } from "react-icons/di";
import { MdAddPhotoAlternate } from "react-icons/md";
import CloseIcon from "./CloseIcon";

const Register = ({ name = "Register" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createProfileFor, setCreateProfileFor] = useState("");
  const [error, setError] = useState([]);
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);
  let isMobileDevice = IsMobile();

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
      <Button onClick={handleOpen} className="register-btn">
        {name}
      </Button>
      {isModalOpen && (
        <Modal show={isModalOpen} onHide={handleClose} backdrop={false}>
          <Modal.Header closeButton={false}>
            {/* <Modal.Title>Registration</Modal.Title> */}
            <div>Registration</div>
            <CloseIcon onClick={handleClose} />
          </Modal.Header>
          <Modal.Body>
            {!isMobileDevice && (
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
                  activeBgColor: "#f54c1e",
                  completedBgColor: "green",
                  labelFontSize: "12px",
                  // completedTextColor: "white",
                }}
              >
                <Step
                  active={step - 1 == 0}
                  completed={step - 1 > 0}
                  label={""}
                >
                  <IoPerson />
                </Step>
                <Step
                  active={step - 1 == 1}
                  completed={step - 1 > 1}
                  label={""}
                >
                  <IoSchoolSharp />
                </Step>
                <Step
                  active={step - 1 == 2}
                  completed={step - 1 > 2}
                  label={""}
                >
                  <MdPeopleAlt />
                </Step>
                <Step
                  active={step - 1 == 3}
                  completed={step - 1 > 3}
                  label={""}
                >
                  <FaRegAddressCard />
                </Step>
                <Step
                  active={step - 1 == 4}
                  completed={step - 1 > 4}
                  label={""}
                >
                  <FaStarOfDavid />
                </Step>
                <Step
                  active={step - 1 == 5}
                  completed={step - 1 > 5}
                  label={""}
                >
                  <DiRequirejs />
                </Step>
                <Step
                  active={step - 1 == 6}
                  completed={step - 1 > 6}
                  label={""}
                >
                  <MdAddPhotoAlternate />
                </Step>
              </Stepper>
            )}
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
            {step && step == 1 && (
              // <ProfileImageUpload
              //   setStep={setStep}
              //   handleClose={handleFinish}
              // />

              <PersonalDetails setStep={setStep} />
            )}
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
            {step && step == 7 && (
              <>
                <ProfileImageUpload
                  setStep={setStep}
                  handleClose={handleFinish}
                />
              </>
            )}
          </Modal.Body>
          {/* <Modal.Footer>
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
          </Modal.Footer> */}
        </Modal>
      )}
    </>
  );
};

export default Register;
