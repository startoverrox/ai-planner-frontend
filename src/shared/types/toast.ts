export interface Toast {
  message: string;
  type: "error" | "success" | "info";
}

export interface ToastSet {
  toast: Toast | null;
  setToast: (toast: Toast) => void;
  clearToast: () => void;
}
