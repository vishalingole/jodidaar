import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createProfileFor, setCreateProfileFor] = useState("");

  let options = [
    "Daughter",
    "Son",
    "Brother",
    "Sister",
    "Sister-in-law",
    "Brother-in-law",
    "nephew",
    "niece",
  ];

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleProfileSelection = (val) => {
    console.log("+++", val);
    setCreateProfileFor(val);
  };

  return (
    <>
      <Button onClick={handleOpen}>Register</Button>
      {isModalOpen && (
        <Modal show={isModalOpen} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Creating profile for.</p>

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
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Login</Button>
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
