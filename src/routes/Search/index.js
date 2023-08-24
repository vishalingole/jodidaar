import React, { useState } from "react";
import "./index.css";
import Input from "../../components/Input";
import Result from "./Result";
import Button from "react-bootstrap/Button";
import SelectDropdown from "../../components/SelectDropdown";
import { getSerchResult } from "../../utils/webRequest";
import { occupationTypeColumn } from "./column";

const Search = (props) => {
  let initialState = {};
  const [formData, setFormData] = useState(initialState);
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", formData);
    getSerchResult(formData).then((response) => {
      setShowResult(true);
      setResult(response);
    });
  };

  const handleClear = () => {
    console.log("----");
    setFormData(initialState);
  };

  const heightRangeColumn = [
    {
      lable: "Select Height",
      value: "",
    },
    {
      lable: "4 Ft",
      value: "4",
    },
    {
      lable: "5 Ft",
      value: "5",
    },
    ,
    {
      lable: "6 Ft",
      value: "6",
    },
    ,
    {
      lable: "7 Ft",
      value: "7",
    },
    ,
    {
      lable: "8 Ft",
      value: "8",
    },
    ,
    {
      lable: "9 Ft",
      value: "9",
    },
    ,
    {
      lable: "10 Ft",
      value: "10",
    },
  ];

  return (
    <>
      <div className="widget">
        <div className="search-container">
          <div className="search-container-child">
            <SelectDropdown
              data={occupationTypeColumn}
              name="occupationType"
              onChange={handleInputChange}
              value={formData?.occupationType || ""}
            />
          </div>
          <div className="search-container-child">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="educationArea"
              onChange={handleInputChange}
            >
              <option selected={formData?.educationArea == "label"}>
                Education Area
              </option>
              <option value="ssc" selected={formData?.educationArea == "ssc"}>
                SSC
              </option>
              <option value="hsc" selected={formData?.educationArea == "hsc"}>
                HSC
              </option>
              <option
                value="graduate"
                selected={formData?.educationArea == "graduate"}
              >
                Graduate
              </option>
              <option
                value="postGraduate"
                selected={formData?.educationArea == "postGraduate"}
              >
                Post-Graduate
              </option>
            </select>
          </div>
          <div className="search-container-child">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="nativeDistrict"
              placeholder="Native District"
              onChange={handleInputChange}
              value={formData?.nativeDistrict || ""}
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
              value={formData?.occupationPlace || ""}
            />
          </div>
          <div className="search-container-child">
            {Array.apply(null, { length: 100 }).map((value, index) =>
              console.log(index + 1)
            )}

            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="ageRange"
              onChange={handleInputChange}
            >
              <option value="label" selected={formData?.occupation == "lable"}>
                Age Range
              </option>
              <option
                value="private"
                selected={formData?.occupation == "private"}
              >
                Private Service
              </option>
              <option
                value="goverment"
                selected={formData?.occupation == "goverment"}
              >
                Goverment Service
              </option>
              <option
                value="buisnessman"
                selected={formData?.occupation == "buisnessman"}
              >
                Buisnessman
              </option>
              <option
                value="farming"
                selected={formData?.occupation == "farming"}
              >
                Farming
              </option>
              <option
                value="noService"
                selected={formData?.occupation == "noService"}
              >
                No Service
              </option>
            </select>
          </div>
          <div className="search-container-child">
            <SelectDropdown
              data={heightRangeColumn}
              name="heightRange"
              onChange={handleInputChange}
              value={formData?.heightRange || ""}
            />
          </div>
          <div className="search-container-child option-selection">
            <strong>Maritial Status :</strong>
            <input
              onChange={handleInputChange}
              type="radio"
              name="maritialStatus"
              value="unmarried"
            />
            Unmarried
            <input
              onChange={handleInputChange}
              type="radio"
              name="maritialStatus"
              value="divorcee"
            />
            Divorcee
          </div>
          <div className="search-container-child option-selection">
            <strong>Gender :</strong>
            <input
              onChange={handleInputChange}
              type="radio"
              name="gender"
              value="male"
            />
            Male
            <input
              onChange={handleInputChange}
              type="radio"
              name="gender"
              value="female"
            />
            Female
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
      {showResult && <Result searchResult={result} />}
    </>
  );
};

export default Search;
