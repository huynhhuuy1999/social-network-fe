import Cookies from "js-cookie";

export const createArrCustom = (numFrom: number, numTo: number): number[] => {
  let arr: number[] = [0];
  for (let i = numFrom; i <= numTo; i++) {
    arr.push(i);
  }
  return arr;
};

export const isServer = typeof window !== "undefined";

export const getCookie = (key: string) => (isServer ? Cookies.get(key) : null);

export const setCookie = (key: string, token: any, expires?: number) => {
  return isServer && token ? Cookies.set(key, token, { expires }) : null;
};

export const deleteCookie = (key: string) => Cookies.remove(key);
