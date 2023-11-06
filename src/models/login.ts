export interface ICardUser {
  userName?: string;
  numNotiUnSeen?: number;
}

export interface IFormCreateUser {
  show: boolean;
  setShow?: (value: boolean) => void;
}

export interface IFormAddAccount {
  show: boolean;
  setShow?: (value: boolean) => void;
}

export interface ICardAddUser {
  onClick?: () => void;
}
