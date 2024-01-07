import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Input from "../../../components/Input";
import SelectDropdown from "../../../components/SelectDropdown";
import { createOperator } from "../../../utils/webRequest";
import { genderColumns } from "../../Search/column";

const AddOperator = () => {
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
    createOperator(formData).then((data) => console.log(data));
  };

  const handleClear = () => {
    setFormData({});
  };

  return (
    <>
      <div className="admin-search">
        <Container>
          <div className="admin-search-header">New Operator</div>
          <div className="admin-add-operator-container">
            <form onSubmit={handleFormSubmit}>
              <div className="admin-form-container">
                <div className="admin-form-child">
                  <Input
                    type="text"
                    className="form-control form-control-sm"
                    variant="sm"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleInputChange}
                    value={
                      formData && formData.firstName ? formData.firstName : ""
                    }
                  />
                </div>
                <div className="admin-form-child">
                  <Input
                    type="text"
                    className="form-control form-control-sm"
                    variant="sm"
                    name="middleName"
                    placeholder="Middle Name"
                    onChange={handleInputChange}
                    value={
                      formData && formData.middleName ? formData.middleName : ""
                    }
                  />
                </div>
                <div className="admin-form-child">
                  <Input
                    type="text"
                    className="form-control form-control-sm"
                    variant="sm"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleInputChange}
                    value={
                      formData && formData.lastName ? formData.lastName : ""
                    }
                  />
                </div>
                <div className="admin-form-child">
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
                <div className="admin-form-child">
                  <Input
                    type="text"
                    className="form-control form-control-sm"
                    variant="sm"
                    name="mobile"
                    placeholder="Mobile Number"
                    onChange={handleInputChange}
                    value={formData && formData.mobile ? formData.mobile : ""}
                  />
                </div>
                <div className="admin-form-child">
                  <Input
                    type="text"
                    className="form-control form-control-sm"
                    variant="sm"
                    name="aadhar"
                    placeholder="Aadhar Number"
                    onChange={handleInputChange}
                    value={formData && formData.aadhar ? formData.aadhar : ""}
                  />
                </div>
                <div className="admin-form-child">
                  <SelectDropdown
                    data={[
                      { lable: "Status", value: "" },
                      { lable: "Active", value: "1" },
                      { lable: "In Active", value: "0" },
                    ]}
                    name="status"
                    onChange={handleInputChange}
                    value={formData && formData.status ? formData.status : ""}
                  />
                </div>
                <div className="admin-form-child">
                  <SelectDropdown
                    data={genderColumns}
                    name="gender"
                    onChange={handleInputChange}
                    value={formData && formData.gender ? formData.gender : ""}
                  />
                </div>
              </div>
              <div
                style={{ marginTop: "15px" }}
                className="admin-form-container"
              >
                <div className="admin-form-child">
                  <textarea
                    className="form-control"
                    name="address"
                    placeholder="Residence Address"
                    onChange={handleInputChange}
                    value={formData && formData.address ? formData.address : ""}
                  />
                </div>
              </div>
              <div className="search-buttons">
                <Button
                  variant="primary"
                  size="sm"
                  className="next-btn"
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="next-btn"
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AddOperator;
