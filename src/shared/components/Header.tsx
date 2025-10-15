import { useNavigate } from "react-router";

import useToastStore from "@/store/toastStore";

const Header = () => {
  const navigate = useNavigate();
  // const { user } = useUserStore()
  const { setToast } = useToastStore.getState();

  // const darkMode = useSettingStore((state) => state.darkMode);
  // const setDarkMode = useSettingStore((state) => state.setDarkMode);

  const logoutUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const success = await signout()
    // if (success) {
    // 	navigate('/login')
    // 	setToast({
    // 		message: 'Logout Success !',
    // 		type: 'success',
    // 	})
    // } else {
    // 	setToast({
    // 		message: 'Logout Fail !',
    // 		type: 'error',
    // 	})
    // }
  };

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b p-4 text-white">
      <span className="cursor-pointer" onClick={() => navigate("/")}>
        LOGO
      </span>
      {/* <button onClick={() => setDarkMode(darkMode)}>
        {darkMode ? 'dark' : 'light'}
      </button> */}
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Header;
