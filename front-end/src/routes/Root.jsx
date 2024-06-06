import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Root() {
  const location = useLocation();
  // useEffect che si attiva ogni volta che si cambia route e che porta in cima alla pagina
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <div>
      <NavBar username={localStorage.getItem("user")} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
