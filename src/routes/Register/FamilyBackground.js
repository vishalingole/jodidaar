import React from "react";

const FamilyBackground = () => {
  return (
    <>
      <div className="form-heading">Family Background</div>
      <div className="form-container">
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="nativeTaluka"
            placeholder="Native Taluka"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="nativeDistrict"
            placeholder="Native District"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="mamasSurname"
            placeholder="Mama's Surname"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="relativeSurname"
            placeholder="Relative's Surname"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="parentFullname"
            placeholder="Parent's Fullname"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="parentOccupation"
            placeholder="Parent's Occupation"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="parentResidanceAddress"
            placeholder="Parent's Residance Address"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="familyWealth"
            placeholder="Family Wealth"
          />
        </div>

        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="father"
          >
            <option selected>Father</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="mother"
          >
            <option selected>Mother</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="brother"
          >
            <option selected>Brother</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="sister"
          >
            <option selected>Sister</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="marriedSister"
            placeholder="Married Sister's"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="unmarriedSister"
            placeholder="Unmarried Sister's"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="marriedBrother"
            placeholder="Married Brother's"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="unmarriedBrother"
            placeholder="Unmarried Brother's"
          />
        </div>
      </div>
    </>
  );
};

export default FamilyBackground;
