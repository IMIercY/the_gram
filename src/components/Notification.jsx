import { toast } from "react-toastify";
export const NotificationSuccess = (messeage) => {
  return toast.success(messeage, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};

export const NotificationError = (messeage) => {
  return toast.error(messeage, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
};
