export interface ICoverImage {
  src: string;
}

export interface ICardFriend {
  name: string;
  image?: string;
}

export interface User {
  email?: string;
  password?: string;
  firstName?: string;
  surname?: string;
  birthDate?: string;
  gender?: number;
}

export interface UserParams {
  userId?: string;
}
