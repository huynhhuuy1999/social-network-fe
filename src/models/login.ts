import { User } from "./personal";

export interface ICardUser {
  userName?: string;
  numNotiUnSeen?: number;
}

export interface IFormCreateUser {
  show: boolean;
  setShow?: (value: boolean) => void;
  onSignUp?: (value: RegisterParams) => void;
  isLoading?: boolean;
}

export interface IFormAddAccount {
  show: boolean;
  setShow?: (value: boolean) => void;
}

export interface ICardAddUser {
  onClick?: () => void;
}

export interface RegisterParams {
  email: string;
  password: string;
  firstName: string;
  surname: string;
  birthDate: string;
  gender?: number;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken?: string;
  infoUser?: User;
  message?: string;
  refreshToken?: string;
}

export interface RefreshTokenResponse {
  accessToken?: string;
}
