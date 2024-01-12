export interface ICardUser {
  userName?: string;
  numNotiUnSeen?: number;
}

export interface IFormCreateUser {
  show: boolean;
  setShow?: (value: boolean) => void;
  onSignUp?: (value?: any) => void;
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
  gender: number;
}
