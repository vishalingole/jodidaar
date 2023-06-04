import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return <>{message}</>;
};
Error.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Error;
