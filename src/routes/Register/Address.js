import React from "react";

const Address = () => {
  return (
    <>
      <div className="form-heading">Address</div>
      <div className="form-container">
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="idtype"
          >
            <option selected>Id Proof</option>
            <option value="passport">Passport</option>
            <option value="aadhar">Aadhar</option>
            <option value="pan">PAN</option>
          </select>
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="idDetails"
            placeholder="Id Detail"
          />
        </div>

        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="alternateEmail"
            placeholder="Alternate Email"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="alternateMobile"
            placeholder="Alternate Mobile"
          />
        </div>
        <div className="form-item-left">
          <textarea
            className="form-control"
            name="residenceAddress"
            placeholder="Residence Address"
          />
        </div>
      </div>
    </>
  );
};

export default Address;
