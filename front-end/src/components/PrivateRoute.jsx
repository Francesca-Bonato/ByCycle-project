import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = sessionStorage.getItem("userLogged");

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
