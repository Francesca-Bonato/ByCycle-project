import { eventsData } from "../data";
import NewsCard from "./NewsCard";

function NewsSection() {
  return (
    <>
      {/* Main container with gray background and responsive padding*/}
      <section className="flex flex-col pt-16 pb-7 px-5 md:px-10 lg:px-16 gap-[50px] bg-[#E6E6E6] 2xl:text-lg">
        {/* Header section with texts */}
        <div className="w-full flex flex-col items-center lg:items-start gap-[30px]">
          {/* Subheading*/}
          <p className="text-center w-full text-lg lg:text-left">
            Stay tuned for events
          </p>
          {/* Main title*/}
          <p className="w-full text-center font-extrabold text-black text-5xl lg:text-left">
            News & Events
          </p>
        </div>

        {/* Container for the news cards with responsive layout */}
        <div className="flex gap-[30px] flex-wrap lg:flex-nowrap items-baseline justify-center">
          {eventsData.map((item, index) => (
            <>
              {/*NewsCard component for each news item*/}
              <NewsCard title={item.title} id={item.id} img={item.img} key={index} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default NewsSection;
