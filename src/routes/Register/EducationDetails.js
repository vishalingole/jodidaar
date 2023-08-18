import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";

const EducationDetails = (props) => {
  const { setStep } = props;

  let initialState = {};

  const [formData, setFormData] = useState(initialState);

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
    setStep(3);
  };

  const handleClear = () => {
    console.log("----");
    setFormData(initialState);
  };

  return (
    <>
      <div className="form-heading">Education/Professional Details</div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="educationArea"
              onChange={handleInputChange}
            >
              <option selected={formData?.educationArea == "label"}>
                Education Area
              </option>
              <option value="ssc" selected={formData?.educationArea == "ssc"}>
                SSC
              </option>
              <option value="hsc" selected={formData?.educationArea == "hsc"}>
                HSC
              </option>
              <option
                value="graduate"
                selected={formData?.educationArea == "graduate"}
              >
                Graduate
              </option>
              <option
                value="postGraduate"
                selected={formData?.educationArea == "postGraduate"}
              >
                Post-Graduate
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="education"
              placeholder="Education"
              onChange={handleInputChange}
              value={formData?.education || ""}
            />
          </div>

          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="occupation"
              onChange={handleInputChange}
            >
              <option value="label" selected={formData?.occupation == "lable"}>
                Occupation Type
              </option>
              <option
                value="private"
                selected={formData?.occupation == "private"}
              >
                Private Service
              </option>
              <option
                value="goverment"
                selected={formData?.occupation == "goverment"}
              >
                Goverment Service
              </option>
              <option
                value="buisnessman"
                selected={formData?.occupation == "buisnessman"}
              >
                Buisnessman
              </option>
              <option
                value="farming"
                selected={formData?.occupation == "farming"}
              >
                Farming
              </option>
              <option
                value="noService"
                selected={formData?.occupation == "noService"}
              >
                No Service
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="occupationDetail"
              placeholder="Occupation Detail"
              onChange={handleInputChange}
              value={formData?.occupationDetail || ""}
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="income"
              placeholder="Income"
              onChange={handleInputChange}
              value={formData?.income || ""}
            />
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="incomeType"
              onChange={handleInputChange}
            >
              <option selected={formData?.incomeType == "lable"}>
                Income Type
              </option>
              <option
                value="annual"
                selected={formData?.incomeType == "annual"}
              >
                Annual
              </option>
              <option
                value="monthly"
                selected={formData?.incomeType == "monthly"}
              >
                Monthly
              </option>
            </select>
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
            onClick={() => setStep(1)}
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

export default EducationDetails;
