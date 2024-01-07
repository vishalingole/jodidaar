import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";
import { familyBackground } from "../../utils/webRequest";

const FamilyBackground = (props) => {
  const { setStep } = props;

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
    console.log("----");
    setFormData({});
  };

  return (
    <>
      <div className="form-heading">Family Background</div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-container">
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="nativeTaluka"
              placeholder="Native Taluka"
              onChange={handleInputChange}
              value={
                formData && formData.nativeTaluka ? formData.nativeTaluka : ""
              }
            />
          </div>
          <div className="form-item-right">
            <Input
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
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="mamasSurname"
              placeholder="Mama's Surname"
              onChange={handleInputChange}
              value={
                formData && formData.mamasSurname ? formData.mamasSurname : ""
              }
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="relativeSurname"
              placeholder="Relative's Surname"
              onChange={handleInputChange}
              value={
                formData && formData.relativeSurname
                  ? formData.relativeSurname
                  : ""
              }
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="parentsFullname"
              placeholder="Parent's Fullname"
              onChange={handleInputChange}
              value={
                formData && formData.parentsFullname
                  ? formData.parentsFullname
                  : ""
              }
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="parentsOccupation"
              placeholder="Parent's Occupation"
              onChange={handleInputChange}
              value={
                formData && formData.parentsOccupation
                  ? formData.parentsOccupation
                  : ""
              }
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="parentsResidanceAddress"
              placeholder="Parent's Residance Address"
              onChange={handleInputChange}
              value={
                formData && formData.parentsResidanceAddress
                  ? formData.parentsResidanceAddress
                  : ""
              }
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="familyWealth"
              placeholder="Family Wealth"
              onChange={handleInputChange}
              value={
                formData && formData.familyWealth ? formData.familyWealth : ""
              }
            />
          </div>

          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="father"
              onChange={handleInputChange}
            >
              <option selected={formData && formData.father == "label"}>
                Father
              </option>
              <option selected={formData && formData.father == "1"} value="1">
                Yes
              </option>
              <option selected={formData && formData.father == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="mother"
              onChange={handleInputChange}
            >
              <option selected={formData.mother == "label"} value="label">
                Mother
              </option>
              <option selected={formData.mother == "1"} value="1">
                Yes
              </option>
              <option selected={formData.mother == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-left">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="brother"
              onChange={handleInputChange}
            >
              <option selected={formData.brother == "label"} value="label">
                Brother
              </option>
              <option selected={formData.brother == "1"} value="1">
                Yes
              </option>
              <option selected={formData.brother == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="sister"
              onChange={handleInputChange}
            >
              <option selected={formData.sister == "label"} value="label">
                Sister
              </option>
              <option selected={formData.sister == "1"} value="1">
                Yes
              </option>
              <option selected={formData.sister == "0"} value="0">
                No
              </option>
            </select>
          </div>
          {formData && formData.sister && formData.sister == "1" && (
            <>
              <div className="form-item-left">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="marriedSister"
                  placeholder="Married Sister's"
                  onChange={handleInputChange}
                  value={
                    formData && formData.marriedSister
                      ? formData.marriedSister
                      : ""
                  }
                />
              </div>
              <div className="form-item-right">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="unmarriedSister"
                  placeholder="Unmarried Sister's"
                  onChange={handleInputChange}
                  value={
                    formData && formData.unmarriedSister
                      ? formData.unmarriedSister
                      : ""
                  }
                />
              </div>
            </>
          )}
          {formData && formData.brother && formData.brother == "1" && (
            <>
              <div className="form-item-left">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="marriedBrother"
                  placeholder="Married Brother's"
                  onChange={handleInputChange}
                  value={
                    formData && formData.marriedBrother
                      ? formData.marriedBrother
                      : ""
                  }
                />
              </div>
              <div className="form-item-right">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="unmarriedBrother"
                  placeholder="Unmarried Brother's"
                  onChange={handleInputChange}
                  value={
                    formData && formData.unmarriedBrother
                      ? formData.unmarriedBrother
                      : ""
                  }
                />
              </div>
            </>
          )}
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
