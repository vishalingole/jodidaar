import { useState, useEffect } from "react";
import { getDisticts } from "../utils/webRequest";

export const useDistricts = () => {
  const [districtList, setDistrictList] = useState([]);

  let selectObj = { id: 0, lable: "Select District", value: "" };

  useEffect(() => {
    getDisticts().then((response) => {
      let cloneObj = Array.from(response.data);
      cloneObj.unshift(selectObj);
      setDistrictList(cloneObj);
    });
  }, []);

  return districtList;
};
