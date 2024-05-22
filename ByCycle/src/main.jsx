import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Community from "./pages/Community";
import BikeTrails from "./pages/BikeTrails";
import Newspage from "./pages/Newspage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Questionnaire from "./pages/Questionnaire";
import { Privacy } from "./pages/Privacy";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { Cookies } from "./pages/Cookies";
import { Terms } from "./pages/Terms";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/community", element: <Community /> },
      { path: "/trails", element: <BikeTrails /> },
      { path: "/news", element: <Newspage /> },
      { path: "/login", element: <Login /> },
      { path: "/quiz", element: <Questionnaire /> },
      { path: "/contacts", element: <ContactUs /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/cookies", element: <Cookies /> },
      { path: "/terms", element: <Terms /> },
      { path: "/blog", element: <Blog /> },
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
