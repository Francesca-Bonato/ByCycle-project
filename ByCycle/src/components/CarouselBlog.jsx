import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import Button from "./Button";

function CarouselBlog() {
  return (
    <>
      {/* Header container with responsive padding */}
      <section className="max-w-[1536px] mx-auto pt-16 pb-5 px-5 md:px-10 lg:px-16 2xl:text-lg">
        {/* Flex container for the heading and description/CTA*/}
        <div className="flex flex-wrap lg:flex-nowrap lg:items-center gap-[10%]">
          {/* Heading section */}
          <div className="w-full lg:w-[50%]">
            <p className="font-extrabold break-words text-center text-4xl lg:text-5xl lg:text-left">
              ByCycle Press:
              <br /> insights from our editorial board
            </p>
          </div>

          {/* Description section */}
          <div className="w-full lg:w-[50%] mt-[20px] flex flex-col gap-5 items-center break-words leading-[150%]">
            <p className="text-justify">
              Our blog section is where our editorial board shares the latest
              trends and informative articles about the cycling world. From gear
              reviews to training advice and inspirational stories, ByCycle
              Press is your go-to resource for staying informed and inspired on
              your cycling journey. Join us as we explore the diverse and
              dynamic world of cycling together!
            </p>
          </div>
        </div>

        {/* CTA button section */}
        <div className="flex justify-center lg:justify-end py-5">
          <Link to={"/blog"}>
            <Button innerText="Read the blog" />
          </Link>
        </div>
      </section>
      <Slider />
    </>
  );
}

export default CarouselBlog;
