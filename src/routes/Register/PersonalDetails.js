import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";

const PersonalDetails = (props) => {
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
    setStep(2);
  };

  const handleClear = () => {
    console.log("----");
    setFormData({});
  };

  return (
    <>
      <div className="form-heading">Personal Details</div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              value={formData?.firstName}
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="middleName"
              placeholder="Middle Name"
              onChange={handleInputChange}
              value={formData?.middleName}
            />
          </div>

          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
              value={formData?.lastName}
            />
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="subCaste"
              onChange={handleInputChange}
            >
              <option selected>Sub-caste</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="height"
              placeholder="Height"
              onChange={handleInputChange}
              value={formData?.height}
            />
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="bloodGroup"
              onChange={handleInputChange}
            >
              <option selected>Blood Group</option>
              <option value="aPositive">A+</option>
              <option value="aNegative">A-</option>
              <option value="bPositive">B+</option>
              <option value="bNegative">B-</option>
              <option value="oPositive">O+</option>
              <option value="bNegative">O-</option>
              <option value="abPositive">AB+</option>
              <option value="abNegative">AB-</option>
            </select>
          </div>
          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="diet"
              onChange={handleInputChange}
            >
              <option selected>Diet</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
            </select>
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="maritialStatus"
              onChange={handleInputChange}
            >
              <option selected>Maritial Status</option>
              <option value="umnarried">Unmarried</option>
              <option value="divorcee">Divorcee</option>
              <option value="widower">Widower</option>
              <option value="widow">Widow</option>
            </select>
          </div>
          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="complexion"
              onChange={handleInputChange}
            >
              <option selected>Complexion</option>
              <option value="gaval">Gavhal</option>
              <option value="sawala">Sawala</option>
              <option value="gora">Gora</option>
              <option value="nimgora">Nimgora</option>
              <option value="fair">Fair</option>
              <option value="black">Black</option>
            </select>
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="personality"
              placeholder="Personality"
              onChange={handleInputChange}
              value={formData?.personality}
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="weight"
              placeholder="Weight"
              onChange={handleInputChange}
              value={formData?.weight}
            />
          </div>
          <div className="form-item-right"></div>
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
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
