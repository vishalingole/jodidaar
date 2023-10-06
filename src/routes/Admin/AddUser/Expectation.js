import React, { useState, useContext } from "react";
import Input from "../../../components/Input";
import Button from "react-bootstrap/Button";
import { expectations } from "../../../utils/webRequest";
import SelectDropdown from "../../../components/SelectDropdown";
import { subCasteColumns } from "../../Search/column";
import AddUserContext from "./AddUserContext";

const Expectations = (props) => {
  const { formData, handleInputChange } = useContext(AddUserContext);

  return (
    <>
      <div className="admin-form-heading">Expectation</div>
      <div className="admin-form-container">
        <div className="admin-form-child">
          <SelectDropdown
            data={subCasteColumns}
            name="lookingFor"
            onChange={handleInputChange}
            value={
              formData && formData.expectedCaste ? formData.expectedCaste : ""
            }
          />
        </div>
        <div className="admin-form-child">
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

        <div className="admin-form-child">
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
        <div className="admin-form-child">
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
        <div className="admin-form-child">
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
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="expectedHeight"
            placeholder="Expected Height"
            onChange={handleInputChange}
            value={
              formData && formData.expectedHeight ? formData.expectedHeight : ""
            }
          />
        </div>
        <div className="admin-form-child">
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
        <div className="admin-form-child">
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
    </>
  );
};

export default Expectations;
