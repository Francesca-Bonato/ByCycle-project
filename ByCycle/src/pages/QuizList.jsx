import { Link } from "react-router-dom";
import { quizData } from "../data";

function QuizList() {
  return (
    <>
      {/* Main container */}
      <div className="p-6 flex justify-center items-center gap-6 flex-wrap">
        {/* List of clickable quiz cards */}
        {quizData.map((quiz) => {
          return (
            <>
              {/* Single quiz quiz */}
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className="w-[400px] min-h-[500px]  bg-white rounded-lg text-black p-4 flex flex-col items-start justify-between gap-3 hover:bg-black hover:text-white hover:bg-gradient-to-t from-black to-transparent hover:shadow-lg transition-all duration-500 relative border-[2px] black"
              >
                <img
                  src={quiz.icon}
                  alt={quiz.title}
                  className="absolute top-4 left-4 text-3xl"
                />
                <div className="relative top-[300px]">
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
    </>
  );
}

export default QuizList;
