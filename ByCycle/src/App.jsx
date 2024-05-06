import Forum from "./pages/Forum";
import Homepage from "./pages/Homepage";
import Newspage from "./pages/Newspage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import BikeTrails from "./pages/BikeTrails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
