import video_jumbotrom from "../assets/video/bg-jumbotron.mp4";
import image_one from "../assets/images/img_homepage/img_rectangle_7.png";
import image_two from "../assets/images/img_homepage/img_triathlon_male.png";
import image_three from "../assets/images/img_homepage/img_rectangle_7_1.png";
import image_four from "../assets/images/img_homepage/img_rectangle_7_410x427.png";
import image_five from "../assets/images/img_homepage/img_rectangle_7_2.png";
import img_logo from "../assets/images/ByCycle_logo_definitivo_white.png";
import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import Parallax from "../components/ParallaxComponent";
import animation_logo from "../assets/images/ByCycle logo ridotto.png";

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
            <p className="max-w-[700px] w-full text-center leading-[150%] pl-6 pr-6 text-white lg:p-0">
              Welcome to <strong>ByCycle</strong>! <br /> If you&apos;re
              passionate about cycling and seeking advice, support, and a sense
              of community, you&apos;ve come to the right place.
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
      {/* About Us section */}
      <div className="container-xs flex items-center justify-center flex-col pt-16 px-5 md:px-10 lg:px-16">
        <div className="flex items-center justify-center gap-10 mb-[30px] flex-wrap lg:flex-nowrap lg:justify-between">
          <div className="flex flex-col items-center justify-center gap-5 break-words w-full lg:w-[42%]">
            <p className="w-full text-center text-lg lg:text-left">About us </p>
            <h3 className="w-full text-center text-[30px] font-bold leading-[125%] break-words lg:text-left xl:text-[45px]">
              Pedaling Dreams into Reality
            </h3>
            <div className="flex lg:w-full ">
              <img
                src={animation_logo}
                alt="ByCycle logo"
                className="animate-spin"
                width={"80px"}
              />
            </div>
            <p className="leading-[150%] text-gray-600 break-words text-justify">
              Once upon a time, in a quaint little town nestled amidst the
              rolling hills and the scenic trails of Tuscany, three friends –
              Luigi, Daniele, and Sergio, – shared a deep bond forged through
              their mutual love for cycling. Together, they envisioned a vibrant
              online community where cyclists could connect, share, and thrive.
              With passion as their fuel and determination as their compass,
              they launched ByCycle – a dynamic forum where pedal-powered
              adventures come to life. Join the ride and be part of their
              journey to pedal-powered greatness!
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <img
              src={image_one}
              alt="image"
              className="h-[300px] rounded-[16px] object-cover w-full lg:h-[560px]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center pt-15 flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:items-end">
          <div className="w-full lg:w-auto">
            <img
              src={image_two}
              alt="image"
              className="w-full h-[300px] object-top rounded-[16px] object-cover sm:object-center lg:h-100 lg:h-[560px]"
            />
          </div>
          <div className="flex flex-col items-center my-[10px] justify-center gap-5 break-words w-full lg:w-[42%]">
            <p className="w-full text-center text-lg lg:text-left mt-10 lg:mt-0">
              Every ride is an adventure{" "}
            </p>
            <h3 className="w-full text-[30px] text-center xl:text-[45px] font-bold leading-[125%] break-words lg:text-left">
              {" "}
              Connect with fellow ByCycle enthusiasts{" "}
            </h3>
            <div className="flex lg:w-full ">
              <img
                src={animation_logo}
                alt="ByCycle logo"
                className="animate-spin"
                width={"80px"}
              />
            </div>
            <p className="leading-[150%] text-gray-600 break-words text-justify">
              Experience the joy of pedaling together, creating a bond that goes
              beyond the handlebars. Embark on an exciting journey with ByCycle,
              where connections go beyond the handlebars. Join our vibrant
              community of cyclists from all backgrounds. Share stories, seek
              advice, and forge new friendships as we explore the endless
              possibilities of cycling together. Plus, stay tuned for exciting
              opportunities to join group rides and cycling trips with fellow
              enthusiasts. Ready to pedal into the future? Let&apos;s ride!
            </p>
            <div className="flex lg:w-full mb-7">
              <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                Join other bikers
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* news section */}
      <div className="flex flex-col pt-16 pb-7 px-5 md:px-10 lg:px-16 gap-[50px] bg-[#E6E6E6]">
        <div className="container-xs flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-[30px]">
            <p className="text-center w-full text-lg lg:text-left">
              Stay tuned for events
            </p>
            <p className="w-full text-center font-extrabold text-black text-5xl lg:text-left">
              News & Events
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
                  className="w-full object-top rounded-[12px] object-cover h-auto cursor-pointer transition duration-300 ease-in-out hover:scale-110 sm:h-[350px] lg:h-auto"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col justify-between items-start gap-[25px] lg:h-[205px]">
              <p
                size="xl"
                className="text-3xl font-bold w-full leading-[130%] tracking-[-0.48px]"
              >
                The growing trend of combining cycling with other workouts
              </p>
              <Link to="/news" className="w-full">
                <p className="!font-medium transition-all hover:text-[#26425a] underline">
                  Read More
                </p>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 items-center justify-center">
            <div className="w-full rounded-[12px] overflow-hidden sm:height-[350px] lg:h-auto">
              <Link to="/news" className="w-full">
                <img
                  src={image_three}
                  alt="card image"
                  className="w-full rounded-[12px] object-cover h-auto cursor-pointer transition duration-300 ease-in-out hover:scale-110 sm:h-[350px] lg:h-auto"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col justify-between items-start gap-[25px] lg:h-[205px]">
              <p className="font-bold text-3xl w-full leading-[130%] tracking-[-0.48px]">
                Thrilling finishes at international mountain biking championship
              </p>
              <Link to="/news" className="w-full">
                <p className="!font-medium transition-all hover:text-[#26425a] underline">
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
                  className="w-full rounded-[12px] object-cover h-auto cursor-pointer transition duration-300 ease-in-out hover:scale-110 sm:h-[350px] lg:h-auto"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col justify-between items-start gap-[25px] lg:h-[205px]">
              <p className="w-full font-bold text-3xl leading-[130%] tracking-[-0.48px]">
                How bicycles are becoming the main choice in city transportation
              </p>
              <Link to="/news" className="w-full">
                <p className="!font-medium transition-all hover:text-[#26425a] underline">
                  Read More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Blog carousel */}
      <section className="pt-16 pb-5 px-5 md:px-10 lg:px-16 ">
        <div className="flex flex-wrap lg:flex-nowrap lg:items-center gap-[10%]">
          <div className="w-full lg:w-[50%]">
            <p className="font-extrabold break-words text-center text-4xl lg:text-5xl lg:text-left">
              ByCycle Press:
              <br /> insights from our editorial board
            </p>
          </div>
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
        <div className="flex justify-center lg:justify-end py-5">
          <Link to={"/community"}>
            <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
              Join other bikers
            </button>
          </Link>
        </div>
      </section>
      <Slider />
      {/* Quiz carousel */}
      <section className="pt-16 pb-5 px-5 md:px-10 lg:px-16">
        <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap lg:items-center gap-[20%]">
          <div className="w-full lg:w-[50%]">
            <p className="font-extrabold break-words text-center text-4xl lg:text-5xl lg:text-left lg:max-w-[610px] xl:max-w-[1200px]">
              Gear up for our quiz collection!
            </p>
          </div>
          <div className="w-full lg:w-[50%] mt-[20px] flex flex-col gap-5 items-center break-words leading-[150%]">
            <p className="text-justify">
              Welcome to the Bicycle Quiz! Test your cycling knowledge, from
              history to safety rules. 20 multiple-choice questions, 30 seconds
              to answer. Have fun and learn! Click &quot;Pedal into the
              Quiz&quot; to get pedaling!
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start py-7">
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
