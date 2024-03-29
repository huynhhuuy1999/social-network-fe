import {
  CSSProperties,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";

export interface IModal {
  show: boolean;
  width?: number | string;
  height?: number | string;
  backgroundColorOverlay?: string;
  className?: string;
  setShow?: (isShow: boolean) => void;
  children?: ReactNode;
  classNameIconClose?: string;
}

export interface ISelect {
  name?: string;
  id?: string;
  classNames?: string;
  options?: {
    value?: number | string;
    label?: string | number;
  }[];
  onChange?: ChangeEventHandler;
  value?: string | null;
}

export interface IInput {
  name?: string;
  id?: string;
  classNames?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  styles?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface ISidebar {
  children: ReactNode;
  width?: number | string;
  className?: string;
}

export interface ICardItemSidebar {
  name: string;
  link: string;
  isAvartar?: boolean;
  arrowRight?: boolean;
  bgPosition?: number[];
  bgSize?: number[];
  icon?: ReactNode;
  onClick?: () => void;
  typeIcon?: number;
  classNameText?: string;
  classNameIcon?: string;
  stylesIcon?: CSSProperties;
}

export interface ICardUserMess {
  name: string;
  haveStory: boolean;
  avatar: string;
}

export interface ICardStory {
  avatar?: string;
  name: string;
  thumnail: string;
}

export interface IAvatar {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  classNameImage?: string;
  borderWidth?: number;
  onClick?: () => void;
}

export interface IPostItem {
  className?: string;
}
