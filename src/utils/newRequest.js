import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelance-api-9qh1.onrender.com/api",
  // withCredentials: true,
});

export default newRequest;
