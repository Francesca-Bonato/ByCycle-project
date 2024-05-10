import React from "react";
import video_jumbotrom from "../assets/video/bg-jumbotron.mp4";
import image_one from "../assets/images/img_homepage/img_rectangle_7.png";
import image_two from "../assets/images/img_homepage/img_triathlon_male.png";
import image_three from "../assets/images/img_homepage/img_rectangle_7_1.png";
import image_four from "../assets/images/img_homepage/img_rectangle_7_410x427.png";
import image_five from "../assets/images/img_homepage/img_rectangle_7_2.png";
import img_logo from "../assets/images/ByCycle logo definitivo.png";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import Parallax from "../components/ParallaxComponent";

function Homepage() {
  return (
    <>
      {/* jumbotron section */}
      <div className="jumbotron bg-black relative">
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
            <p className="w-full text-center leading-[150%] pl-6 pr-6 text-white lg:p-0">
              Welcome to <strong>ByCycle</strong>, are you a cycling enthusiast
              looking for advice, support, and camaraderie? <br /> Then you're
              in the right place! Our forum is a vibrant and friendly community{" "}
              <br /> open to cyclists of all levels, from beginners to
              professionals.
            </p>
            <Link to={"/community"}>
              <button className="bg-white mt-10 pt-3 pb-3 pl-8 pr-8 rounded-[40px] font-bold  border transition hover:border-solid hover:border-white hover:bg-[#232323] hover:text-white">
                Explore Community
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="container-xs flex items-center justify-center gap-5 flex-col md:p-0">
        <div className="flex items-center justify-center gap-10 pt-20 mb-[60px] pl-5 pr-5 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col items-center justify-center gap-10 break-words w-full lg:w-[35%]">
            <p className="w-full text-center lg:text-left">What is ByCycle?</p>
            <h3 className="w-full text-[30px] xl:text-[45px] !font-intertight font-bold leading-[125%] break-words">
              {" "}
              ByCycle Bike has been manufacturing bicycles and engineering
              components for more than 24 years.{" "}
            </h3>
            <p className="leading-[150%] text-gray-600 break-words">
              For over 24 years, ByCycle Bike has been a leader in manufacturing
              bicycles and engineering components. With a rich history and
              commitment to quality and innovation, we consistently deliver
              exceptional bikes that embody precision, performance and
              durability.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <img
              src={image_one}
              alt="image"
              className="h-[300px] rounded-[16px] object-cover w-full lg:h-[592px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-center pt-20 pl-5 pr-5 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-auto">
            <img
              src={image_two}
              alt="image"
              className="w-full h-[300px] rounded-[16px] object-cover lg:h-[592px]"
            />
          </div>
          <div className="flex flex-col items-center mt-[10px] mb-[10px] justify-center gap-10 break-words w-full lg:w-[35%]">
            <p className="w-full text-center lg:text-left mt-10 lg:mt-0">
              The next journey
            </p>
            <h3 className="w-full text-[30px] xl:text-[45px] font-bold leading-[125%] break-words">
              {" "}
              Get an exciting experience on a ByCycle bike made for your ride.{" "}
            </h3>
            <p className="leading-[150%] text-gray-600 break-words">
              Embark on an exciting journey with ByCycle, where each bike is
              carefully crafted to give you an exciting and personalized riding
              experience. Get ready for an exciting experience when you ride on
              a ByCycle bike designed just for you.
            </p>
            <div className="w-full">
              <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                Start From $10.000
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* news section */}
      <div className="flex flex-col pl-20 pr-20 pb-5 lg:pl-10 lg:pr-10 gap-[50px] bg-[#E6E6E6] max-w">
        <div className="container-xs flex flex-col items-center pt-5 pb-5">
          <div className="w-full flex flex-col items-start gap-[30px]">
            <p>Excellence Evolved</p>
            <p className="w-full font-intertight font-extrabold text-black text-5xl">
              News & Information
            </p>
          </div>
        </div>
        <div className="flex gap-[30px] flex-wrap lg:flex-nowrap items-baseline justify-center">
          <div className="flex w-full flex-col gap-6 items-center justify-center">
            <div className="w-full rounded-[12px] overflow-hidden">
              <Link to="/news" className="w-full">
                <img
                  src={image_four}
                  alt="card image"
                  className="w-full rounded-[12px] object-cover h-auto cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col items-start gap-[25px]">
              <p
                size="xl"
                className="text-3xl font-bold w-full leading-[130%] tracking-[-0.48px]"
              >
                The growing trend of combining cycling with other workouts
              </p>
              <Link to="/news" className="w-full">
                <p className="!font-medium transition-all hover:text-[#26425a] hover:underline">
                  Read More
                </p>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 items-center justify-center">
            <div className="w-full rounded-[12px] overflow-hidden">
              <Link to="/news" className="w-full">
                <img
                  src={image_three}
                  alt="card image"
                  className="w-full rounded-[12px] object-cover h-auto cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col items-start gap-[25px]">
              <p className="font-bold text-3xl w-full leading-[130%] tracking-[-0.48px]">
                Thrilling finishes at international mountain biking championship
              </p>
              <Link to="/news" className="w-full">
                <p
                  as="p"
                  className="!font-medium transition-all hover:text-[#26425a] hover:underline"
                >
                  Read More
                </p>
              </Link>
            </div>
          </div>
          <div className="flex w-full rounded-[12px] flex-col gap-6 items-center overflow-hidden justify-center">
            <div className="w-full rounded-[12px] overflow-hidden">
              <Link to="/news" className="w-full">
                <img
                  src={image_five}
                  alt="card image"
                  className="w-full rounded-[12px] object-cover h-auto cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col items-start gap-[25px]">
              <p className="w-full font-bold text-3xl leading-[130%] tracking-[-0.48px]">
                How bicycles are becoming the main choice in city transportation
              </p>
              <Link to="/news" className="w-full">
                <p className="!font-medium transition-all hover:text-[#26425a] hover:underline">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* carousel */}
      <section className="flex flex-wrap lg:flex-nowrap justify-between gap-[10%] lg:gap-[30%] pt-[40px] pb-[40px] pl-[30px] pr-[30px]">
        <div className="w-full lg:w-[50%] text-sm lg:text-5xl font-extrabold display break-words leading-[105%]">
          <p className="text-center">
            More connections to experience new friends and families
          </p>
        </div>
        <div className="w-full lg:w-[50%] mt-[20px] flex flex-col gap-5 items-center lg:items-end break-words leading-[150%]">
          <p className="text-center lg:text-right">
            Experience the joy of pedaling together, creating a bond that goes
            beyond the road. Join the Morgan Bike Community and let the spirit
            of camaraderie enrich your cycling experience with new friends who
            feel like family.
          </p>
          <Link to={"/community"}>
            <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
              Join other bikers
            </button>
          </Link>
        </div>
      </section>
      <Slider />
      <section className="flex flex-wrap lg:flex-nowrap gap-[30%] pl-[30px] pr-[30px] mt-[50px] mb-[50px]">
        <div className="w-full lg:w-[50%]">
          <p className="text-3xl lg:text-5xl text-center font-extrabold ">
            Gear Up for a Sustainable Future: A Bicycle Usage and Perception
            Survey
          </p>
        </div>
        <div className="w-full mt-[20px] text-center lg:w-[50%] flex flex-col justify-end lg:text-right">
          <p className="text-center lg:text-right pb-[20px]">
            Welcome to the Bicycle Quiz! Test your cycling knowledge, from
            history to safety rules. 20 multiple-choice questions, 30 seconds to
            answer. Have fun and learn! Click "Pedal into the Quiz" to get
            pedaling!
          </p>
          <Link to={"/quiz"}>
            <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
              Pedal into the Quiz
            </button>
          </Link>
        </div>
      </section>
      <Parallax />
    </>
  );
}
export default Homepage;
