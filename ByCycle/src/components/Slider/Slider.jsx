// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./slider.css"

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  const sliders = [
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3ce5337xnxx",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmljaWNsZXRhfGVufDB8fDB8fHww",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3ce5337jk",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1615632778185-48e15a6f68bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljaWNsZXRhfGVufDB8fDB8fHww",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3ce5337h",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1545575439-3261931f52f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1531851454380-ab14ff755bfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1619194728665-36281d450fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1571081790807-6933479d240f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1511277918544-4e638c620c25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3c",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1635159339046-68a9ac16a04d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3ce",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1714015262881-5bfaf6defb20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpY2ljbGV0YSUyMGJteHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3ce5",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1613324089487-c618f5a52630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3ce53",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1626021397894-adae15b5ee76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGJpY2ljbGV0YXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "c3f3b06b-6581-4706-bf8c-fc5fc3ce533",
      title: "Lorem Ipsum",
      depscription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
      image:
        "https://images.unsplash.com/photo-1605537473255-b10095a6c1e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxiaWNpY2xldGF8ZW58MHx8MHx8fDA%3D",
    },
  ];
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
          {sliders.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg transition-all hover:translate-y-[-1.25rem]">
                <div className="h-[256px]">
                  <img
                    className="w-full"
                    src={slide.image}
                    alt="Sunset in the mountains"
                  />
                </div>

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{slide.title}</div>
                  <p className="text-gray-700 text-base">
                    {slide.depscription}
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
