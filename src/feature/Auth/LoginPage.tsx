import { useState } from "react";

import { useNavigate } from "react-router";

import PwVisIcon from "@/assets/icons/pw-vis.svg?react";

import { cn } from "@/shared/utils/cn";

import useToastStore from "@/store/toastStore";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setToast } = useToastStore();

  const [pwVisible, setPwVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    // const success = await signin(email, password)
    // if (success) {
    // 	navigate('/')
    // 	setToast({
    // 		message: 'Login Suceess !',
    // 		type: 'success',
    // 	})
    // } else {
    // 	setToast({
    // 		message: 'Login Fail !',
    // 		type: 'error',
    // 	})
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-60 flex-col items-center justify-center gap-2">
        <span className="text-3xl font-bold tracking-tight">LOGO</span>

        <div>
          <label htmlFor="email">email</label>
          <input
            className="w-full"
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <div className="relative w-full">
            <input
              className="w-full pr-8"
              type={pwVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="password"
              required
            />
            <div className="absolute top-1/2 right-2 -translate-y-1/2">
              <PwVisIcon
                className={cn("h-5 w-5 cursor-pointer transition-opacity", {
                  "fill-gray-800": pwVisible,
                  "fill-gray-500": !pwVisible,
                })}
                onClick={() => setPwVisible((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        <button
          className="w-full rounded-md border p-1 text-white"
          type="submit"
        >
          login
        </button>

        <div className="flex w-full items-center justify-between gap-2">
          <span className="text-xs whitespace-nowrap">no account?</span>
          <button
            className="underline"
            type="button"
            onClick={() => navigate("/register")}
          >
            register
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
