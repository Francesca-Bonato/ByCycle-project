import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { useContext, useEffect } from "react";
import { Context } from "../components/LocalData";

function Root() {
  const location = useLocation();
  // useEffect che si attiva ogni volta che si cambia route e che porta in cima alla pagina
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  const {user, initialProfile} = useContext(Context)

  return (
    <div>
      <NavBar username={user ? user.username : ""} name={user ? user.firstName : ""} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
