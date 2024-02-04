import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { registerUser } from "../../utils/webRequest";
import "./index.css";
import dayjs from "dayjs";
import { subCasteColumns } from "../Search/column";
import SelectDropdown from "../../components/SelectDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, Controller } from "react-hook-form";

const range = (start, end) => {
  return new Array(end - start).fill().map((d, i) => i + start);
};

var oldYear = new Date();
// oldYear.setDate(oldYear.getDate() - 6);
oldYear.setFullYear(oldYear.getFullYear() - 50);
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

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

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
    register(payload).then((data) => {
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        setStep(2);
      }
    });
  };

  const handleClear = () => {
    setFormData({});
  };

  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onSubmit = (data) => {
    let cloneObj = Object.assign({}, data);
    cloneObj.dob = moment(cloneObj.dob).format("MM/DD/YYYY");
    console.log("eee", cloneObj);
    registerUser(cloneObj).then((data) => {
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        setStep(2);
      }
    });
  };

  return (
    <>
      <div className="form-heading">Personal Details</div>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="form-item-left">
            <input
              {...register("firstName", {
                required: "This input is required.",
              })}
              className="form-control form-control-sm"
              placeholder="First Name"
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="form-item-right">
            <input
              {...register("middleName", {
                required: "This input is required.",
              })}
              className="form-control form-control-sm"
              placeholder="Middle Name"
            />
            <ErrorMessage
              errors={errors}
              name="middleName"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>

          <div className="form-item-left">
            <input
              {...register("lastName", {
                required: "This input is required.",
              })}
              className="form-control form-control-sm"
              placeholder="Last Name"
            />
            <ErrorMessage
              errors={errors}
              name="lastName"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="form-item-right">
            <input
              {...register("mobile", {
                required: "This input is required.",
                pattern: {
                  value: /^\d{10}$/, // Validate 10-digit mobile numbers
                  message: "Invalid mobile number",
                },
              })}
              placeholder="Mobile Number"
              className="form-control form-control-sm"
            />
            <ErrorMessage
              errors={errors}
              name="mobile"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="form-item-left">
            <input
              {...register("email", {
                required: "This input is required.",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              className="form-control form-control-sm"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="form-item-right">
            <Controller
              name="subCaste"
              control={control}
              render={({ field }) => (
                <SelectDropdown
                  data={subCasteColumns}
                  name="subCaste"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-item-left">
            <input
              {...register("height")}
              placeholder="Height"
              className="form-control form-control-sm"
            />
          </div>
          <div className="form-item-right">
            <Controller
              name="bloodGroup"
              control={control}
              render={({ field }) => (
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...field}
                >
                  <option value="">Blood Group</option>
                  <option value="aPositive">A+</option>
                  <option value="aNegative">A-</option>
                  <option value="bPositive">B+</option>
                  <option value="bNegative">B-</option>
                  <option value="oPositive">O+</option>
                  <option value="bNegative">O-</option>
                  <option value="abPositive">AB+</option>
                  <option value="abNegative">AB-</option>
                </select>
              )}
            />
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
              {...register("maritialStatus", {
                required: "Please select a Maritial Status.",
              })}
            >
              <option value="">Maritial Status</option>
              <option value="unmarried">Unmarried</option>
              <option value="divorcee">Divorcee</option>
              <option value="widower">Widower</option>
              <option value="widow">Widow</option>
            </select>
            <ErrorMessage
              errors={errors}
              name="maritialStatus"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="complexion"
              {...register("complexion")}
            >
              <option value="">Complexion</option>
              <option value="gaval">Gavhal</option>
              <option value="sawala">Sawala</option>
              <option value="gora">Gora</option>
              <option value="nimgora">Nimgora</option>
              <option value="fair">Fair</option>
              <option value="black">Black</option>
            </select>
          </div>
          <div className="form-item-right">
            <input
              {...register("weight", {
                pattern: {
                  value: /^\d+$/,
                  message: "Invalid Weight Input",
                },
              })}
              placeholder="Weight (kg)"
              className="form-control form-control-sm"
            />
            <ErrorMessage
              errors={errors}
              name="weight"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="form-item-left">
            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of Birth is required" }}
              render={({ field }) => (
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
                  // selected={userDob ? userDob : null}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  isClearable="true"
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Date Of Birth (mm/dd/yyyy)"
                  minDate={moment().subtract(50, "years")._d}
                  maxDate={moment().subtract(18, "years")._d}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="dob"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
          </div>
          <div className="form-item-left register-option-selection">
            <strong>Gender :</strong>
            <input
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              {...register("gender", { required: "Please select an Gender." })}
            />
            Male
            <input
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              {...register("gender")}
            />
            Female
            <ErrorMessage
              errors={errors}
              name="gender"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <div className="error-div" key={type}>
                        {message}
                      </div>
                    ))
                  : null;
              }}
            />
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
