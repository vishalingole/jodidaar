import React, { useState, useContext } from "react";
import Input from "../../../components/Input";
import Button from "react-bootstrap/Button";
import { educationDetail } from "../../../utils/webRequest";
import AddUserContext from "./AddUserContext";

const EducationDetails = (props) => {
  const { formData, handleInputChange } = useContext(AddUserContext);

  return (
    <>
      <div className="admin-form-heading">Education/Professional Details</div>
      <div className="admin-form-container">
        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="educationArea"
            onChange={handleInputChange}
          >
            <option selected={formData.educationArea == "label"}>
              Education Area
            </option>
            <option value="ssc" selected={formData.educationArea == "ssc"}>
              SSC
            </option>
            <option value="hsc" selected={formData.educationArea == "hsc"}>
              HSC
            </option>
            <option
              value="graduate"
              selected={formData.educationArea == "graduate"}
            >
              Graduate
            </option>
            <option
              value="postGraduate"
              selected={formData.educationArea == "postGraduate"}
            >
              Post-Graduate
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="education"
            placeholder="Education"
            onChange={handleInputChange}
            value={formData.education || ""}
          />
        </div>

        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="occupationType"
            onChange={handleInputChange}
          >
            <option value="label" selected={formData.occupationType == "lable"}>
              Occupation Type
            </option>
            <option
              value="private"
              selected={formData.occupationType == "private"}
            >
              Private Service
            </option>
            <option
              value="goverment"
              selected={formData.occupationType == "goverment"}
            >
              Goverment Service
            </option>
            <option
              value="buisnessman"
              selected={formData.occupationType == "buisnessman"}
            >
              Buisnessman
            </option>
            <option
              value="farming"
              selected={formData.occupationType == "farming"}
            >
              Farming
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="occupationDetail"
            placeholder="Occupation Detail"
            onChange={handleInputChange}
            value={formData.occupationDetail || ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="income"
            placeholder="Income"
            onChange={handleInputChange}
            value={formData.income || ""}
          />
        </div>
        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="incomeType"
            onChange={handleInputChange}
          >
            <option selected={formData.incomeType == "lable"}>
              Income Type
            </option>
            <option value="annual" selected={formData.incomeType == "annual"}>
              Annual
            </option>
            <option value="monthly" selected={formData.incomeType == "monthly"}>
              Monthly
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="occupationPlace"
            placeholder="Occupation Place"
            onChange={handleInputChange}
            value={formData.occupationPlace || ""}
          />
        </div>
      </div>
    </>
  );
};

export default EducationDetails;
