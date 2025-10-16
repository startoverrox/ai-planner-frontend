import { Link } from "react-router";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  // const darkMode = useSettingStore((state) => state.darkMode);
  // const setDarkMode = useSettingStore((state) => state.setDarkMode);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b p-4 text-white">
      <Link to="/" className="cursor-pointer">
        LOGO
      </Link>
      {/* <button onClick={() => setDarkMode(darkMode)}>
        {darkMode ? 'dark' : 'light'}
      </button> */}
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
