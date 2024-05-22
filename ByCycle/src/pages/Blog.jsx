import { useState } from "react";
import animation_logo from "../assets/images/ByCycle logo ridotto.png";
import image_one from "../assets/images/ByCycleBlog.jpg";
import { Link } from "react-router-dom";

function Blog() {
  const blog = [
    [
      {
        img: "https://images.unsplash.com/photo-1568849676085-51415703900f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljaWNsZXR0ZSUyMGJsb2d8ZW58MHx8MHx8fDA%3D",
        title: "lorem ipsum",
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1673637205535-9d5f386bfb7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
        title: "lorem ipsum",
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1667520245581-3024538bf044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGJpY2ljbGV0dGUlMjBibG9nfGVufDB8fDB8fHww",
        title: "lorem ipsum",
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1706300225677-19374d17ede6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxiaWNpY2xldHRlJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
        title: "lorem ipsum",
      },
      {
        img: "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJpY2ljbGV0dGV8ZW58MHx8MHx8fDA%3D",
        title: "lorem ipsum",
      },
      {
        img: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJpY2ljbGV0dGV8ZW58MHx8MHx8fDA%3D",
        title: "lorem ipsum",
      },
    ],
    [
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
    ],
    [
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
    ],
    [
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
      {
        img: "https://source.unsplash.com/random/300x300",
        title: "lorem ipsum",
      },
    ],
  ];

  const [index, setIndex] = useState(0);
  return (
    <>
      <p className="w-full text-center font-extrabold text-black text-5xl pt-8">
        Blog
      </p>
      {/* blog section one */}
      <section>
        <div className="flex items-center justify-center gap-10 mb-[30px] flex-wrap xl:flex-nowrap xl:justify-between xl:px-[200px] xl:pt-[100px] px-[50px] py-[100px]">
          <div className="flex flex-col items-center justify-center gap-5 break-words w-full xl:w-[42%]">
            <p className="w-full text-center text-xl xl:text-left">About us </p>
            <h3 className="w-full text-center text-[30px] font-bold leading-[125%] break-words xl:text-left xl:text-[45px]">
              Pedaling Dreams into Reality
            </h3>
            <div className="flex xl:w-full ">
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
          <div className="w-full xl:w-auto">
            <img
              src={image_one}
              alt="image"
              className="h-[300px] rounded-[16px] object-cover w-full lg:h-[560px]"
            />
          </div>
        </div>
      </section>
      {/* blog section two */}
      <section id="tabs-content" className="flex justify-center w-full">
        <div className="flex flex-wrap max-w-[1444px] justify-center pt-16 pb-7 lg:px-16 px-0 gap-[50px]">
          {blog[index].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-6 items-center justify-center"
            >
              <div className="w-[300px] h-[300px] rounded-[12px] overflow-hidden">
                <Link to="#" className="w-full">
                  <img
                    src={item.img}
                    alt="card image"
                    className="w-full rounded-[12px] object-cover h-full cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
              </div>
              <div className="flex w-full flex-col justify-between items-start gap-[20px]">
                <p
                  size="xl"
                  className="text-3xl font-bold w-full leading-[130%] tracking-[-0.48px]"
                >
                  {item.title}
                </p>
                <Link to="#" className="w-full">
                  <p className="!font-medium transition-all hover:text-[#26425a] underline">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex items-center justify-center py-[20px] gap-2">
        <button
          className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${index === 0 ? "bg-[#232323] text-white" : ""}`}
          onClick={() => setIndex(0)}
        >
          1
        </button>
        <button
          className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${index === 1 ? "bg-[#232323] text-white" : ""}`}
          onClick={() => setIndex(1)}
        >
          2
        </button>
        <button
          className={`transition-all rounded-[5px] p-3 hover:bg-[#232323] hover:text-white ${index === 2 ? "bg-[#232323] text-white" : ""}`}
          onClick={() => setIndex(2)}
        >
          3
        </button>
        <button
          className={`transition-all rounded-[5px] p-3 text-black hover:bg-[#232323] hover:text-white ${index === 3 ? "bg-[#232323] text-white" : ""}`}
          onClick={() => setIndex(3)}
        >
          4
        </button>
      </div>
    </>
  );
}

export default Blog;
