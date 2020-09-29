import axios from "axios";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const instanceApiML = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 10000,
  cancelToken: source.token,
});
const res = function (response) {
  return response.data;
};
instanceApiML.interceptors.request.use((value) => {
  // console.log("REQUEST", value);
  return value;
});
instanceApiML.interceptors.response.use(res);
export { instanceApiML };
