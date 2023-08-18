import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "react-bootstrap/Button";

const FamilyBackground = (props) => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", formData);
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
              value={formData?.nativeTaluka || ""}
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
              value={formData?.nativeDistrict || ""}
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
              value={formData?.mamasSurname || ""}
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
              value={formData?.relativeSurname || ""}
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="parentFullname"
              placeholder="Parent's Fullname"
              onChange={handleInputChange}
              value={formData?.parentFullname || ""}
            />
          </div>
          <div className="form-item-right">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="parentOccupation"
              placeholder="Parent's Occupation"
              onChange={handleInputChange}
              value={formData?.parentOccupation || ""}
            />
          </div>
          <div className="form-item-left">
            <Input
              type="text"
              className="form-control form-control-sm"
              variant="sm"
              name="parentResidanceAddress"
              placeholder="Parent's Residance Address"
              onChange={handleInputChange}
              value={formData?.parentResidanceAddress || ""}
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
              value={formData?.familyWealth || ""}
            />
          </div>

          <div className="form-item-left">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="father"
              onChange={handleInputChange}
            >
              <option selected={formData?.father == "label"}>Father</option>
              <option selected={formData?.father == "1"} value="1">
                Yes
              </option>
              <option selected={formData?.father == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="mother"
              onChange={handleInputChange}
            >
              <option selected={formData?.mother == "label"} value="label">
                Mother
              </option>
              <option selected={formData?.mother == "1"} value="1">
                Yes
              </option>
              <option selected={formData?.mother == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-left">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="brother"
              onChange={handleInputChange}
            >
              <option selected={formData?.brother == "label"} value="label">
                Brother
              </option>
              <option selected={formData?.brother == "1"} value="1">
                Yes
              </option>
              <option selected={formData?.brother == "0"} value="0">
                No
              </option>
            </select>
          </div>
          <div className="form-item-right">
            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
              name="sister"
              onChange={handleInputChange}
            >
              <option selected={formData?.sister == "label"} value="label">
                Sister
              </option>
              <option selected={formData?.sister == "1"} value="1">
                Yes
              </option>
              <option selected={formData?.sister == "0"} value="0">
                No
              </option>
            </select>
          </div>
          {formData?.sister == "1" && (
            <>
              <div className="form-item-left">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="marriedSister"
                  placeholder="Married Sister's"
                  onChange={handleInputChange}
                  value={formData?.marriedSister || ""}
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
                  value={formData?.unmarriedSister || ""}
                />
              </div>{" "}
            </>
          )}
          {formData?.brother == "1" && (
            <>
              <div className="form-item-left">
                <Input
                  type="text"
                  className="form-control form-control-sm"
                  variant="sm"
                  name="marriedBrother"
                  placeholder="Married Brother's"
                  onChange={handleInputChange}
                  value={formData?.marriedBrother || ""}
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
                  value={formData?.unmarriedBrother || ""}
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
