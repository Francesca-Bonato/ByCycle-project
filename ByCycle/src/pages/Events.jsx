import NewsCard from "../components/NewsCard.jsx";
import { eventsData } from "../data.js";

function Events() {
  const highlightEvent = eventsData.find((item) => item.highlight === true);
  return (
    <div className="flex flex-col justify-center pt-16 px-5 md:px-10 lg:px-16">
      {/* Header section */}
      <header className="flex flex-col justify-center items-center">
        {/* Main title */}
        <h1 className="text-center text-neutral-800 text-[44px] font-medium leading-[55px]">
          Join events with our community
        </h1>
        {/* Subtitle */}
        <div className="text-zinc-500 text-justify md:font-semibold max-w-[1260px] pt-8">
          Our mission is to break down barriers and make cycling accessible to
          everyone, regardless of age, background or experience level. Through
          initiatives that prioritize affordability and availability, Bycycle
          aims to empower individuals to embrace the multiple benefits of
          cycling.
        </div>
        {/* Navigation bar for filtering events */}
        <div className="w-full pt-5 text-sm flex flex-col justify-center items-center gap-2 md:flex-row lg:px-8">
          {/* Each button represents a different category of events */}
          <button className="leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold transition hover:border-black hover:bg-white hover:text-black hover:border max-w-[360px] lg:max-w-[160px]">
            All
          </button>
          <button className="leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold transition hover:border-black hover:bg-white hover:text-black hover:border max-w-[360px] lg:max-w-[160px]">
            Upcoming
          </button>
          <button className="leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold transition hover:border-black hover:bg-white hover:text-black hover:border max-w-[360px] lg:max-w-[160px]">
            Current Month
          </button>
          <button className="leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold transition hover:border-black hover:bg-white hover:text-black hover:border max-w-[360px] lg:max-w-[160px]">
            Beginner Level
          </button>
          <button className="leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold transition hover:border-black hover:bg-white hover:text-black hover:border max-w-[360px] lg:max-w-[160px]">
            Trips
          </button>
        </div>
      </header>

      {/* Event highlight section with image and description */}
      <h className="text-center text-neutral-800 text-[44px] font-medium leading-[55px] pt-16">
        Highlight of the month
      </h>

      <div className="flex items-center justify-center gap-10 pt-8 flex-wrap lg:flex-nowrap lg:justify-between">
      <div className="w-full lg:w-auto">
          <img
            src={highlightEvent.img}
            alt="image"
            className="h-[300px] rounded-[16px] object-cover w-full lg:h-[560px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 break-words w-full lg:w-[42%] lg:items-start">

          <h5 className="w-full text-center text-[35px] font-bold leading-[125%] break-words lg:text-left xl:text-[40px]">
            {highlightEvent.title}
          </h5>

          <p className="leading-[150%] text-lg text-gray-600 break-words text-justify">
            {highlightEvent.description}
          </p>
        </div>
      </div>

      {/* Section for listing multiple events */}
      <div className="text-center text-neutral-800 text-[44px] font-medium leading-[55px] pt-16">
        All events
      </div>
      <div className="flex gap-[30px] flex-wrap lg:flex-nowrap items-baseline justify-center pt-8 pb-16">
        {eventsData.map((item, index) => (
          <NewsCard title={item.title} img={item.img} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Events;
