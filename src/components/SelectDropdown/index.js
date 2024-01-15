import React from "react";

const SelectDropdown = (props) => {
  const { data, handleChange, onChange, name, value } = props;
  return (
    <>
      <select
        onChange={onChange}
        className="form-select form-select-sm"
        name={name}
      >
        {data &&
          data.map((item, index) => {
            return (
              <option
                selected={item.value === value ? true : false}
                value={item.value}
                key={index}
              >
                {item.lable}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default SelectDropdown;
