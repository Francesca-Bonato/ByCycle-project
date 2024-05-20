import { eventsData } from "../data";
import NewsCard from "./NewsCard";

function NewsSection() {
  return (
    <>
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
        <div className="flex gap-[30px] flex-wrap md:flex-nowrap items-baseline justify-center">
          {eventsData.map((item, index) => {
            if (index < 3) {
              return <NewsCard title={item.title} img={item.img} key={index} />;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default NewsSection;
