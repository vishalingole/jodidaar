import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { educationDetail } from "../../utils/webRequest";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, Controller } from "react-hook-form";

const EducationDetails = (props) => {
  const { setStep } = props;

  let initialState = {};

  const [formData, setFormData] = useState(initialState);

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
      educationDetail({ id: userId, ...formData })
        .then((data) => {
          setStep(3);
        })
        .catch((error) => console.log(error));
    }
    setStep(3);
  };

  const handleClear = () => {
    reset();
  };

  const onSubmit = (data) => {
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
      educationDetail({ id: userId, ...data })
        .then((response) => {
          setStep(3);
        })
        .catch((error) => console.log(error));
    }
    setStep(3);
  };

  return (
    <>
      <div className="form-heading">Education/Professional Details</div>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="form-item-left">
            <Controller
              name="educationArea"
              control={control}
              rules={{ required: "Please select an education area." }}
              render={({ field }) => (
                <select
                  {...field}
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option>Education Area</option>
                  <option value="ssc">SSC</option>
                  <option value="hsc">HSC</option>
                  <option value="graduate">Graduate</option>
                  <option value="postGraduate">Post-Graduate</option>
                </select>
              )}
            />
            <ErrorMessage
              errors={errors}
              name="educationArea"
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
              {...register("education")}
              className="form-control form-control-sm"
              placeholder="Education"
            />
          </div>

          <div className="form-item-left">
            <Controller
              name="occupationType"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value="label">Occupation Type</option>
                  <option value="private">Private Service</option>
                  <option value="goverment">Goverment Service</option>
                  <option value="buisnessman">Buisnessman</option>
                  <option value="farming">Farming</option>
                  <option value="other">Other</option>
                </select>
              )}
            />
          </div>
          <div className="form-item-right">
            <input
              {...register("occupationDetail")}
              className="form-control form-control-sm"
              placeholder="Occupation Detail"
            />
          </div>
          <div className="form-item-left">
            <input
              {...register("income")}
              className="form-control form-control-sm"
              placeholder="Income"
            />
          </div>
          <div className="form-item-right">
            <Controller
              name="incomeType"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option>Income Type</option>
                  <option value="annual">Annual</option>
                  <option value="monthly">Monthly</option>
                </select>
              )}
            />
          </div>
          <div className="form-item-right">
            <input
              {...register("occupationPlace")}
              className="form-control form-control-sm"
              placeholder="Occupation Detail"
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
            onClick={() => setStep(1)}
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

export default EducationDetails;
