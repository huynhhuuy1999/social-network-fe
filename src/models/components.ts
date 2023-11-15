import { FocusEventHandler, MouseEventHandler, ReactNode } from "react";

export interface IModal {
  show: boolean;
  width?: number | string;
  height?: number | string;
  backgroundColorOverlay?: string;
  className?: string;
  setShow?: (isShow: boolean) => void;
  children?: ReactNode;
}

export interface ISelect {
  name?: string;
  id?: string;
  classNames?: string;
  options?: {
    value?: number | string;
    label?: string | number;
  }[];
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
}

export interface ISidebar {
  children: ReactNode;
}

export interface ICardItemSidebar {
  name: string;
  link: string;
  isAvartar?: boolean;
  arrowRight?: boolean;
  bgPosition: number[];
  bgSize: number[];
}
