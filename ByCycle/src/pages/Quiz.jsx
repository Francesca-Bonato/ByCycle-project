import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { quizData } from "../data";

const Quiz = () => {
  // Get the "id" parameter from the URL using useParams
  const { id } = useParams();

  // Access the questions for the current quiz using the id parameter
  const currentQuiz = quizData.find((quiz) => Number(quiz.id) === Number(id));
  console.log(currentQuiz);
  const quizQuestions = currentQuiz?.questions;

  // State variables to manage the current question index, user answers, score, and quiz completion status
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Function to handle when a user selects an answer
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
    // Check if the selected answer is correct and update the score
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + quizQuestions[currentQuestion].score);
    }
    if (currentQuestion === quizQuestions.length - 1) {
      setIsDone(true); // Set isDone when all questions are answered
    }
  };

  // useEffect to save the score in the local storage whenever the score state changes
  useEffect(() => localStorage.setItem(`score Q${currentQuiz.id}`, score), [score]);

  return (
    <>
      <div className="container-image-quiz relative z-10 flex justify-center items-center h-full">
        {isDone ? (
          // Display this section if the quiz is completed
          <div className="text-center text-white p-10 bg-[#f3f3f33d] backdrop-blur-lg	 rounded-[10px] ">
            <p className="text-[23px]">Thank you for taking this quiz!</p>
            <p>{`Your score is: ${score}`}</p>
            <Link to={"/quiz"}>
              <button className="text-[15px] bg-[#232323] text-white  mt-2  pt-1 pb-1 pl-5 pr-5 rounded-[40px] border transition hover:border-solid hover:border-[#232323] hover:bg-white hover:text-black">
                Choose another quiz
              </button>
            </Link>
          </div>
        ) : (
          // Display this section if the quiz is not completed yet
          <div className="relative z-[8888] max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
            {currentQuestion < quizQuestions.length ? (
              <>
                <h2 className="text-xl font-semibold mb-4">
                  {quizQuestions[currentQuestion].question}
                </h2>
                <div className="grid gap-4 relative z-10">
                  {quizQuestions[currentQuestion].options.map(
                    (option, index) => (
                      <button
                        className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-[#232323] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0  "
                        key={index}
                        onClick={() => handleAnswer(option)}
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
              </>
            ) : (
              // Display this section if there are no more questions
              <div className="text-center">{setIsDone(true)}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
