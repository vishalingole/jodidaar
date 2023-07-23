import React from "react";

const PersonalDetails = () => {
  return (
    <>
      <div className="form-heading">Personal Details</div>
      <div className="form-container">
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="middleName"
            placeholder="Middle Name"
          />
        </div>

        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="subCaste"
          >
            <option selected>Sub-caste</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="height"
            placeholder="Height"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="bloodGroup`"
            placeholder="Blood Group"
          />
        </div>
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="diet"
          >
            <option selected>Diet</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="maritialStatus"
          >
            <option selected>Maritial Status</option>
            <option value="umnarried">Unmarried</option>
            <option value="divorcee">Divorcee</option>
            <option value="widower">Widower</option>
            <option value="widow">Widow</option>
          </select>
        </div>
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="complexion"
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
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="personality"
            placeholder="Personality"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="weight"
            placeholder="Weight KG"
          />
        </div>
        <div className="form-item-right"></div>
      </div>
    </>
  );
};

export default PersonalDetails;
