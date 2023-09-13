import React from "react";

const Expectation = (props) => {
  const { data = {} } = props;

  return (
    <>
      <div className="detail-section-widget">
        <div className="section-heading">
          <h5>EXPECTATIONS</h5>
        </div>
        <div className="detail-section-content">
          <div className="content-key">EDUCATION :</div>
          <div className="content-value">
            {" "}
            {data && data.Expectations && data.Expectations.expectedEducation
              ? data.Expectations.expectedEducation
              : ""}
          </div>
          <div className="content-key">OCCUPATION :</div>
          <div className="content-value">
            {data && data.Expectations && data.Expectations.expectedOccupation
              ? data.Expectations.expectedOccupation
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">HEIGHT :</div>
          <div className="content-value">
            {data && data.Expectations && data.Expectations.expectedHeight
              ? data.Expectations.expectedHeight + " Feet"
              : ""}
          </div>
          <div className="content-key">AGE DIFFERENCE :</div>
          <div className="content-value">
            {data && data.Expectations && data.Expectations.maxAgeDiffernce
              ? data.Expectations.maxAgeDiffernce + " YEARS "
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key"> ANNUAL INCOME :</div>
          <div className="content-value">
            {data && data.Expectations && data.Expectations.expectedAnnualIncome
              ? data.Expectations.expectedAnnualIncome
              : ""}
          </div>
          <div className="content-key">DIVORCEE :</div>
          <div className="content-value">
            {data &&
            data.Expectations &&
            data.Expectations.divorcee &&
            data.Expectations.divorcee == "1"
              ? "YES"
              : "NO"}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key"> CASTE :</div>
          <div className="content-value">
            {data && data.Expectations && data.Expectations.expectedCaste
              ? data.Expectations.expectedCaste
              : ""}
          </div>
          <div className="content-key">PREFERRED CITIES :</div>
          <div className="content-value">
            {data && data.Expectations && data.Expectations.preferredCities
              ? data.Expectations.preferredCities
              : "NO"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expectation;
