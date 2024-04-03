const BASENAME = window.BASENAME ? window.BASENAME : "/portal";
const API_CONTEXT = "/portal/app";
const CA_WEBAGENT_PROTOCAL = "https";
// const API_BASE_URL =
//   window.location.hostname === "localhost" ? "http://localhost:8888" : "";

// const API_BASE_URL = "https://jsonplaceholder.typicode.com";
const API_BASE_URL = "http://localhost:5000/api";

const MOCK_DATA = {
  requestList: false,
  stepOne: false,
  register: false,
  login: false,
  cityList: false,
  latestProfiles: false,
  searchResult: false,
  myProfile: false,
};

export { MOCK_DATA, API_BASE_URL, API_CONTEXT, BASENAME, CA_WEBAGENT_PROTOCAL };
