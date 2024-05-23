import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Homepage from "./pages/Homepage";
import QuizList from "./pages/QuizList";
import Quiz from "./pages/Quiz";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import BlogPostDetails from "./pages/BlogPostDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import BikeTrails from "./pages/BikeTrails";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import { Privacy } from "./pages/Privacy";
import CookieConsent from "react-cookie-consent";
import { Cookies } from "./pages/Cookies";
import { Terms } from "./pages/Terms";
import NotFound from "./pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/quiz", element: <QuizList /> },
      { path: "/quiz/:id", element: <Quiz /> },
      { path: "/community", element: <Community /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogPostDetails /> },
      { path: "/events", element: <Events /> },
      { path: "/events/:id", element: <EventDetails /> },
      { path: "/trails", element: <BikeTrails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      { path: "/profile", element: <Profile /> },
      { path: "/contacts", element: <ContactUs /> },
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
