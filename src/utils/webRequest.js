import { cityListMock } from "../Mock/cityList";
import { latestProfilesMock } from "../Mock/latestProfiles";
import { searchResultMock } from "../Mock/searchResult";
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
  if (MOCK_DATA.searchResult) return Promise.resolve(searchResultMock);

  return axios
    .get(`http://localhost:5000/api/search?${buildQueryForFilters(filters)}`)
    .then((data) => data);
};

export const registerUser = (filters) => {
  if (MOCK_DATA.register) {
    return { accessToken: "test", refreshToken: "sss" };
  }
  console.log("---", filters);
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

export const getProfileDetail = (filters) => {
  if (MOCK_DATA.requestList) {
    return "abc";
  }
  // axios
  //   .get("http://localhost:5000/api/user/profile-detail")
  //   .then((data) => console.log(data.data))
  //   .catch((error) => console.log(error));

  return getRequest("user/profile-detail", filters);
};

export const uploadProfileImage = (filters) => {
  return axios({
    method: "post",
    url: "http://localhost:5000/api/register/profileimage",
    data: filters,
    headers: { "Content-Type": "multipart/form-data" },
  }).catch((error) => {
    console.log(error);
  });
};

export const getProfileImage = (filters) => {
  return getRequest("user/get-profile-image", filters);
};

export const siteVisits = (filters) => {
  return axios({
    method: "post",
    url: "http://localhost:5000/api/visits",
    data: filters,
  }).catch((error) => {
    console.log(error);
  });
};

export const getLatestProfiles = () => {
  if (MOCK_DATA.latestProfiles) return Promise.resolve(latestProfilesMock);

  return getRequest("user/latest-profile");
};

export const getDisticts = () => {
  if (MOCK_DATA.cityList) return Promise.resolve(cityListMock);
  return getRequest("location/get-district-list");
};

export const requestProfileDetail = (filters) => {
  return getRequest("user/get-profile-detail", filters);
};

export const createOperator = (params) => {
  console.log("+++", params);
  return axios({
    method: "post",
    url: "http://localhost:5000/api/admin/new-operator",
    data: params,
  }).catch((error) => {
    console.log(error);
  });
};

export const getOperator = () => {
  return getRequest("admin/get-operator");
};

export const getAdminSearchResult = (filters) => {
  return getRequest("admin/get-profile", filters);
};
