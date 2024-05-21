import image_one from "../assets/images/img_homepage/img_rectangle_7.png";
import image_two from "../assets/images/img_homepage/img_triathlon_male.png";
import animation_logo from "../assets/images/ByCycle logo ridotto.png";

function AboutUsHomepage() {
  return (
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
            Once upon a time, in a quaint little town nestled amidst the rolling
            hills and the scenic trails of Tuscany, three friends - Luigi,
            Daniele, and Sergio, - shared a deep bond forged through their
            mutual love for cycling. Together, they envisioned a vibrant online
            community where cyclists could connect, share, and thrive. With
            passion as their fuel and determination as their compass, they
            launched ByCycle - a dynamic forum where pedal-powered adventures
            come to life. Join the ride and be part of their journey to
            pedal-powered greatness!
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
            Connect with fellow ByCycle enthusiasts
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
  );
}

export default AboutUsHomepage;
