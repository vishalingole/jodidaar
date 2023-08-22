import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { address } from "../../utils/webRequest";

const Address = (props) => {
  const { setStep } = props;

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", formData);
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj?.id || "";
    if (userId) {
      address({ id: userId, ...formData })
        .then((data) => {
          setStep(5);
        })
        .catch((error) => console.log(error));
    }
    setStep(5);
  };

  const handleClear = () => {
    console.log("----");
    setFormData({});
  };

  return (
    <>
      <div className="form-heading">Address</div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="form-item-left">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="idType"
              onChange={handleInputChange}
            >
              <option selected={formData?.idType == "label"} value="label">
                Id Proof
              </option>
              <option
                selected={formData?.idType == "passport"}
                value="passport"
              >
                Passport
              </option>
              <option selected={formData?.idType == "aadhar"} value="aadhar">
                Aadhar
              </option>
              <option selected={formData?.idType == "pan"} value="pan">
                PAN
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="idDetails"
              placeholder="Id Detail"
              onChange={handleInputChange}
              value={formData?.idDetails || ""}
            />
          </div>

          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="alternateEmail"
              placeholder="Alternate Email"
              onChange={handleInputChange}
              value={formData?.alternateEmail || ""}
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="alternateMobile"
              placeholder="Alternate Mobile"
              onChange={handleInputChange}
              value={formData?.alternateMobile || ""}
            />
          </div>
          <div className="form-item-left">
            <textarea
              className="form-control"
              name="residenceAddress"
              placeholder="Residence Address"
              onChange={handleInputChange}
              value={formData?.residenceAddress || ""}
            />
          </div>
        </div>
        <div className="footer-buttons">
          <Button
            variant="primary"
            size="sm"
            className="next-btn"
            type="submit"
          >
            Next
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="next-btn"
            onClick={() => setStep(3)}
          >
            Back
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="next-btn"
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
};

export default Address;
