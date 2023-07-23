import React from "react";

const Expectations = () => {
  return (
    <>
      <div className="form-heading">Expectation</div>
      <div className="form-container">
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="caste"
          >
            <option selected>Caste</option>
            <option value="Deshmukh">Deshmukh</option>
            <option value="96 Kuli">96 Kuli</option>
            <option value="kunbi">kunbi</option>
            <option value="deshmukhMaratha">Deshmukh Maratha</option>
            <option value="96KuliMaratha">96 Kuli Maratha</option>
            <option value="tiralekunbi">Tirale kunbi</option>
          </select>
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="preferredCities"
            placeholder="Preferred Cities"
          />
        </div>

        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="divorcee"
          >
            <option selected>Divorcee</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="ageDifference"
            placeholder="Age Difference"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="annualIncome"
            placeholder="Annual Income"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="expectedHeight"
            placeholder="Expected Height"
          />
        </div>
        <div className="form-item-left">
          <textarea
            className="form-control"
            name="expectedEducation"
            placeholder="Education"
          />
        </div>
        <div className="form-item-right">
          <textarea
            className="form-control"
            name="expectedOccupation"
            placeholder="Occupation"
          />
        </div>
      </div>
    </>
  );
};

export default Expectations;
