import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import Forum from "./pages/Forum";
import PisteCiclabili from "./pages/PisteCiclabili";
import  Homepage  from "./pages/Homepage"
import Newspage from './pages/Newspage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from "./routes/Root";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Root />, 
    children: [
      {path: '/', element: <Homepage />},
      {path: '/forum', element: <Forum />},
      {path: '/piste', element: <PisteCiclabili />},
      {path: '/news', element: <Newspage />},
    ] },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
