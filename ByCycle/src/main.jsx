import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Community from "./pages/Community";
import BikeTrails from "./pages/BikeTrails";
import Newspage from "./pages/Newspage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Quiz1 from "./pages/quiz/Quiz1";
import ContactUs from "./pages/ContactUs";
import Questionnaire from "./pages/Questionnaire";
import Quiz2 from "./pages/quiz/Quiz2";
import Quiz3 from "./pages/quiz/Quiz3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/community", element: <Community /> },
      { path: "/trails", element: <BikeTrails /> },
      { path: "/news", element: <Newspage /> },
      { path: "/login", element: <Login /> },
      { path: "/quiz", element: <Questionnaire /> },
      { path: "/contacts", element: <ContactUs /> },
      { path: "/quiz1", element: <Quiz1 /> },
      { path: "/quiz2", element: <Quiz2 /> },
      { path: "/quiz3", element: <Quiz3 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
