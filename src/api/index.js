import axios from "axios";
// axios.defaults.withCredentials = false;
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

const fetchUserInfo = (userId) => {
  return axios.get(`${config.baseUrl}user/${userId}.json`);
};

const fetchAskDetail = (askId) => {
  return axios.get(`${config.baseUrl}item/${askId}.json`);
};

const fetchList = (type) => {
  console.log(type);
  return axios.get(`${config.baseUrl}${type}/1.json`);
};

export { fetchUserInfo, fetchAskDetail, fetchList };
