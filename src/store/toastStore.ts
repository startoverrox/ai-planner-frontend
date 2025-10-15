import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { Toast, ToastSet } from "@/shared/types/toast";

const useToastStore = create<ToastSet>()(
  devtools(
    (set) => ({
      toast: null,
      setToast: (toast: Toast) => set({ toast }),
      clearToast: () => set({ toast: null }),
    }),
    { name: "toastStore" },
  ),
);

export default useToastStore;
