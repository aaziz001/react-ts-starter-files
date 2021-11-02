import axios from "axios";

const API = axios.create({
  baseURL: `ENTER SERVERSIDE URL HERE`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    if (req.headers) {
      req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
  }
  return req;
});

//INSERT API REQUESTS HERE
