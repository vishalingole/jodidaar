import React, { useEffect, useState } from "react";
import "./index.css";
import Input from "../../components/Input";
import Result from "./Result";
import { Button, Container } from "react-bootstrap";
import SelectDropdown from "../../components/SelectDropdown";
import {
  getProfileImage,
  getSerchResult,
  getDisticts,
} from "../../utils/webRequest";
import {
  educationAreaColumn,
  occupationTypeColumn,
  heightRangeColumn,
  lookingForColumns,
} from "./column";
import { useLocation } from "react-router-dom";

const Search = (props) => {
  const location = useLocation();
  const [districtList, setDistrictList] = useState([]);
  let initialState = {};
  const [formData, setFormData] = useState(initialState);
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [image, setImage] = useState("");

  useEffect(async () => {
    await getDistictsList();
    if (location && location.state) {
      setFormData({ ...location.state });
      getSerchResult({ ...location.state }).then((response) => {
        setShowResult(true);
        setResult(response);
      });
    }
  }, []);

  const getDistictsList = () => {
    getDisticts().then((response) => setDistrictList(response.data));
  };

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

  return (
    <>
      <div className="advance-search">
        <Container>
          <div className="advance-search-heading">ADVANCE SEARCH</div>
          <div>
            <h5 className="advance-search-subheading">Find Your Special One</h5>
          </div>
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

              {/* <select
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
            </select> */}
            </div>
            <div className="search-container-child">
              {/* <Input
                type="text"
                className="form-control form-control-sm"
                variant="sm"
                name="nativeDistrict"
                placeholder="Native District"
                onChange={handleInputChange}
                value={
                  formData && formData.nativeDistrict
                    ? formData.nativeDistrict
                    : ""
                }
              /> */}
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
              {Array.apply(null, { length: 100 }).map((value, index) =>
                console.log(index + 1)
              )}

              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                name="weight"
                onChange={handleInputChange}
              >
                {/* <option value="label" selected={formData?.occupation == "lable"}>
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
              </option> */}
              </select>
            </div>
            <div className="search-container-child">
              <SelectDropdown
                data={heightRangeColumn}
                name="height"
                onChange={handleInputChange}
                value={formData && formData.height ? formData.height : ""}
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
              {/* <strong>Maritial Status :</strong>
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
              Divorcee */}
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
        </Container>
      </div>

      {showResult && <Result searchResult={result} />}
    </>
  );
};

export default Search;
