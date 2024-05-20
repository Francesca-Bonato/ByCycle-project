import video_jumbotrom from "../assets/video/bg-jumbotron.mp4";
import img_logo from "../assets/images/ByCycle_logo_definitivo_white.png";
import { Link } from "react-router-dom";

function Jumbotron() {
  return (
    <div className="jumbotron bg-black relative 2xl:text-lg">
      <video
        className="w-full h-[850px] object-cover opacity-[0.4]"
        autoPlay
        loop
        muted
      >
        <source src={video_jumbotrom} type="video/mp4" />
      </video>
      <div className="text-jumbotron absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <img src={img_logo} alt="ByCycle logo" width={"500px"} />
          <p className="max-w-[700px] w-full text-center leading-[150%] pl-6 pr-6 text-white lg:p-0">
            Welcome to <strong>ByCycle</strong>! <br /> If you&apos;re
            passionate about cycling and seeking advice, support, and a sense of
            community, you&apos;ve come to the right place.
            <br /> Our forum is a friendly community open to cyclists of all
            levels, from beginners to professionals.
          </p>
          <Link to={"/community"}>
            <button className="bg-white mt-10 pt-3 pb-3 pl-8 pr-8 rounded-[40px] font-bold  border transition hover:border-solid hover:border-white hover:bg-[#232323] hover:text-white">
              Explore Our Community
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
