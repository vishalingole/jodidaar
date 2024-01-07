import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./index.css";
import { useNavigate } from "react-router-dom";

import { getOperator } from "../../../utils/webRequest";

const getRows = (result) => {
  return (
    <>
      <tbody>
        {result &&
          result.rows &&
          result.rows.map((item) => {
            return (
              <tr>
                <td>
                  {item && item.OperatorInfo && item.OperatorInfo.id} vishal{" "}
                </td>
                <td>
                  {item && item.OperatorInfo.lastName
                    ? item.OperatorInfo.lastName
                    : ""}
                </td>
                <td>{item && item.userType ? item.userType : ""}</td>
                <td>
                  {item &&
                    item.PersonalDetails &&
                    item.EducationDetails.education}
                </td>
                <td>{item && item.OperatorInfo && item.OperatorInfo.mobile}</td>
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
          <th>ID</th>
          <th>NAME</th>
          <th>TYPE</th>
          <th>MOBILE</th>
          <th>ADDRESS</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </tbody>
    </>
  );
};

const getTable = (result) => {
  return (
    <>
      {result && result.count && result.count > 0 ? (
        <table className="operator-result-table">
          {getHeadings()}
          {getRows(result)}
        </table>
      ) : (
        <>No Record Found.</>
      )}
    </>
  );
};

const Operator = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  useEffect(() => {
    getOperator().then((result) => setResult(result.data));
  }, []);

  return (
    <>
      <div className="admin-search">
        <Container>
          <div className="admin-search-header">Operator</div>
          <div className="operator-container">
            <div className="add-operator-button-container">
              <Button size="sm" onClick={() => navigate("/admin/operator/add")}>
                New Operator
              </Button>
            </div>
            <div className="operator-list">{getTable(result)}</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Operator;
