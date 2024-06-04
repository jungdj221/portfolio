import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <MainPage />,
  },
]);
export default router;
