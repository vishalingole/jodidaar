import React, { useState, useContext } from "react";
import Input from "../../../components/Input";
import { address } from "../../../utils/webRequest";
import AddUserContext from "./AddUserContext";

const Address = (props) => {
  const { formData, handleInputChange } = useContext(AddUserContext);

  return (
    <>
      <div className="admin-form-heading">Address</div>
      <div className="admin-form-container">
        <div className="admin-form-child">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="idType"
            onChange={handleInputChange}
          >
            <option selected={formData.idType == "label"} value="label">
              Id Proof
            </option>
            <option selected={formData.idType == "passport"} value="passport">
              Passport
            </option>
            <option selected={formData.idType == "aadhar"} value="aadhar">
              Aadhar
            </option>
            <option selected={formData.idType == "pan"} value="pan">
              PAN
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="idDetails"
            placeholder="Id Detail"
            onChange={handleInputChange}
            value={formData && formData.idDetails ? formData.idDetails : ""}
          />
        </div>

        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="alternateEmail"
            placeholder="Alternate Email"
            onChange={handleInputChange}
            value={
              formData && formData.alternateEmail ? formData.alternateEmail : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="alternateMobile"
            placeholder="Alternate Mobile"
            onChange={handleInputChange}
            value={
              formData && formData.alternateMobile
                ? formData.alternateMobile
                : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <textarea
            className="form-control"
            name="residenceAddress"
            placeholder="Residence Address"
            onChange={handleInputChange}
            value={
              formData && formData.residenceAddress
                ? formData.residenceAddress
                : ""
            }
          />
        </div>
      </div>
    </>
  );
};

export default Address;
