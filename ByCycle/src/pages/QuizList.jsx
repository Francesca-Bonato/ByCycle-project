import { Link } from "react-router-dom";
import { quizData } from "../data";

function QuizList() {
  return (
    <>
      {/* Main container with responsive padding*/}
      <div className="flex flex-col justify-center max-w-[1400px] mx-auto pt-16 px-5 md:px-10 lg:px-16">
        {/* Main title */}
        <h1 className="text-center text-neutral-800 text-[44px] font-medium leading-[55px]">
          Spin the Trivia Wheel
        </h1>
        {/* Container for the quiz cards */}
        <div className="py-6 sm:px-6 flex justify-center items-center gap-6 flex-wrap">
          {/* List of clickable quiz cards */}
          {quizData.map((quiz) => {
            return (
              <>
                {/* Single quiz quiz */}
                <Link
                  key={quiz.id}
                  to={`/quiz/${quiz.id}`}
                  className="w-[400px] min-h-[500px] bg-white rounded-lg text-black p-4 flex flex-col items-start justify-between gap-3 hover:bg-black hover:text-white hover:bg-gradient-to-t from-black to-transparent hover:shadow-lg transition-all duration-500 relative border-[2px] black"
                >
                  <img
                    src={quiz.img}
                    alt={quiz.title}
                    className="" 
                  />
                  <div className="top-[300px] absolute">
                    <p className="font-bold">{quiz.title}</p>
                    <p className="">{quiz.description}</p>
                  </div>
                  <p className="underline font-bold hover:no-underline">
                    Test it yourself!
                  </p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default QuizList;
