import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie } from ".";
import { TOKEN_KEY } from "@/constants/common";

enum REQUEST_TIMEOUT {
  default = 60000,
  upload = 600000,
}
const requestWithBaseURL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_APP_API_URL,
  timeout: REQUEST_TIMEOUT.default,
});

const interceptorRequest = async (config: AxiosRequestConfig | any) => {
  let token = getCookie(TOKEN_KEY);
  if (config.headers) {
    config.headers["authorization"] = `Bearer ${token}`;
  }

  config.headers["Content-Type"] = "application/json";

  return config;
};

const interceptorError = async (error: AxiosError) => {
  return Promise.reject(error.response?.data);
};

const interceptorResponse = (response: AxiosResponse) => {
  if (response && response.data) {
    return {
      ...response.data,
      status: response.status,
    };
  }

  return response;
};

requestWithBaseURL.interceptors.request.use(
  interceptorRequest,
  interceptorError,
);
requestWithBaseURL.interceptors.response.use(
  interceptorResponse,
  interceptorError,
);

export default requestWithBaseURL;
