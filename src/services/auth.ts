import { REFRESH_TOKEN_KEY } from "@/constants/common";
import { LoginParams, RegisterParams } from "@/models/login";
import { getCookie } from "@/utils";
import request from "@/utils/request";

// export const refreshTokenApi = () => {
//   const refresh_token = getCookie(REFRESH_TOKEN_KEY) ?? "";

//   // const data = qs.stringify({
//   // 	client_id: 'user-client',
//   // 	client_secret: 'user-secrets',
//   // 	grant_type: 'refresh_token',
//   // 	refresh_token,
//   // })

//   return request({
//     url: "/auth/refreshToken",
//     method: "POST",
//   });
// };

export const registerApi = (data: RegisterParams) => {
  return request({
    url: "/auth/register",
    method: "POST",
    data,
  });
};

export const loginApi = (data: LoginParams) => {
  return request({
    url: "/auth/login",
    method: "POST",
    data,
  });
};
