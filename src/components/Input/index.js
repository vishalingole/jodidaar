import React from "react";

const Input = (props) => {
  const {
    placeholder,
    maxLength,
    type,
    value,
    onChange,
    style,
    name,
    className,
    variant,
  } = props;

  return (
    <>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        placeholder={placeholder}
        className={className}
        style={style}
        maxLength={maxLength}
        variant={variant}
      />
    </>
  );
};

export default Input;
