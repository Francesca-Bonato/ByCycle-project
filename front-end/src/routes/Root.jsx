import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { useContext, useEffect } from "react";
import { Context } from "../components/LocalData";
import axios from "axios";

function Root() {
  const location = useLocation();
  // useEffect che si attiva ogni volta che si cambia route e che porta in cima alla pagina
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  const { user, initialProfile } = useContext(Context);
  const navigate = useNavigate();

  async function checkUserDb() {
    try {
      const username = user.username;
      const response = await axios.get(
        `http://localhost:4000/users/${username}`
      );
      console.log(response)
      // If user doesn't exist, reload in register
      if (response.data.length === 0) {
        localStorage.clear();
        navigate("/register");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  checkUserDb();
  return (
    <div>
      <NavBar
        username={user ? user.username : ""}
        name={user ? user.firstName : ""}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
