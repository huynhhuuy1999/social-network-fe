export interface ICardSearch {
  name: string;
  avatar?: string;
  isFriend?: boolean;
  numNoti?: number;
}

export interface ICardNotification {
  content: string;
  avatar: string;
  type: number;
  time: string;
}

export interface IOptionModal {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}
