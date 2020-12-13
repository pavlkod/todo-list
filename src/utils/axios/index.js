import axios from "axios";

const apiHost = process.env.REACT_APP_HOST || "/";
const http = axios.create({
  baseURL: apiHost,
  //   timeout: 1000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export { http };
