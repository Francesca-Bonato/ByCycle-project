import React from "react";
import video_jumbotrom from "../assets/video/bg-jumbotron.mp4";
import logoWheel from "../assets/images/img_homepage/img_jumbotron-removebg-preview.png";
import image_one from "../assets/images/img_homepage/img_rectangle_7.png";
import image_two from "../assets/images/img_homepage/img_triathlon_male.png";

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
            <p className="w-full text-center leading-[150%] text-white ">
              is your travel companion, allowing you to ride in <br></br>
              comfortwith their flagship bike, the Morgans Bike. This bike is
              <br></br>
              designed to provide an unrivaled riding experience, with an
              elegant design and the latest technology.
            </p>
          </div>
        </div>
      </div>
      {/* about section */}
      <div className="container-xs flex items-center justify-center gap-5 md:flex-col md:p-5">
        <div className="flex items-center justify-center gap-10 p-20">
          <div className="flex flex-col items-center justify-center gap-10 break-words w-[35%]">
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
              className="h-[592px] w-[49%] rounded-[16px] object-cover md:w-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 p-20">
          <div>
            <img
              src={image_two}
              alt="image"
              className="h-[592px] w-[49%] rounded-[16px] object-cover md:w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-10 break-words w-[35%]">
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
      {/* features section */}
      <div className="w-full h-[592px] bg-[#E6E6E6]">
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8 flex">
            <div class="mx-auto max-w-2xl lg:mx-0 flex w-full">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p class="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article class="flex max-w-xl flex-col items-start justify-between">
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Marketing
                  </a>
                </div>
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    class="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Michael Foster
                      </a>
                    </p>
                    <p class="text-gray-600">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article class="flex max-w-xl flex-col items-start justify-between">
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-500">
                    Mar 16, 2020
                  </time>
                  <a
                    href="#"
                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Marketing
                  </a>
                </div>
                <div class="group relative">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Boost your conversion rate
                    </a>
                  </h3>
                  <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                    totam vitae illo. Non aliquid explicabo necessitatibus unde.
                    Sed exercitationem placeat consectetur nulla deserunt vel.
                    Iusto corrupti dicta.
                  </p>
                </div>
                <div class="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    class="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div class="text-sm leading-6">
                    <p class="font-semibold text-gray-900">
                      <a href="#">
                        <span class="absolute inset-0"></span>
                        Michael Foster
                      </a>
                    </p>
                    <p class="text-gray-600">Co-Founder / CTO</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Homepage;
