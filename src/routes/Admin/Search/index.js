import React, { useEffect, useState } from "react";
import "./index.css";
import Input from "../../../components/Input";
import { Button, Container } from "react-bootstrap";
import SelectDropdown from "../../../components/SelectDropdown";
import { getDisticts, getAdminSearchResult } from "../../../utils/webRequest";
import {
  educationAreaColumn,
  occupationTypeColumn,
  profileStatusColumn,
  lookingForColumns,
} from "../../Search/column";

import { useLocation } from "react-router-dom";
import Result from "./Result";

const AdminSearch = () => {
  const location = useLocation();
  const [districtList, setDistrictList] = useState([]);
  let initialState = {};
  const [formData, setFormData] = useState(initialState);
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(async () => {
    await getDistictsList();
    // if (location && location.state) {
    setFormData({ ...location.state });
    // getSerchResult({ ...location.state }).then((response) => {
    //   setShowResult(true);
    //   setResult(response);
    // });
    // }
  }, []);

  const getDistictsList = () => {
    getDisticts().then((response) => setDistrictList(response.data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getAdminSearchResult(formData).then((response) => {
      setShowResult(true);
      setResult(response);
    });
  };

  const handleClear = () => {
    setFormData(initialState);
  };

  return (
    <>
      <div className="admin-search">
        <Container>
          <div className="admin-search-header">Profile Search</div>
          <div className="admin-search-container">
            <div className="search-container">
              <div className="search-container-child">
                <SelectDropdown
                  data={occupationTypeColumn}
                  name="occupationType"
                  onChange={handleInputChange}
                  value={
                    formData && formData.occupationType
                      ? formData.occupationType
                      : ""
                  }
                />
              </div>
              <div className="search-container-child">
                <SelectDropdown
                  data={educationAreaColumn}
                  name="educationArea"
                  onChange={handleInputChange}
                  value={
                    formData && formData.educationArea
                      ? formData.educationArea
                      : ""
                  }
                />
              </div>
              <div className="search-container-child">
                <SelectDropdown
                  data={districtList}
                  name="nativeDistrict"
                  onChange={handleInputChange}
                  value={
                    formData && formData.nativeDistrict
                      ? formData.nativeDistrict
                      : ""
                  }
                />
              </div>
              <div className="search-container-child">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="occupationPlace"
                  placeholder="Occupation Place"
                  onChange={handleInputChange}
                  value={
                    formData && formData.occupationPlace
                      ? formData.occupationPlace
                      : ""
                  }
                />
              </div>
              <div className="search-container-child">
                <SelectDropdown
                  data={profileStatusColumn}
                  name="profileStatus"
                  onChange={handleInputChange}
                  value={
                    formData && formData.profileStatus
                      ? formData.profileStatus
                      : ""
                  }
                />
              </div>
              <div className="search-container-child">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="displayId"
                  placeholder="Profile Id"
                  onChange={handleInputChange}
                  value={
                    formData && formData.displayId ? formData.displayId : ""
                  }
                />
              </div>
              <div className="search-container-child option-selection">
                <SelectDropdown
                  data={lookingForColumns}
                  name="lookingFor"
                  onChange={handleInputChange}
                  value={
                    formData && formData.lookingFor ? formData.lookingFor : ""
                  }
                />
              </div>
            </div>
            <div className="search-buttons">
              <Button
                variant="primary"
                size="sm"
                className="next-btn"
                type="submit"
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="next-btn"
                onClick={handleFormSubmit}
              >
                Search
              </Button>
            </div>
          </div>
          {showResult && <Result data={result} />}
        </Container>
      </div>
    </>
  );
};

export default AdminSearch;
