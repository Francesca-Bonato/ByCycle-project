// src/Quiz.js
import { useState } from "react";

const questions = [
  {
    question: "Chi è generalmente considerato l'inventore della bicicletta?",
    options: [
      "Leonardo da Vinci",
      "Karl Drais",
      "Pierre Michaux",
      "J.K. Starley",
    ],
    correctAnswer: "Karl Drais",
    difficulty: "media",
    punteggio: 6,
  },
  {
    question: "In che anno è stata inventata la prima bicicletta?",
    options: ["1700", "1801", "1817", "1863"],
    correctAnswer: "1817",
    difficulty: "media",
    punteggio: 6,
  },
  {
    question:
      "Qual era il nome originale della bicicletta quando è stata inventata?",
    options: ["Laufmaschine", "Draisine", "Biciclette", "Velocipede"],
    correctAnswer: "Laufmaschine",
    difficulty: "difficile",
    punteggio: 8,
  },
  {
    question: "Quando è stata introdotta la prima bicicletta con pedali?",
    options: ["1840", "1853", "1867", "1885"],
    correctAnswer: "1867",
    difficulty: "media",
    punteggio: 6,
  },
  {
    question:
      "Chi ha introdotto il concetto moderno di bicicletta con due ruote dello stesso diametro?",
    options: [
      "Pierre Michaux",
      "John Kemp Starley",
      "James Starley",
      "John Boyd Dunlop",
    ],
    correctAnswer: "John Kemp Starley",
    difficulty: "difficile",
    punteggio: 8,
  },
];
const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [point, setPoint] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
    // Confronta la risposta con la corretta
    if (answer === questions[currentQuestion].correctAnswer) {
      // Incrementa il punteggio se la risposta è corretta
      setPoint(point + questions[currentQuestion].punteggio);
    }
  };

  return (
    <>
      <div className="container-image-quiz relative z-10 flex justify-center items-center h-full">
        {isDone ? (
          <h1 className="text-center text-white p-10 bg-[#f3f3f33d] backdrop-blur-lg	 rounded-[10px] ">
            Thank you for taking this quiz!
            <p>{`Il tuo punteggio è: ${point}`}</p>
            {point ? localStorage.setItem("point", point) : null}
          </h1>
        ) : (
          <div className="relative z-[8888] max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
            {currentQuestion < questions.length ? (
              <>
                <h2 className="text-xl font-semibold mb-4">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid gap-4 relative z-10">
                  {questions[currentQuestion].options.map((option, index) => (
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

export default Quiz1;
