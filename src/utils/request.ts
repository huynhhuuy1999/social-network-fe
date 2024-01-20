import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { deleteCookie, getCookie, setCookie } from ".";
import {
  REFRESH_TOKEN_KEY,
  TOKEN_KEY,
  WEB_TOKEN_KEY,
} from "@/constants/common";
import { jwtDecode } from "jwt-decode";
interface Token {
  name: string;
  exp: number;
}

enum REQUEST_TIMEOUT {
  default = 60000,
  upload = 600000,
}

let refreshTokenRequest: null | AxiosPromise = null;

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  timeout: REQUEST_TIMEOUT.default,
});

const interceptorRequest = async (config: AxiosRequestConfig | any) => {
  let token = getCookie(TOKEN_KEY);
  let webToken = getCookie(WEB_TOKEN_KEY);
  let rfToken = getCookie(REFRESH_TOKEN_KEY);
  console.log("config", config);
  if (config.headers) {
    if (token && webToken) {
      const isExpired = jwtDecode<Token>(token).exp < Date.now() / 1000;
      console.log("🚀 ~ interceptorRequest ~ isExpired:", isExpired);

      config.headers["authorization"] = `Bearer ${token}`;
    } else if (rfToken) {
      // refreshTokenRequest = refreshTokenRequest ?? refreshTokenApi();

      try {
        const response = await refreshTokenRequest;
        console.log("🚀 ~ interceptorRequest ~ response:", response);

        // token = response.data.access_token
        // setCookie(TOKEN_KEY, response.data.access_token)
        // setCookie(REFRESH_TOKEN_KEY, response.data.refresh_token)

        refreshTokenRequest = null;
      } catch (_error) {
        deleteCookie(TOKEN_KEY);
        deleteCookie(REFRESH_TOKEN_KEY);
        refreshTokenRequest = null;

        return Promise.reject(_error);
      }
      config.headers["authorization"] = `Bearer ${token}`;
    } else {
      // config.headers[VV_APP_ID] = appId
      // config.headers[VV__APP_SIGNATURE] = vvSign
    }

    config.headers["Content-Type"] = "application/json";

    return config;
  }

  return config;
};

const interceptorResponse = (response: AxiosResponse) => {
  if (response && response.data) {
    return {
      ...response.data,
      status: response.status,
      message: response.data.message,
    };
  }

  return response;
};

const interceptorError = (error: AxiosError) => {
  return Promise.reject(error.response?.data);
};

request.interceptors.request.use(interceptorRequest, interceptorError);
request.interceptors.response.use(interceptorResponse, interceptorError);

export { request as default };
