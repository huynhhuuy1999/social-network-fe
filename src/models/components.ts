import { ReactNode } from "react";

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
}
