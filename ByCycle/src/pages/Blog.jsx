import animation_logo from "../assets/images/ByCycle logo ridotto.png";
import image_one from "../assets/images/img_homepage/img_rectangle_7.png";


function Blog() {
  return (
<>
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
                width={"100px"}
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
</>
  );
}

export default Blog;
