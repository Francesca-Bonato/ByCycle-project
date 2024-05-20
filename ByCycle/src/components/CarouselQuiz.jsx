import { Link } from "react-router-dom";

function CarouselQuiz() {
  return (
      <section className="pt-16 pb-5 px-5 md:px-10 lg:px-16 2xl:text-lg">
        <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap lg:items-center gap-[20%]">
          <div className="w-full lg:w-[50%]">
            <p className="font-extrabold break-words text-center text-4xl lg:text-5xl lg:text-left lg:max-w-[610px] xl:max-w-[1200px]">
              Gear up for our quiz collection!
            </p>
          </div>
          <div className="w-full lg:w-[50%] mt-[20px] flex flex-col gap-5 items-center break-words leading-[150%]">
            <p className="text-justify">
              Welcome to the Bicycle Quiz! Test your cycling knowledge, from
              history to safety rules. 20 multiple-choice questions, 30 seconds
              to answer. Have fun and learn! Click &quot;Pedal into the
              Quiz&quot; to get pedaling!
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start py-7">
          <Link to={"/quiz"}>
            <button className="bg-[#232323] text-white pt-3 pb-3 pl-8 pr-8 rounded-[40px]  border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
              Pedal into the Quiz
            </button>
          </Link>
        </div>
      </section>
  );
}

export default CarouselQuiz;
