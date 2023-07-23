import React from "react";

const EducationDetails = () => {
  return (
    <>
      <div className="form-heading">Education/Professional Details</div>
      <div className="form-container">
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="educationArea"
          >
            <option selected>Education Area</option>
            <option value="ssc">SSC</option>
            <option value="hsc">HSC</option>
            <option value="graduate">Graduate</option>
            <option value="postGraduate">Post-Graduate</option>
          </select>
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="education"
            placeholder="Education"
          />
        </div>

        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="occupation"
          >
            <option selected>Occupation Type</option>
            <option value="private">Private Service</option>
            <option value="goverment">Goverment Service</option>
            <option value="buisnessman">Buisnessman</option>
            <option value="farming">Farming</option>
            <option value="farming">No Service</option>
          </select>
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="occupationDetail"
            placeholder="Occupation Detail"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="income"
            placeholder="Income"
          />
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="incomeType"
          >
            <option selected>Income Type</option>
            <option value="Annual">Annual</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div className="form-item-right"></div>
      </div>
    </>
  );
};

export default EducationDetails;
