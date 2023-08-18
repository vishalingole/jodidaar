import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";

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
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="caste"
              onChange={handleInputChange}
            >
              <option selected={formData?.caste == "label"} value="label">
                Caste
              </option>
              <option selected={formData?.caste == "deshmukh"} value="deshmukh">
                Deshmukh
              </option>
              <option selected={formData?.caste == "96Kuli"} value="96Kuli">
                96 Kuli
              </option>
              <option selected={formData?.caste == "kunbi"} value="kunbi">
                kunbi
              </option>
              <option
                selected={formData?.caste == "deshmukhMaratha"}
                value="deshmukhMaratha"
              >
                Deshmukh Maratha
              </option>
              <option
                selected={formData?.caste == "96KuliMaratha"}
                value="96KuliMaratha"
              >
                96 Kuli Maratha
              </option>
              <option
                selected={formData?.caste == "tiralekunbi"}
                value="tiralekunbi"
              >
                Tirale kunbi
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="preferredCities"
              placeholder="Preferred Cities"
              onChange={handleInputChange}
              value={formData?.preferredCities || ""}
            />
          </div>

          <div className="form-item-left">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="divorcee"
              onChange={handleInputChange}
            >
              <option selected={formData?.divorcee == "label"} value="label">
                Divorcee
              </option>
              <option selected={formData?.divorcee == "1"} value="1">
                Yes
              </option>
              <option selected={formData?.divorcee == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="ageDifference"
              placeholder="Age Difference"
              onChange={handleInputChange}
              value={formData?.ageDifference || ""}
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="annualIncome"
              placeholder="Annual Income"
              onChange={handleInputChange}
              value={formData?.annualIncome || ""}
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
              value={formData?.expectedHeight || ""}
            />
          </div>
          <div className="form-item-left">
            <textarea
              className="form-control"
              name="expectedEducation"
              placeholder="Education"
              onChange={handleInputChange}
              value={formData?.expectedEducation || ""}
            />
          </div>
          <div className="form-item-right">
            <textarea
              className="form-control"
              name="expectedOccupation"
              placeholder="Occupation"
              onChange={handleInputChange}
              value={formData?.expectedOccupation || ""}
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
            Finish
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
