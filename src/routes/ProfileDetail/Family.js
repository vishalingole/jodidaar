import React from "react";

const Family = (props) => {
  const { data = {} } = props;

  return (
    <>
      <div className="detail-section-widget">
        <div className="section-heading">
          <h5>FAMILY BACKGROUND</h5>
        </div>
        <div className="detail-section-content">
          <div className="content-key">MAMA'S SURNAME :</div>
          <div className="content-value">
            {data && data.FamilyBackground && data.FamilyBackground.mamasSurname
              ? data.FamilyBackground.mamasSurname
              : ""}
          </div>
          <div className="content-key">PARENTS OCCUPATION :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.parentsOccupation
              ? data.FamilyBackground.parentsOccupation
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">RELATIVES'S SURNAME :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.relativeSurname
              ? data.FamilyBackground.relativeSurname
              : ""}
          </div>
          <div className="content-key">PARENT'S RESIDENCE ADDRESS :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.parentsResidenceAddress
              ? data.PersonalDetails.parentsResidenceAddress
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">FAMILY WEALTH :</div>
          <div className="content-value">
            {data && data.FamilyBackground && data.FamilyBackground.familyWealth
              ? data.FamilyBackground.familyWealth
              : ""}
          </div>
          <div className="content-key"> NATIVE DISTRICT :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.nativeDistrict
              ? data.FamilyBackground.nativeDistrict
              : ""}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">FATHER :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.father &&
            data.FamilyBackground.father == "1"
              ? "YES"
              : "NO"}
          </div>
          <div className="content-key"> MOTHER :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.mother &&
            data.FamilyBackground.mother === "1"
              ? "YES"
              : "NO"}
          </div>
        </div>
        <div className="detail-section-content">
          <div className="content-key">BROTHER :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.brother &&
            data.FamilyBackground.brother == "1"
              ? "YES"
              : "NO"}
          </div>
          <div className="content-key"> SISTER :</div>
          <div className="content-value">
            {data &&
            data.FamilyBackground &&
            data.FamilyBackground.sister &&
            data.FamilyBackground.sister === "1"
              ? "YES"
              : "NO"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Family;
