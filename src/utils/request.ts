import axios, {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { deleteCookie, getCookie, setCookie } from ".";
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "@/constants/common";
import { jwtDecode } from "jwt-decode";
import requestWithBaseURL from "./requestBaseUrl";
interface Token {
  name: string;
  exp: number;
}

enum REQUEST_TIMEOUT {
  default = 60000,
  upload = 600000,
}

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  timeout: REQUEST_TIMEOUT.default,
});

let refreshTokenRequest: null | AxiosPromise = null;

const interceptorRequest = async (config: AxiosRequestConfig | any) => {
  let token = getCookie(TOKEN_KEY);
  let rfToken = getCookie(REFRESH_TOKEN_KEY);

  if (config.headers) {
    if (token) {
      const isExpired = jwtDecode<Token>(token).exp < Date.now() / 1000;

      if (isExpired) {
        refreshTokenRequest =
          refreshTokenRequest ??
          requestWithBaseURL({
            url: "/auth/refreshToken",
            method: "POST",
            data: { refreshToken: rfToken },
          });

        try {
          const response: any = await refreshTokenRequest;
          token = response.accessToken;
          setCookie(TOKEN_KEY, response.accessToken);
          setCookie(REFRESH_TOKEN_KEY, rfToken);
          refreshTokenRequest = null;
        } catch (_error) {
          deleteCookie(TOKEN_KEY);
          deleteCookie(REFRESH_TOKEN_KEY);
          refreshTokenRequest = null;

          return Promise.reject(_error);
        }
      }

      config.headers["authorization"] = `Bearer ${token}`;
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

const interceptorError = async (error: AxiosError) => {
  return Promise.reject(error.response?.data);
};

request.interceptors.request.use(interceptorRequest, interceptorError);
request.interceptors.response.use(interceptorResponse, interceptorError);

export { request as default };
