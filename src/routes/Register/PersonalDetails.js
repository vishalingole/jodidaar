import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { register } from "../../utils/webRequest";
import "./index.css";
import dayjs from "dayjs";
import { subCasteColumns } from "../Search/column";
import SelectDropdown from "../../components/SelectDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";

const range = (start, end) => {
  return new Array(end - start).fill().map((d, i) => i + start);
};

var oldYear = new Date();
// oldYear.setDate(oldYear.getDate() - 6);
oldYear.setFullYear(oldYear.getFullYear() - 50);
console.log("+++", oldYear.getFullYear());
const years = range(oldYear.getFullYear(), getYear(new Date()) - 18, 1);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const PersonalDetails = (props) => {
  const { setStep } = props;

  const [formData, setFormData] = useState({});
  const [userDob, setUserDob] = useState(null);
  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let payload = {
      dob: userDob,
      ...formData,
    };
    console.log(payload);
    // register(payload).then((data) => {
    //   if (data) {
    //     localStorage.setItem("user", JSON.stringify(data));
    //     setStep(2);
    //   }
    // });
  };

  const handleClear = () => {
    setFormData({});
  };

  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="form-heading">Personal Details</div>
      <form className="registration-form" onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              value={formData && formData.firstName ? formData.firstName : ""}
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="middleName"
              placeholder="Middle Name"
              onChange={handleInputChange}
              value={formData && formData.middleName ? formData.middleName : ""}
            />
          </div>

          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
              value={formData && formData.lastName ? formData.lastName : ""}
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="mobile"
              placeholder="Mobile"
              onChange={handleInputChange}
              value={formData && formData.mobile ? formData.mobile : ""}
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={formData && formData.email ? formData.email : ""}
            />
          </div>
          <div className="form-item-right">
            <SelectDropdown
              data={subCasteColumns}
              name="lookingFor"
              onChange={handleInputChange}
              value={formData && formData.subCaste ? formData.subCaste : ""}
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="height"
              placeholder="Height"
              onChange={handleInputChange}
              value={formData && formData.height ? formData.height : ""}
            />
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="bloodGroup"
              onChange={handleInputChange}
            >
              <option selected>Blood Group</option>
              <option value="aPositive">A+</option>
              <option value="aNegative">A-</option>
              <option value="bPositive">B+</option>
              <option value="bNegative">B-</option>
              <option value="oPositive">O+</option>
              <option value="bNegative">O-</option>
              <option value="abPositive">AB+</option>
              <option value="abNegative">AB-</option>
            </select>
          </div>
          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="diet"
              onChange={handleInputChange}
            >
              <option selected>Diet</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
            </select>
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="maritialStatus"
              onChange={handleInputChange}
            >
              <option selected>Maritial Status</option>
              <option value="unmarried">Unmarried</option>
              <option value="divorcee">Divorcee</option>
              <option value="widower">Widower</option>
              <option value="widow">Widow</option>
            </select>
          </div>
          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="complexion"
              onChange={handleInputChange}
            >
              <option selected>Complexion</option>
              <option value="gaval">Gavhal</option>
              <option value="sawala">Sawala</option>
              <option value="gora">Gora</option>
              <option value="nimgora">Nimgora</option>
              <option value="fair">Fair</option>
              <option value="black">Black</option>
            </select>
          </div>
          <div className="form-item-right">
            {/* <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="personality"
              placeholder="Personality"
              onChange={handleInputChange}
              value={
                formData && formData.personality ? formData.personality : ""
              }
            /> */}

            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="weight"
              placeholder="Weight"
              onChange={handleInputChange}
              value={formData && formData.weight ? formData.weight : ""}
            />
          </div>
          <div className="form-item-left">
            <DatePicker
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>
                  <select
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                </div>
              )}
              className="form-control form-control-sm"
              selected={userDob ? userDob : null}
              onChange={(date) => setUserDob(date)}
              isClearable="true"
              dateFormat="MM/dd/yyyy"
              placeholderText="mm/dd/yyyy"
              minDate={moment().subtract(150, "years")._d}
              maxDate={moment().subtract(18, "years")._d}
            />
          </div>
          <div className="form-item-left register-option-selection">
            <strong>Gender :</strong>
            <input
              onChange={handleInputChange}
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender == "Male" ? true : false}
            />
            Male
            <input
              onChange={handleInputChange}
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender == "Female" ? true : false}
            />
            Female
          </div>
          <div className="form-item-left"></div>
          <div className="form-item-right"></div>
        </div>
        <div className="footer-buttons">
          <Button
            variant="primary"
            size="sm"
            className="next-btn"
            type="submit"
          >
            Next
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="next-btn"
            onClick={handleClear}
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
