import React from "react";

const Educational = (props) => {
  const { data = {} } = props;

  return (
    <>
      <div className="detail-section-widget">
        <div className="section-heading">
          <h5> EDUCATIONAL & PROFESSIONAL DETAIL</h5>
        </div>
        <div className="detail-section-content">
          <div className="content-key">EDUCATION :</div>
          <div className="content-value">
            {data && data.EducationDetails && data.EducationDetails.education
              ? data.EducationDetails.education
              : ""}
          </div>
          <div className="content-key">EDUCATION AREA :</div>
          <div className="content-value">
            {data &&
            data.EducationDetails &&
            data.EducationDetails.educationArea
              ? data.EducationDetails.educationArea
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">OCCUPATION TYPE :</div>
          <div className="content-value">
            {data &&
            data.EducationDetails &&
            data.EducationDetails.occupationType
              ? data.EducationDetails.occupationType
              : ""}
          </div>
          <div className="content-key">OCCUPATION :</div>
          <div className="content-value">
            {data &&
            data.PersonalDetails &&
            data.EducationDetails.occupationDetail
              ? data.EducationDetails.occupationDetail
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">OCCUPATION PLACE :</div>
          <div className="content-value">
            {data &&
            data.PersonalDetails &&
            data.EducationDetails.occupationPlace
              ? data.EducationDetails.occupationPlace
              : ""}
          </div>
          <div className="content-key">INCOME :</div>
          <div className="content-value">
            {data && data.PersonalDetails && data.EducationDetails.income
              ? data.EducationDetails.income +
                " Per " +
                data.EducationDetails.incomeType
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Educational;
