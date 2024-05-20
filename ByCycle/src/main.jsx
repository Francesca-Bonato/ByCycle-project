import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Community from "./pages/Community";
import BikeTrails from "./pages/BikeTrails";
import Newspage from "./pages/Newspage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Quiz from "./pages/quiz/Quiz";
import ContactUs from "./pages/ContactUs";
import Questionnaire from "./pages/Questionnaire";
import { Privacy } from "./pages/Privacy";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { Cookies } from "./pages/Cookies";
import { Terms } from "./pages/Terms";
import useAllQuiz from "./pages/quiz/useAllQuiz";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/community", element: <Community /> },
      { path: "/trails", element: <BikeTrails /> },
      { path: "/news", element: <Newspage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      { path: "/questionnaire", element: <Questionnaire /> },
      { path: "/contacts", element: <ContactUs /> },
      { path: "/quiz1", element: <Quiz objQuiz={useAllQuiz[0].quiz1} /> },
      { path: "/quiz2", element: <Quiz objQuiz={useAllQuiz[1].quiz2} /> },
      { path: "/quiz3", element: <Quiz objQuiz={useAllQuiz[2].quiz3} /> },
      { path: "/questionnaire", element: <Questionnaire /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/cookies", element: <Cookies /> },
      { path: "/terms", element: <Terms /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookieConsent
      className="text-black bg-white hover:bg-[#232323] hover:text-white"
      location="bottom"
      buttonText="Accept"
      cookieName="myAwesomeCookieName"
      expires={150}
    >
      This website uses cookies to enhance the user experience.{" "}
    </CookieConsent>
    <RouterProvider router={router} />
  </React.StrictMode>
);
