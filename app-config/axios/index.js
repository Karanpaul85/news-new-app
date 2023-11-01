import axios from "axios";

const api = axios.create({
  baseURL: "https://newsdata.io/api",
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
});
// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.time("api req");
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    console.timeEnd("api req");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default api;