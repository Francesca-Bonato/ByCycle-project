import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-white sm:p-5">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeneun8OWGktzMAh-DyGCKFxkHepp3NsyNDkJdiVSyxevizXcy_DQtxx4UA&s"
          alt="error-img"
        />
        <h1>Sorry, we couldn't find the page you were looking for.</h1>
        <p className="text-gray-400">
          Come back to ByCycle Home and discover more about the latest news{" "}
        </p>
        <Link to="/">
          <Button label="Back to Homepage" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
