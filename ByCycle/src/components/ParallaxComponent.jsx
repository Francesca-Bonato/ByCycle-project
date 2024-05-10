import React, { useRef, useState } from "react";
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
          // "background-image": "url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D)",
          "height": "800px",
          "width" : "100vw",
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-left h-full bg-[url(https://fiabitalia.it/wp-content/uploads/2021/06/FIAB_Cicloturismo_2-copia-scaled.jpg)] bg-center bg-cover text-white p-5">
            <div className="title" data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left  h-full bg-[url(https://www.comune.desenzano.brescia.it/var/desenzano/storage/images/media/images/itinerari-ciclabili/693094-2-ita-IT/Itinerari-ciclabili_reference.jpg)] bg-center bg-contein bg-no-repeat  text-white p-5">
            <div className="title" data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-left h-full  bg-[url(https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D)] bg-center bg-cover  text-white p-5">
            <div className="title" data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
