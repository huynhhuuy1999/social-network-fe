import { REFRESH_TOKEN_KEY } from "@/constants/common";
import { LoginParams, RegisterParams } from "@/models/login";
import { getCookie } from "@/utils";
import { default as request } from "@/utils/request";

export const loginApi = (data: LoginParams) => {
  return request({
    url: "/auth/login",
    method: "POST",
    data,
  });
};

export const registerApi = (data: RegisterParams) => {
  return request({
    url: "/auth/register",
    method: "POST",
    data,
  });
};
