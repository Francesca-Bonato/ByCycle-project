import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Community from "./pages/Community";
import BikeTrails from "./pages/BikeTrails";
import Newspage from "./pages/Newspage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
<<<<<<< HEAD
import Questionnaire from "./pages/Questionnaire";
import { Privacy } from "./pages/Privacy";
=======
import ContactUs from "./pages/ContactUs";
>>>>>>> 9005ece173b0b07602f2be1d77489e1e661ca83a

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/community", element: <Community /> },
      { path: "/trails", element: <BikeTrails /> },
<<<<<<< HEAD
      { path: "/news", element: <NewsPage /> },
      { path: "/login", element: <Login /> },
      { path: "/questionnaire", element: <Questionnaire /> },
      { path: "/privacy", element: <Privacy /> },
=======
      { path: "/news", element: <Newspage /> },
      { path: "/login", element: <Login /> },
      { path: "/contacts", element: <ContactUs /> },
>>>>>>> 9005ece173b0b07602f2be1d77489e1e661ca83a
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
