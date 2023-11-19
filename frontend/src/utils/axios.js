import axios from "axios";

// Create an instance of Axios
const api = axios.create({
  baseURL: "http://localhost:5000/", // Set your base URL here
  // You can also add other config options like headers, timeout, etc.
});

export default api;
