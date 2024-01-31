import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { familyBackground } from "../../utils/webRequest";
import { getDisticts } from "../../utils/webRequest";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, Controller } from "react-hook-form";
import SelectDropdown from "../../components/SelectDropdown";

const FamilyBackground = (props) => {
  const { setStep } = props;

  const [formData, setFormData] = useState({});
  const [districtList, setDistrictList] = useState([]);

  let selectObj = { id: 0, lable: "Native District", value: "" };

  useEffect(() => {
    getDistictsList();
  }, []);

  const getDistictsList = () => {
    getDisticts().then((response) => {
      let cloneObj = Array.from(response.data);
      cloneObj.unshift(selectObj);
      setDistrictList(cloneObj);
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
      familyBackground({ id: userId, ...formData })
        .then((data) => {
          setStep(4);
        })
        .catch((error) => console.log(error));
    }
    setStep(4);
  };

  const handleClear = () => {
    reset();
  };

  const onSubmit = (data) => {
    const user = localStorage.getItem("user");
    const userObj = user ? JSON.parse(user) : {};
    const userId = userObj && userObj.id ? userObj.id : "";
    if (userId) {
      familyBackground({ id: userId, ...data })
        .then((data) => {
          setStep(4);
        })
        .catch((error) => console.log(error));
    }
    setStep(4);
  };

  return (
    <>
      <div className="form-heading">Family Background</div>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="form-item-left">
            <input
              {...register("nativeTaluka")}
              placeholder="Native Taluka"
              className="form-control form-control-sm"
            />
          </div>
          <div className="form-item-right">
            <Controller
              name="nativeDistrict"
              control={control}
              rules={{ required: "Please select Native District." }}
              render={({ field }) => (
                <SelectDropdown
                  data={districtList}
                  name="nativeDistrict"
                  field={field}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="nativeDistrict"
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
              {...register("mamasSurname")}
              placeholder="Mama's Surname"
              className="form-control form-control-sm"
            />
          </div>
          <div className="form-item-right">
            <input
              {...register("relativeSurname")}
              placeholder="Relative's Surname"
              className="form-control form-control-sm"
            />
          </div>
          <div className="form-item-left">
            <input
              {...register("parentsFullname", {
                required: "This input is required.",
              })}
              placeholder="*Parent's Fullname"
              className="form-control form-control-sm"
            />
            <ErrorMessage
              errors={errors}
              name="parentsFullname"
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
              {...register("parentsOccupation", {
                required: "This input is required.",
              })}
              placeholder="Parent's Occupation"
              className="form-control form-control-sm"
            />
          </div>
          <div className="form-item-left">
            <input
              {...register("parentsResidanceAddress")}
              placeholder="Parent's Residance Address"
              className="form-control form-control-sm"
            />
          </div>
          <div className="form-item-right">
            <input
              {...register("familyWealth")}
              placeholder="Family Wealth : Land,Car,Farm"
              className="form-control form-control-sm"
            />
          </div>

          <div className="form-item-left">
            <Controller
              name="father"
              control={control}
              render={({ field }) => (
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...field}
                >
                  <option value="">Father</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              )}
            />
          </div>
          <div className="form-item-right">
            <Controller
              name="mother"
              control={control}
              render={({ field }) => (
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...field}
                >
                  <option value="">Mother</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              )}
            />
          </div>
          <div className="form-item-left">
            <Controller
              name="brother"
              control={control}
              render={({ field }) => (
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...field}
                >
                  <option value="">Brother</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              )}
            />
          </div>
          <div className="form-item-right">
            <Controller
              name="sister"
              control={control}
              render={({ field }) => (
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  {...field}
                >
                  <option value="">Sister</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              )}
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
            onClick={() => setStep(2)}
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

export default FamilyBackground;
