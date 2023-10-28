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
