// import { refreshTokenApi } from '@/services'
// import { deleteCookie, getCookie, setCookie } from '@/utility'
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
import { Envs } from "@/config";
// import { refreshTokenApi } from "@/services";
// import jwtDecode from 'jwt-decode'
// import { v4 as uuidv4 } from 'uuid'
// import { REFRESH_TOKEN_KEY, TOKEN_KEY, VV_APP_ID, VV__APP_SIGNATURE, WEB_TOKEN_KEY } from './constants'

interface Token {
  name: string;
  exp: number;
}

enum REQUEST_TIMEOUT {
  default = 60000,
  upload = 600000,
}

let refreshTokenRequest: null | AxiosPromise = null;

// let appId = getCookie(VV_APP_ID)

// let vvSign = getCookie(VV__APP_SIGNATURE)

// if (!appId && !vvSign) {
// 	appId = uuidv4()

// 	vvSign = uuidv4()
// 	setCookie(VV_APP_ID, appId)
// 	setCookie(VV__APP_SIGNATURE, vvSign)
// }

// Request default (api v1)

// console.log("process.env.APP_API_URL,", Envs.APP_API_URL);

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  timeout: REQUEST_TIMEOUT.default,
});

// Request with base url
// const requestWithBaseURL = axios.create({
// 	baseURL: process.env.REACT_APP_BASE_API_URL,
// 	timeout: REQUEST_TIMEOUT.default,
// })

// Request for download excel
// const requestDownloadExcelResponseOnly = axios.create({
// 	baseURL: process.env.REACT_APP_API_URL,
// 	timeout: REQUEST_TIMEOUT.default,
// })

// Request for upload
// const requestUploadOnly = axios.create({
// 	baseURL: process.env.REACT_APP_API_URL,
// 	timeout: REQUEST_TIMEOUT.upload,
// })

// Request for api v2
// const requestAdmin = axios.create({
// 	baseURL: process.env.REACT_APP_API_ADMIN_URL,
// 	timeout: REQUEST_TIMEOUT.default,
// })

const interceptorRequest = async (config: AxiosRequestConfig | any) => {
  let token = getCookie(TOKEN_KEY);
  let webToken = getCookie(WEB_TOKEN_KEY);
  let rfToken = getCookie(REFRESH_TOKEN_KEY);

  if (config.headers) {
    if (token && webToken) {
      const isExpired = jwtDecode<Token>(token).exp < Date.now() / 1000;
      console.log("🚀 ~ interceptorRequest ~ isExpired:", isExpired);

      // if (isExpired) {
      // 	refreshTokenRequest = refreshTokenRequest ?? refreshTokenApi()

      // 	try {
      // 		const response = await refreshTokenRequest

      // 		token = response.data.access_token
      // 		setCookie(TOKEN_KEY, response.data.access_token)
      // 		setCookie(REFRESH_TOKEN_KEY, response.data.refresh_token)

      // 		refreshTokenRequest = null
      // 	} catch (_error) {
      // 		deleteCookie(TOKEN_KEY)
      // 		deleteCookie(REFRESH_TOKEN_KEY)
      // 		refreshTokenRequest = null

      // 		return Promise.reject(_error)
      // 	}
      // }

      // config.headers['vv-desktop-webtoken'] = webToken
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
    return response.data;
  }

  return response;
};

const interceptorError = (error: AxiosError) => {
  return Promise.reject(error.response?.data);
};

// requestDownloadExcelResponseOnly.interceptors.request.use(interceptorRequest, interceptorError)
// requestDownloadExcelResponseOnly.interceptors.response.use((response: AxiosResponse) => {
// 	return response
// }, interceptorError)

// requestUploadOnly.interceptors.request.use(interceptorRequest, interceptorError)
// requestUploadOnly.interceptors.response.use(interceptorResponse, interceptorError)

request.interceptors.request.use(interceptorRequest, interceptorError);
request.interceptors.response.use(interceptorResponse, interceptorError);

// requestAdmin.interceptors.request.use(interceptorRequest, interceptorError)
// requestAdmin.interceptors.response.use(interceptorResponse, interceptorError)

export { request as default };
