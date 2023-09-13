import React from "react";

const Personal = (props) => {
  const { data = {} } = props;

  return (
    <>
      {" "}
      <div className="detail-section-widget">
        <div className="section-heading">
          <h5>PERSONAL DETAILS</h5>
        </div>
        <div className="detail-section-content">
          <div className="content-key">DATE OF BIRTH :</div>
          <div className="content-value">28/01/1990</div>
          <div className="content-key">BLOOD GROUP :</div>
          <div className="content-value">
            {data && data.PersonalDetails && data.PersonalDetails.bloodGroup
              ? data.PersonalDetails.bloodGroup
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">HEIGHT :</div>
          <div className="content-value">
            {data && data.PersonalDetails && data.PersonalDetails.height
              ? data.PersonalDetails.height + " FEET"
              : ""}
          </div>
          <div className="content-key">WEIGHT :</div>
          <div className="content-value">
            {data && data.PersonalDetails && data.PersonalDetails.weight
              ? data.PersonalDetails.weight + " KG"
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">DIET :</div>
          <div className="content-value">
            {data && data.PersonalDetails && data.PersonalDetails.diet
              ? data.PersonalDetails.diet
              : ""}
          </div>
          <div className="content-key">MARITIAL STATUS :</div>
          <div className="content-value">
            {data && data.PersonalDetails && data.PersonalDetails.maritialStatus
              ? data.PersonalDetails.maritialStatus
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
