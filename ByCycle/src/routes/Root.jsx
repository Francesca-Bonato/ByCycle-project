import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";

export const Root = createBrowserRouter([
  {
    element: <NavBar />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    element: <Footer />,
  },
]);
