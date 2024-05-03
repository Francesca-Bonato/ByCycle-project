import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Homepage from "./pages/Homepage";
import Forum from "./pages/Forum";
import BikeTrails from "./pages/BikeTrails";
import Newspage from "./pages/Newspage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/forum", element: <Forum /> },
      { path: "/piste", element: <BikeTrails/> },
      { path: "/news", element: <Newspage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
