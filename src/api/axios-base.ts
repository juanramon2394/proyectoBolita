/* eslint-disable no-console */
import axios from "axios";

const APIUrl = process.env.VUE_APP_BASE_URL;

const axiosBase = axios.create({
  baseURL: APIUrl,
  headers: { "Content-Type": "application/json" }
});
const getAPI = axios.create({
  baseURL: APIUrl
});
// Necessary information for vlue server
const info = {
  device: "web/cpanel",
  version: window.navigator.appVersion,
  enviorment: process.env.NODE_ENV,
  user: ""
};
// REFRESHING TOKEN ON UNATHORIZED

// END REFRESHING TOKEN ON UNATHORIZED
export { axiosBase, getAPI };
