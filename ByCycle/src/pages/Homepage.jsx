import React from "react";
import video_jumbotrom from "../assets/video/bg-jumbotron.mp4";
import logoWheel from "../assets/images/img_homepage/img_jumbotron-removebg-preview.png";
import image_one from "../assets/images/img_homepage/img_rectangle_7.png";
import image_two from "../assets/images/img_homepage/img_triathlon_male.png";
import image_three from "../assets/images/img_homepage/img_rectangle_7_1.png";
import image_four from "../assets/images/img_homepage/img_rectangle_7_410x427.png";
import image_five from "../assets/images/img_homepage/img_rectangle_7_2.png";
import image_six from "../assets/images/img_homepage/immagine-footer.png";

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
            <h1 className="tracking-[-1.92px] text-white text-8xl leading-[150%]">
              ByCycle
            </h1>
            <img
              src={logoWheel}
              alt="wheel logo"
              width={"200px"}
              height={"200px"}
            />
            <p className="w-full text-center leading-[150%] text-4xl text-white ">
              is your travel companion, allowing you to ride in comfortwith
              their flagship <br /> bike, the Morgans Bike. This bike is
              designed to provide an unrivaled riding <br /> experience, with an
              elegant design and the latest technology.
            </p>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="container-xs flex items-center justify-center gap-5 flex-col p-5 md:p-0">
        <div className="flex items-center justify-center gap-10 p-10 flex-wrap lg:flex-nowrap">
          <div className="flex flex-col items-center justify-center gap-10 break-words w-full lg:w-[35%]">
            <h3 className="w-full !font-intertight leading-[125%] break-words">
              {" "}
              Bike has been manufacturing bicycles and engineering components
              for more than 24 years.{" "}
            </h3>
            <p className="leading-[150%] text-gray-600 break-words">
              For over 24 years, Morgans Bike has been a leader in manufacturing
              bicycles and engineering components. With a rich history and
              commitment to quality and innovation, we consistently deliver
              exceptional bikes that embody precision, performance and
              durability.
            </p>
          </div>
          <div>
            <img
              src={image_one}
              alt="image"
              className="h-[592px] rounded-[16px] object-cover w-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 p-10 flex-wrap lg:flex-nowrap">
          <div>
            <img
              src={image_two}
              alt="image"
              className="h-[592px] w-full rounded-[16px] object-cover lg:w-[49%]"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-10 break-words w-full lg:w-[35%]">
            <h3 className="w-full !font-intertight leading-[125%] break-words">
              {" "}
              Get an exciting experience on a Morgans bike made for your ride.{" "}
            </h3>
            <p className="leading-[150%] text-gray-600 break-words">
              Embark on an exciting journey with Morgans, where each bike is
              carefully crafted to give you an exciting and personalized riding
              experience. Get ready for an exciting experience when you ride on
              a Morgans bike designed just for you.
            </p>
          </div>
        </div>
      </div>

      {/* news section */}
      <div className="mt-40 flex flex-col  gap-[50px] md:gap-14 sm:gap-[37px] bg-[#E6E6E6]">
        <div className="container-xs flex flex-col items-center md:p-5">
          <div className="flex flex-col items-start gap-[30px]">
            <p className="font-intertight  text-black text-5xl">
              News & Information
            </p>
          </div>
        </div>
        <div className="container-xs flex gap-6 md:p-5 items-center justify-center">
          <div className="flex w-full flex-col gap-6 items-center justify-center">
            <div className="rounded-[12px]">
              <img
                src={image_four}
                alt="card image"
                className="h-[410px] w-full rounded-[12px] object-cover md:h-auto cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-start gap-[25px]">
              <p size="xl" className="w-full leading-[130%] tracking-[-0.48px]">
                The growing trend of combining cycling with other workouts
              </p>
              <a href="#" className="w-full">
                <p className="!font-medium underline text-center">Read More</p>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 items-center justify-center">
            <div className="rounded-[12px]">
              <img
                src={image_three}
                alt="card image"
                className="h-[410px] w-full rounded-[12px] object-cover md:h-auto cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-start gap-[25px]">
              <p size="xl" className="w-full leading-[130%] tracking-[-0.48px]">
                Thrilling finishes at international mountain biking championship
              </p>
              <a href="#" className="w-full">
                <p as="p" className="!font-medium underline text-center">
                  Read More
                </p>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 items-center justify-center">
            <img
              src={image_five}
              alt="image"
              className="h-[276px] w-[298px] rounded-[12px] object-cover cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="flex flex-col items-start gap-[25px]">
              <p size="xl" className="w-full leading-[130%] tracking-[-0.48px]">
                How bicycles are becoming the main choice in city transportation
              </p>
              <a href="#" className="w-full">
                <p className="!font-medium underline text-center">Read More</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={image_six} className="w-full" alt="" />
      </div>
    </>
  );
}

export default Homepage;
