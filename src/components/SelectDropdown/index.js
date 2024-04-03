import React from "react";

const SelectDropdown = (props) => {
  const { data, handleChange, onChange, name, value, field } = props;
  return (
    <>
      <select
        onChange={onChange}
        className="form-select form-select-sm"
        name={name}
        {...field}
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

export default React.memo(SelectDropdown);
