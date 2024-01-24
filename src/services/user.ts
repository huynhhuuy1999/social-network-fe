import { UserParams } from "@/models/personal";
import request from "@/utils/request";

export const getUserApi = (data?: UserParams): Promise<any> => {
  return request({
    url: "/user",
    method: "GET",
    data,
  });
};
