import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const sessionData = sessionStorage.getItem("usermail");
  console.log("sessionData:", sessionData); // Debugging log

  let usermail = null;
  try {
    usermail = sessionData ? JSON.parse(sessionData).usermail : null;
  } catch (error) {
    console.error("Error parsing sessionData:", error);
  }

  console.log("usermail:", usermail); // Debugging log

  return usermail ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
