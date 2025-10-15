import { RouterProvider } from "react-router";

import { ToastContainer } from "react-toastify";

import RouterConfig from "@/router/RouterConfig";

import GlobalToastHandler from "@/shared/components/GlobalToastHandler";

function App() {
  return (
    <>
      <RouterProvider router={RouterConfig} />
      <GlobalToastHandler />
      <ToastContainer />
    </>
  );
}

export default App;
