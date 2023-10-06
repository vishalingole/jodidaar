import React, { useState, useContext } from "react";
import Input from "../../../components/Input";
import { familyBackground } from "../../../utils/webRequest";
import AddUserContext from "./AddUserContext";

const FamilyBackground = (props) => {
  const { formData, handleInputChange } = useContext(AddUserContext);

  return (
    <>
      <div className="admin-form-heading">Family Background</div>
      <div className="admin-form-container">
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="nativeTaluka"
            placeholder="Native Taluka"
            onChange={handleInputChange}
            value={
              formData && formData.nativeTaluka ? formData.nativeTaluka : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="nativeDistrict"
            placeholder="Native District"
            onChange={handleInputChange}
            value={
              formData && formData.nativeDistrict ? formData.nativeDistrict : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="mamasSurname"
            placeholder="Mama's Surname"
            onChange={handleInputChange}
            value={
              formData && formData.mamasSurname ? formData.mamasSurname : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="relativeSurname"
            placeholder="Relative's Surname"
            onChange={handleInputChange}
            value={
              formData && formData.relativeSurname
                ? formData.relativeSurname
                : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="parentsFullname"
            placeholder="Parent's Fullname"
            onChange={handleInputChange}
            value={
              formData && formData.parentsFullname
                ? formData.parentsFullname
                : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="parentsOccupation"
            placeholder="Parent's Occupation"
            onChange={handleInputChange}
            value={
              formData && formData.parentsOccupation
                ? formData.parentsOccupation
                : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="parentsResidanceAddress"
            placeholder="Parent's Residance Address"
            onChange={handleInputChange}
            value={
              formData && formData.parentsResidanceAddress
                ? formData.parentsResidanceAddress
                : ""
            }
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="familyWealth"
            placeholder="Family Wealth"
            onChange={handleInputChange}
            value={
              formData && formData.familyWealth ? formData.familyWealth : ""
            }
          />
        </div>

        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="father"
            onChange={handleInputChange}
          >
            <option selected={formData && formData.father == "label"}>
              Father
            </option>
            <option selected={formData && formData.father == "1"} value="1">
              Yes
            </option>
            <option selected={formData && formData.father == "0"} value="0">
              No
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="mother"
            onChange={handleInputChange}
          >
            <option selected={formData.mother == "label"} value="label">
              Mother
            </option>
            <option selected={formData.mother == "1"} value="1">
              Yes
            </option>
            <option selected={formData.mother == "0"} value="0">
              No
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="brother"
            onChange={handleInputChange}
          >
            <option selected={formData.brother == "label"} value="label">
              Brother
            </option>
            <option selected={formData.brother == "1"} value="1">
              Yes
            </option>
            <option selected={formData.brother == "0"} value="0">
              No
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="sister"
            onChange={handleInputChange}
          >
            <option selected={formData.sister == "label"} value="label">
              Sister
            </option>
            <option selected={formData.sister == "1"} value="1">
              Yes
            </option>
            <option selected={formData.sister == "0"} value="0">
              No
            </option>
          </select>
        </div>
        {formData && formData.sister && formData.sister == "1" && (
          <>
            <div className="admin-form-child">
              <Input
                type="text"
                className="form-control form-control-sm"
                variant="sm"
                name="marriedSister"
                placeholder="Married Sister's"
                onChange={handleInputChange}
                value={
                  formData && formData.marriedSister
                    ? formData.marriedSister
                    : ""
                }
              />
            </div>
            <div className="admin-form-child">
              <Input
                type="text"
                className="form-control form-control-sm"
                variant="sm"
                name="unmarriedSister"
                placeholder="Unmarried Sister's"
                onChange={handleInputChange}
                value={
                  formData && formData.unmarriedSister
                    ? formData.unmarriedSister
                    : ""
                }
              />
            </div>
          </>
        )}
        {formData && formData.brother && formData.brother == "1" && (
          <>
            <div className="admin-form-child">
              <Input
                type="text"
                className="form-control form-control-sm"
                variant="sm"
                name="marriedBrother"
                placeholder="Married Brother's"
                onChange={handleInputChange}
                value={
                  formData && formData.marriedBrother
                    ? formData.marriedBrother
                    : ""
                }
              />
            </div>
            <div className="admin-form-child">
              <Input
                type="text"
                className="form-control form-control-sm"
                variant="sm"
                name="unmarriedBrother"
                placeholder="Unmarried Brother's"
                onChange={handleInputChange}
                value={
                  formData && formData.unmarriedBrother
                    ? formData.unmarriedBrother
                    : ""
                }
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FamilyBackground;
