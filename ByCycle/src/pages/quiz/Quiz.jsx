/* eslint-disable react/prop-types */
// src/Quiz.js
import { useState } from "react";

const Quiz = ({ objQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [point, setPoint] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
    // Confronta la risposta con la corretta
    if (answer === objQuiz[currentQuestion].correctAnswer) {
      // Incrementa il punteggio se la risposta è corretta
      setPoint(point + objQuiz[currentQuestion].punteggio);
    }
  };

  console.log(objQuiz);

  return (
    <>
      <div className="container-image-quiz relative z-10 flex justify-center items-center h-full">
        {isDone ? (
          <h1 className="text-center text-white p-10 bg-[#f3f3f33d] backdrop-blur-lg	 rounded-[10px] ">
            Thank you for taking this quiz!
            <p>{`Your score is: ${point}`}</p>
            {point ? localStorage.setItem("point", point) : null}
          </h1>
        ) : (
          <div className="relative z-[8888] max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
            {currentQuestion < objQuiz.length ? (
              <>
                <h2 className="text-xl font-semibold mb-4">
                  {objQuiz[currentQuestion].question}
                </h2>
                <div className="grid gap-4 relative z-10">
                  {objQuiz[currentQuestion].options.map((option, index) => (
                    <button
                      className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-black before:to-[#232323] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0  "
                      key={index}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">{setIsDone(true)}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
