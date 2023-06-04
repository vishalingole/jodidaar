import React, { useEffect } from "react";
import { stepOneRegistration } from "../../utils/webRequest";

const StepOne = () => {
  useEffect(() => {
    console.log("initial call");
    stepOneRegistration({
      mobile: "9665988376",
      email: "vishal.ingole3@gmail.com",
    });
  }, []);

  return <>Step one form</>;
};

export default StepOne;
