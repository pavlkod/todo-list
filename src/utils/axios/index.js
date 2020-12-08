import axios from "axios";

const apiHost = " http://localhost:3001";
const http = axios.create({
  baseURL: apiHost,
  //   timeout: 1000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export { http };
