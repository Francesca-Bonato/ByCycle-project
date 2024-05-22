import {Button} from "../components/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-white sm:p-5">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src="https://cdn.discordapp.com/attachments/1194645502667542679/1240957935937650698/image.png?ex=664873a3&is=66472223&hm=5d18dc6b57c111e7dc978be4f17603d0111f8e1b6b9988306df79e361f75943d&"
          alt="error-img"
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
