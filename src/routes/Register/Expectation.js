import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { expectations } from "../../utils/webRequest";
import SelectDropdown from "../../components/SelectDropdown";
import { subCasteColumns } from "../Search/column";

const Expectations = (props) => {
  const { setStep } = props;

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
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
    console.log(userObj);
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
      expectations({ id: userId, ...formData })
        .then((data) => {
          console.log("registration completed.");
          setStep(7);
          // props.handleClose();
        })
        .catch((error) => console.log(error));
    }
    setStep(7);
  };

  const handleClear = () => {
    setFormData({});
  };
  return (
    <>
      <div className="form-heading">Expectation</div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="form-item-left">
            <SelectDropdown
              data={subCasteColumns}
              name="lookingFor"
              onChange={handleInputChange}
              value={
                formData && formData.expectedCaste ? formData.expectedCaste : ""
              }
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="preferredCities"
              placeholder="Preferred Cities"
              onChange={handleInputChange}
              value={
                formData && formData.preferredCities
                  ? formData.preferredCities
                  : ""
              }
            />
          </div>

          <div className="form-item-left">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="divorcee"
              onChange={handleInputChange}
            >
              <option selected={formData.divorcee == "label"} value="label">
                Divorcee
              </option>
              <option selected={formData.divorcee == "1"} value="1">
                Yes
              </option>
              <option selected={formData.divorcee == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="maxAgeDifference"
              placeholder="Age Difference"
              onChange={handleInputChange}
              value={
                formData && formData.maxAgeDifference
                  ? formData.maxAgeDifference
                  : ""
              }
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="expetedAnnualIncome"
              placeholder="Annual Income"
              onChange={handleInputChange}
              value={
                formData && formData.expetedAnnualIncome
                  ? formData.expetedAnnualIncome
                  : ""
              }
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="expectedHeight"
              placeholder="Expected Height"
              onChange={handleInputChange}
              value={
                formData && formData.expectedHeight
                  ? formData.expectedHeight
                  : ""
              }
            />
          </div>
          <div className="form-item-left">
            <textarea
              className="form-control"
              name="expectedEducation"
              placeholder="Education"
              onChange={handleInputChange}
              value={
                formData && formData.expectedEducation
                  ? formData.expectedEducation
                  : ""
              }
            />
          </div>
          <div className="form-item-right">
            <textarea
              className="form-control"
              name="expectedOccupation"
              placeholder="Occupation"
              onChange={handleInputChange}
              value={
                formData && formData.expectedOccupation
                  ? formData.expectedOccupation
                  : ""
              }
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
            onClick={() => setStep(5)}
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

export default Expectations;
