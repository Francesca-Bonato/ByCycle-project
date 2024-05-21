import { useState } from "react";
import NewsCard from "../components/NewsCard.jsx";
import { eventsData } from "../data.js";

function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Parse date strings into Date objects
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day); // months are 0-indexed in JS Date
  };

  // Logic to filter events based on the category
  const filteredEvents = eventsData.filter((item) => {
    const startDate = parseDate(item.startDate);
    const endDate = parseDate(item.endDate);
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    switch (selectedCategory) {
      case "All":
        return true;
      case "Upcoming":
        // Filter upcoming events
        return startDate > now;
      case "Current Month":
        // Filter events for the current month
        return (
          (startDate.getFullYear() === currentYear &&
            startDate.getMonth() === currentMonth) ||
          (endDate.getFullYear() === currentYear &&
            endDate.getMonth() === currentMonth)
        );
      case "Beginner Level":
        // Filter events for beginner level
        return item.level === "beginner";
      case "Trip":
        // Filter trip events
        return item.trip === true;
      default:
        return true;
    }
  });

  // Function to change the selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const highlightEvent = eventsData.find((item) => item.highlight === true);

  return (
    <div className="flex flex-col justify-center max-w-[1260px] mx-auto pt-16 px-5 md:px-10 lg:px-16">
      {/* Header section */}
      <header className="flex flex-col justify-center items-center">
        {/* Main title */}
        <h1 className="text-center text-neutral-800 text-[44px] font-medium leading-[55px]">
          Join events with our community
        </h1>
        {/* Subtitle */}
        <div className="text-zinc-500 text-justify md:font-semibold pt-8">
          Our mission is to break down barriers and make cycling accessible to
          everyone, regardless of age, background or experience level. Through
          initiatives that prioritize affordability and availability, Bycycle
          aims to empower individuals to embrace the multiple benefits of
          cycling.
        </div>
        {/* Navigation bar for filtering events */}
        <div className="w-full pt-5 text-sm flex flex-col justify-center items-center gap-2 md:flex-row lg:px-8">
          {/* Each button represents a different category of events */}
          <button
            className={`leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold hover:bg-gray-700 hover:text-white hover:border-white max-w-[360px] lg:max-w-[160px] ${
              selectedCategory === "All" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </button>
          <button
            className={`leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold hover:bg-gray-700 hover:text-white hover:border-white max-w-[360px] lg:max-w-[160px] ${
              selectedCategory === "Upcoming" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryChange("Upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold hover:bg-gray-700 hover:text-white hover:border-white max-w-[360px] lg:max-w-[160px] ${
              selectedCategory === "Current Month" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryChange("Current Month")}
          >
            Current Month
          </button>
          <button
            className={`leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold hover:bg-gray-700 hover:text-white hover:border-white max-w-[360px] lg:max-w-[160px] ${
              selectedCategory === "Beginner Level" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryChange("Beginner Level")}
          >
            Beginner Level
          </button>
          <button
            className={`leading-[21px] px-3 py-2 w-[90%] rounded-[40px] border  border-neutral-400 justify-center items-center gap-2 flex text-neutral-950 text-sm font-semibold hover:bg-gray-700 hover:text-white hover:border-white max-w-[360px] lg:max-w-[160px] ${
              selectedCategory === "Trip" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleCategoryChange("Trip")}
          >
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
        {filteredEvents.map((item, index) => (
          <NewsCard title={item.title} id={item.id} img={item.img} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Events;
