import React from "react";

const getRows = (result) => {
  return (
    <>
      <tbody>
        {result &&
          result.data &&
          result.data.items &&
          result.data.items.map((item) => {
            console.log(item);
            return (
              <tr>
                <td>
                  {item &&
                    item.PersonalDetails &&
                    item.PersonalDetails.displayId}
                </td>
                <td>
                  {item &&
                    item.PersonalDetails &&
                    item.PersonalDetails.lastName}
                </td>
                <td>
                  {item && item.PersonalDetails && item.PersonalDetails.gender}
                </td>
                <td>
                  {item &&
                    item.PersonalDetails &&
                    item.EducationDetails.education}
                </td>
                <td>
                  {item &&
                    item.PersonalDetails &&
                    item.EducationDetails.occupationDetail}
                </td>
                <td>
                  {item && item.PersonalDetails && item.EducationDetails.income}
                </td>
                <td>
                  {item &&
                    item.PersonalDetails &&
                    item.EducationDetails.occupationPlace}
                </td>
                <td>
                  {item &&
                    item.PersonalDetails &&
                    item.EducationDetails.education}
                </td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

const getHeadings = () => {
  return (
    <>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Type</th>
          <th>Education</th>
          <th>Occupation</th>
          <th>Income</th>
          <th>Occupation Place</th>
          <th>Profile Status</th>
        </tr>
      </tbody>
    </>
  );
};

const getTable = (result) => {
  return (
    <>
      {result && result.data && result.data.totalItems > 0 ? (
        <table className="admin-search-result-table">
          {getHeadings()}
          {getRows(result)}
        </table>
      ) : (
        <>No Record Found.</>
      )}
    </>
  );
};

const Result = (props) => {
  const { data: result } = props;
  const { totalItems, items } = result.data;

  console.log("+++", result);
  return (
    <>
      <div className="result-container">{getTable(result)}</div>
    </>
  );
};

export default Result;
