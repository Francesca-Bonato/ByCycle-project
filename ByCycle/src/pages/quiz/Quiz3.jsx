// src/Quiz.js
import { useState } from "react";

const questions = [
  {
    question:
      "A che frequenza dovresti controllare la pressione delle gomme della tua bicicletta?",
    options: [
      "Ogni mese",
      "Ogni settimana",
      "Ogni due settimane",
      "Prima di ogni corsa",
    ],
    correctAnswer: "Ogni settimana",
    difficulty: "media",
    punteggio: 6,
  },
  {
    question: "Quali parti della bicicletta dovresti lubrificare regolarmente?",
    options: [
      "Solo la catena",
      "Solo i freni",
      "Solo i mozzi delle ruote",
      "Catena, mozzi e guarnitura",
    ],
    correctAnswer: "Catena, mozzi e guarnitura",
    difficulty: "media",
    punteggio: 6,
  },
  {
    question:
      "Come puoi prevenire la ruggine sulle parti metalliche della bicicletta?",
    options: [
      "Applicando olio",
      "Tenendo la bicicletta al coperto",
      "Utilizzando prodotti anti-ruggine",
      "Pulendo e lubrificando regolarmente",
    ],
    correctAnswer: "Pulendo e lubrificando regolarmente",
    difficulty: "media",
    punteggio: 6,
  },
  {
    question:
      "Quando dovresti sostituire i pastiglie dei freni della tua bicicletta?",
    options: [
      "Ogni due anni",
      "Ogni sei mesi",
      "Solo quando non funzionano più",
      "Quando si consumano al limite",
    ],
    correctAnswer: "Quando si consumano al limite",
    difficulty: "media",
    punteggio: 6,
  },
  {
    question:
      "Cosa dovresti fare se il cambio della bicicletta inizia a saltare o a scattare durante la pedalata?",
    options: [
      "Niente, è normale",
      "Regolare la tensione del cavo del cambio",
      "Sostituire il cavo del cambio",
      "Sostituire il cambio stesso",
    ],
    correctAnswer: "Regolare la tensione del cavo del cambio",
    difficulty: "difficile",
    punteggio: 8,
  },
];
const Quiz1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [point, setPoint] = useState(0);

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
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      {currentQuestion < questions.length ? (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Grazie per aver completato il quiz!
          </h2>
          <h4>{`Il tuo punteggio è:${point}`}</h4>
        </div>
      )}
    </div>
  );
};

export default Quiz1;
