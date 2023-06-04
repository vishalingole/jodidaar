import { MOCK_DATA } from "../environment";
import { getRequest } from "./request";
import axios from "axios";
function buildQueryForFilters(filters) {
  const q = [];
  Object.keys(filters).forEach((f) => {
    q.push(`${f}=${filters[f]}`);
  });
  return q;
}

function getResponse(res) {
  let response = Object.assign({}, res);
  if (res.items && res.items[0]) {
    response.items = res.items[0];
  } else {
    response = res;
  }
}

export const getList = (filters) => {
  if (MOCK_DATA.requestList) {
    return "abc";
  }

  // axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((data) => console.log(data.data))
  //     .catch((error) => console.log(error));

  return getRequest("photos", filters);
};

export const stepOneRegistration = (filters) => {
  if (MOCK_DATA.stepOne) {
    return { accessToken: "test", refreshToken: "sss" };
  }

  axios
    .post("http://localhost:5000/api/register/step-one", filters)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
