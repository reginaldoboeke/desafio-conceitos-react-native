import axios from "axios";

const api = axios.create({
  baseURL: "http://172.168.1.101:3333",
});

export default api;
