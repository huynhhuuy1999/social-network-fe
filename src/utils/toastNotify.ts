import { ToastEnums } from "@/constants/enum";
import { ToastContent, ToastOptions, toast } from "react-toastify";

export interface ToastProps {
  type: ToastEnums;
  message: ToastContent | string;
  options?: ToastOptions;
}

export const ShowNotificationToast = ({
  type,
  message,
  options = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { zIndex: 999999, color: "#000" },
  },
}: ToastProps) => {
  switch (type) {
    case ToastEnums.success:
      return toast.success(message, options);
    case ToastEnums.error:
      return toast.error(message, options);
    case ToastEnums.info:
      return toast.info(message, options);
    case ToastEnums.warning:
      return toast.warning(message, options);
    case ToastEnums.custom:
      return toast(message, options);
    default:
      return;
  }
};
