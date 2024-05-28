// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {blogData} from "../../data"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./slider.css"

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingBottom: "3.5rem",
      }}
        slidesPerView={1}
        spaceBetween={10}
        effect={"cube"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          885: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          2500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          {blogData.flatMap((arr) => arr).map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg transition-all hover:translate-y-[-1.25rem]">
                <div className="h-[256px]">
                  <img
                    className="w-full"
                    src={slide.img}
                    alt="Sunset in the mountains"
                  />
                </div>

                <div className="px-6 py-4 h-[200px] overflow-hidden">
                  <div className="font-bold text-xl mb-2">{slide.title}</div>
                  <p className="text-gray-700 text-base">
                    {slide.abstract}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
