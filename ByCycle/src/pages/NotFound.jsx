import Button from "../components/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center bg-white sm:p-5">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src="https://i.imgur.com/3Vozv1Z.png"
          alt="error-img"
          className="max-h-[50vh] object-contain"
        />
        <h1 className="p-3">Sorry, we couldn&apos;t find the page you were looking for.</h1>
        <p className="text-gray-400 p-3">
          Come back to ByCycle Home and discover more about the latest news{" "}
        </p>
        <Link to="/">
          <Button innerText="Back to Homepage" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
