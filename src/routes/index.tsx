import App from "@/App";
import Login from "@/features/Auth/Login";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <AuthOutlet fallbackPath="/" />,
        children: [
          {
            path: "/dashboard",
            element: <div>hello</div>,
          },
        ],
      },
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default router;
