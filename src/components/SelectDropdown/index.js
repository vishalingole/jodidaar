import React from "react";

const SelectDropdown = (props) => {
  const { data, handleChange, onChange, name, value } = props;
  console.log(props);
  return (
    <>
      <select
        onChange={onChange}
        className="form-select form-select-sm"
        name={name}
      >
        {data.map((item, index) => {
          console.log(item.value == value);

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
