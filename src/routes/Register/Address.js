import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { address } from "../../utils/webRequest";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, Controller } from "react-hook-form";

const Address = (props) => {
  const { setStep } = props;

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const {
    reset,
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
      address({ id: userId, ...formData })
        .then((data) => {
          setStep(5);
        })
        .catch((error) => console.log(error));
    }
    setStep(5);
  };

  const handleClear = () => {
    console.log("----");
    setFormData({});
  };

  const onSubmit = (data) => {
    console.log(data);
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
      address({ id: userId, ...data })
        .then((data) => {
          setStep(5);
        })
        .catch((error) => console.log(error));
    }
    setStep(5);
  };

  return (
    <>
      <div className="form-heading">Address</div>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="form-item-left">
            <Controller
              name="idType"
              control={control}
              rules={{ required: "Please select ID Proof." }}
              render={({ field }) => (
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...field}
                >
                  <option value="">
                    <span className="mandatory-astrick">*</span> Id Proof
                  </option>
                  <option value="passport">Passport</option>
                  <option value="aadhar">Aadhar</option>
                  <option value="pan">PAN</option>
                </select>
              )}
            />
            <ErrorMessage
              errors={errors}
              name="idType"
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
              {...register("idDetails", {
                required: "This input is required.",
              })}
              placeholder="* Id Detail"
              className="form-control form-control-sm"
            />
            <ErrorMessage
              errors={errors}
              name="idDetails"
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
              {...register("alternateEmail")}
              placeholder="Alternate Email"
              className="form-control form-control-sm"
            />
            <ErrorMessage
              errors={errors}
              name="alternateEmail"
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
              {...register("alternateMobile", {
                required: "This input is required.",
                pattern: {
                  value: /^\d{10}$/, // Validate 10-digit mobile numbers
                  message: "Invalid mobile number",
                },
              })}
              placeholder="* Alternate Mobile"
              className="form-control form-control-sm"
            />
            <ErrorMessage
              errors={errors}
              name="alternateMobile"
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
            {/* <textarea
              className="form-control"
              name="residenceAddress"
              placeholder="Residence Address"
              onChange={handleInputChange}
              value={
                formData && formData.residenceAddress
                  ? formData.residenceAddress
                  : ""
              }
            /> */}
            <textarea
              className="form-control"
              {...register("residenceAddress")}
              placeholder="Residence Address"
            />
          </div>
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
            onClick={() => setStep(3)}
          >
            Back
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

export default Address;
