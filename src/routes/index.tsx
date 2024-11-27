import App from "@/App";
import AuthPage from "@/features/Auth/Page";
import DashboardPage from "@/features/Dashboard/Page";
// import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // element: <AuthOutlet fallbackPath="/" />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: "/",
        element: <AuthPage />,
      },
    ],
  },
]);

export default router;
