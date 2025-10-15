import { createBrowserRouter } from "react-router";

import AuthLayout from "@/router/layouts/AuthLayout";
import DefaultLayout from "@/router/layouts/DefaultLayout";
import ProtectedRoute from "@/router/routes/ProtectedRoute";

import LoginPage from "@/feature/Auth/LoginPage";
import RegisterPage from "@/feature/Auth/RegisterPage";
import ErrorPage from "@/feature/Error/ErrorPage";
import HomePage from "@/feature/Home/HomePage";

const RouterConfig = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default RouterConfig;
