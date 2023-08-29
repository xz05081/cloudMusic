/**
 * axios的二次封装
 */
import axios from "axios";
import { message } from "antd";
const NETWORK_ERROR = "网络请求异常，请稍后重试";

// axios
const service = axios.create({
  baseURL: "/api",
});

// 请求拦截器
service.interceptors.request.use((res) => {
  return res;
});

// 响应拦截器
service.interceptors.response.use((req) => {
  const { code, data, msg } = req.data;
  if (code != 200) {
    message.error({
      content: msg || NETWORK_ERROR,
    });
    return Promise.reject(new Error(msg || "Error"));
  }
  return data;
});

// 请求核心函数
function request(options) {
  options.method = options.method || "get";
  //
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  return service(options);
}

["get", "post", "put", "delete", "patch"].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    });
  };
});

export default request;
