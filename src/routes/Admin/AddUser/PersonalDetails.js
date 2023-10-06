import React, { useState, useContext } from "react";
import Input from "../../../components/Input";
import { register } from "../../../utils/webRequest";
import "./index.css";
import dayjs from "dayjs";
import { subCasteColumns, genderColumns } from "../../Search/column";
import SelectDropdown from "../../../components/SelectDropdown";
import AddUserContext from "./AddUserContext";

const PersonalDetails = (props) => {
  const { formData, handleInputChange } = useContext(AddUserContext);

  const { handleFormSubmit, handleClear, handleDateChange } = props;

  return (
    <>
      <div className="admin-form-heading">Personal Details</div>

      <div className="admin-form-container">
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
            value={formData && formData.firstName ? formData.firstName : ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="middleName"
            placeholder="Middle Name"
            onChange={handleInputChange}
            value={formData && formData.middleName ? formData.middleName : ""}
          />
        </div>

        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
            value={formData && formData.lastName ? formData.lastName : ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="mobile"
            placeholder="Mobile"
            onChange={handleInputChange}
            value={formData && formData.mobile ? formData.mobile : ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData && formData.email ? formData.email : ""}
          />
        </div>
        <div className="admin-form-child">
          <SelectDropdown
            data={subCasteColumns}
            name="lookingFor"
            onChange={handleInputChange}
            value={formData && formData.subCaste ? formData.subCaste : ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="height"
            placeholder="Height"
            onChange={handleInputChange}
            value={formData && formData.height ? formData.height : ""}
          />
        </div>
        <div className="admin-form-child">
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
        <div className="admin-form-child">
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
        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="maritialStatus"
            onChange={handleInputChange}
          >
            <option selected>Maritial Status</option>
            <option value="unmarried">Unmarried</option>
            <option value="divorcee">Divorcee</option>
            <option value="widower">Widower</option>
            <option value="widow">Widow</option>
          </select>
        </div>
        <div className="admin-form-child">
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
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="personality"
            placeholder="Personality"
            onChange={handleInputChange}
            value={formData && formData.personality ? formData.personality : ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="weight"
            placeholder="Weight"
            onChange={handleInputChange}
            value={formData && formData.weight ? formData.weight : ""}
          />
        </div>
        <div className="admin-form-child register-option-selection">
          <SelectDropdown
            data={genderColumns}
            name="gender"
            onChange={handleInputChange}
            value={formData && formData.gender ? formData.gender : ""}
          />
        </div>
        <div className="admin-form-child"></div>
        <div className="admin-form-child"></div>
      </div>
    </>
  );
};

export default PersonalDetails;
