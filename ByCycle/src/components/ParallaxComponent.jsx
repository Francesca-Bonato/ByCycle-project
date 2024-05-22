import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function ParallaxComponent() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#000",
          "--swiper-pagination-bullet-inactive-opacity": 0.5,
          "--swiper-pagination-bullet-opacity": 3,
          height: "800px",
        }}
        speed={1200}
        parallax={true}
        grabCursor={true}
        effect={"cube"}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="w-full flex flex-col items-start justify-center gap-6 h-full bg-gradient-quiz-one bg-center bg-contein bg-no-repeat  text-white p-10 2xl:text-lg">
            <h3 className="text-[40px] ml-[50px]">
              How do you ride a bike correctly?
            </h3>
            <p className="text-[20px] ml-[50px]" data-swiper-parallax="-200">
              Test Your Skills: Are You a Cycling Expert?
            </p>
            <div className="ml-[50px] " data-swiper-parallax="-100">
              <Link to="/quiz/3">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                  Go to the questionnaire 💬🚴
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col items-start justify-center gap-6 h-full bg-gradient-quiz-two bg-center bg-contein bg-no-repeat  text-white p-10 2xl:text-lg">
            <h3 className="text-[40px] ml-[50px]">
              You know the history of the bike?
            </h3>
            <p className="text-[20px] ml-[50px]" data-swiper-parallax="-200">
              Test Your Skills: Are You a Cycling Expert?
            </p>
            <div className="ml-[50px] " data-swiper-parallax="-100">
              <Link to="/quiz/1">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                  Go to the questionnaire 💬🚴
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col items-start justify-center gap-6 h-full bg-gradient-quiz-three bg-center bg-contein bg-no-repeat  text-white p-10 2xl:text-lg">
            <h3 className="text-[40px] ml-[50px]">
              You know how to keep your bike in good condition?
            </h3>
            <p className="text-[20px] ml-[50px]" data-swiper-parallax="-200">
              Test Your Skills: Are You a Cycling Expert?
            </p>
            <div className="ml-[50px] " data-swiper-parallax="-100">
              <Link to="/quiz/2">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                  Go to the questionnaire 💬🚴
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
