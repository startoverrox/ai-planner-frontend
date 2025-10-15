import { Outlet } from "react-router";

import Header from "@/shared/components/Header";
import { cn } from "@/shared/utils/cn";

import useSettingStore from "@/store/settingStore";

const DefaultLayout: React.FC = () => {
  const { darkMode } = useSettingStore();
  return (
    <div className={cn("flex h-screen flex-col", darkMode && "dark")}>
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
