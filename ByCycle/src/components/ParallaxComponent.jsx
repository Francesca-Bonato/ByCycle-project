import React, { useRef, useState } from "react";
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
          "--swiper-pagination-color": "#fff",
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
          <div className="text-left flex flex-col gap-5 h-full bg-[url(https://fiabitalia.it/wp-content/uploads/2021/06/FIAB_Cicloturismo_2-copia-scaled.jpg)] bg-center bg-contein bg-no-repeat  text-white p-5">
            <div
              className="title text-[40px] text-center text-gray-900"
              data-swiper-parallax="-300"
            >
              Questionnaire 2
            </div>
            <div
              className="subtitle bubble left w-auto text-center text-gray-900"
              data-swiper-parallax="-200"
            >
              Subtitle
            </div>
            <div
              className="text w-auto lg:w-[800px] text-center text-white"
              data-swiper-parallax="-100"
            >
              <p className="bubble left break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <Link to="/quiz_two">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                  Go to the questionnaire 💬🚴
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-left flex flex-col gap-5 h-full bg-[url(https://www.comune.desenzano.brescia.it/var/desenzano/storage/images/media/images/itinerari-ciclabili/693094-2-ita-IT/Itinerari-ciclabili_reference.jpg)] bg-center bg-contein bg-no-repeat  text-white p-5">
            <div
              className="title text-[40px] text-center text-gray-900"
              data-swiper-parallax="-300"
            >
              Questionnaire 2
            </div>
            <div
              className="subtitle bubble left w-auto text-center text-gray-900"
              data-swiper-parallax="-200"
            >
              Subtitle
            </div>
            <div
              className="text w-auto lg:w-[800px] text-center text-white"
              data-swiper-parallax="-100"
            >
              <p className="bubble left break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <Link to="/quiz_two">
                <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  mt-10 border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                  Go to the questionnaire 💬🚴
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left flex flex-col gap-5 h-full  bg-[url(https://www.fiabverona.it/wp-content/uploads/2021/12/RL172-Tour-dei-cento-laghi-viaggio-in-bici-tra-cultura-e-natura-Lago-Maggiore.jpg)] bg-center bg-cover  text-white p-5">
            <div
              className="title text-[40px] text-center text-white"
              data-swiper-parallax="-300"
            >
              Questionnaire 3
            </div>
            <div
              className="subtitle bubble left w-auto text-center text-white"
              data-swiper-parallax="-200"
            >
              Subtitle
            </div>
            <div
              className="text w-auto lg:w-[800px] text-center text-white"
              data-swiper-parallax="-100"
            >
              <p className="bubble left break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <Link to="/quiz_three">
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
