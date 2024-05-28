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
        {/* These SwiperSlides contain the content for each slide */}
        {/* First SwiperSlide for quiz 1 */}
        <SwiperSlide>
          <div className="w-full flex flex-col sm:items-start justify-center gap-6 h-full bg-gradient-quiz-one bg-center bg-contein bg-no-repeat  text-white p-10 2xl:text-lg">
            <h2 className="sm:ml-[50px] text-center sm:text-left leading-[150%] max-w-[500px]">
            Ready to Ride Through History?
            </h2>
            <p className="px-3 sm:px-0 sm:ml-[50px] text-center sm:text-left max-w-[500px]" data-swiper-parallax="-200">
            Brush up on your cycling knowledge! From inventors to maintenance, this quiz tests your expertise.
            </p>
            <div className="sm:ml-[50px] " data-swiper-parallax="-100">
              <Link to="/quiz/1">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                Test your skills 🚴💬
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* Second SwiperSlide for quiz 2 */}
        <SwiperSlide>
          <div className="w-full flex flex-col sm:items-start justify-center gap-6 h-full bg-gradient-quiz-two bg-center bg-contein bg-no-repeat  text-white p-10 2xl:text-lg">
            <h2 className="sm:ml-[50px] text-center sm:text-left  leading-[150%] max-w-[500px]">
            Would you call yourself a master mechanic?
            </h2>
            <p className="px-3 sm:px-0 sm:ml-[50px] text-center sm:text-left max-w-[500px]" data-swiper-parallax="-200">
            Gear up for a challenge! This quiz puts your knowledge of bicycle history, maintenance, and riding techniques to the test.
            </p>
            <div className="sm:ml-[50px] " data-swiper-parallax="-100">
              <Link to="/quiz/2">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                Test your skills 🚴💬
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* Third SwiperSlide for quiz 3 */}
        <SwiperSlide>
          <div className="w-full flex flex-col sm:items-start justify-center gap-6 h-full bg-gradient-quiz-three bg-center bg-contein bg-no-repeat  text-white p-10 2xl:text-lg">
            <h2 className="sm:ml-[50px] text-center sm:text-left leading-[150%] max-w-[500px]">
           Do you REALLY know how to ride?
            </h2>
            <p className="px-3 sm:px-0 sm:ml-[50px] text-center sm:text-left max-w-[500px]" data-swiper-parallax="-200">
            No matter your experience level, this quiz has something for you! Test your knowledge and become a more confident rider.
            </p>
            <div className="sm:ml-[50px] " data-swiper-parallax="-100">
              <Link to="/quiz/3">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                  Test your skills 🚴💬
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
