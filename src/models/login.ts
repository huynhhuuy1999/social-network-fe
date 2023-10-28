export interface ICardUser {
  userName?: string;
  numNotiUnSeen?: number;
}

export interface IFormCreateUser {
  show: boolean;
  setShow?: (value: boolean) => void;
}
