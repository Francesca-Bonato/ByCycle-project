import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Homepage from "./pages/Homepage";
import Forum from "./pages/Forum";
import BikeTrails from "./pages/BikeTrails";
import Newspage from "./pages/Newspage";
import Events from "./pages/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/forum", element: <Forum /> },
      { path: "/piste", element: <BikeTrails/> },
      { path: "/news", element: <Newspage /> },
      { path: "/events", element: <Events/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
