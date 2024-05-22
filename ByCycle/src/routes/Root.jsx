import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";

function Root() {
  return (
    <div>
      <NavBar username={localStorage.getItem("user")} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
