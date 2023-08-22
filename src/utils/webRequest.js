import { MOCK_DATA } from "../environment";
import { getRequest } from "./request";
import axios from "axios";
function buildQueryForFilters(filters) {
  return new URLSearchParams(filters).toString();
  // const q = [];
  // Object.keys(filters).forEach((f) => {
  //   q.push(`${f}=${filters[f]}`);
  // });
  // return q;
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

export const getSerchResult = (filters) => {
  if (MOCK_DATA.search) {
    return { accessToken: "test", refreshToken: "sss" };
  }

  return axios
    .get(`http://localhost:5000/api/search?${buildQueryForFilters(filters)}`)
    .then((data) => data);
};

export const register = (filters) => {
  if (MOCK_DATA.register) {
    return { accessToken: "test", refreshToken: "sss" };
  }

  return axios
    .post(`http://localhost:5000/api/register/user/personal-detail`, filters)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const educationDetail = (filters) => {
  return axios
    .post(`http://localhost:5000/api/register/user/education-detail`, filters)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const familyBackground = (filters) => {
  return axios
    .post(`http://localhost:5000/api/register/user/family-background`, filters)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const address = (filters) => {
  return axios
    .post(`http://localhost:5000/api/register/user/address`, filters)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const horoscopeDetail = (filters) => {
  return axios
    .post(
      `http://localhost:5000/api/register/user/horoscope-detail
    `,
      filters
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const verifyOTP = (filters) => {
  return axios
    .post(
      `http://localhost:5000/api/user/verify-otp
    `,
      filters
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const expectations = (filters) => {
  return axios
    .post(
      `http://localhost:5000/api/register/user/expectations
    `,
      filters
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const login = (filters) => {
  if (MOCK_DATA.login) {
    return { accessToken: "test", refreshToken: "sss" };
  }

  return axios
    .post(
      `http://localhost:5000/api/user/login
    `,
      filters
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
