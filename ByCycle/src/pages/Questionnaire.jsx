// src/Quiz.js
import  { useState } from 'react';

const questions = [
  {
    question: 'Quale tipo di bicicletta preferisci?',
    options: ['Mountain bike', 'Bici da corsa', 'Bici da città', 'BMX']
  },
  {
    question: 'Quanto spesso utilizzi la bicicletta?',
    options: ['Ogni giorno', 'Alcune volte alla settimana', 'Solo nel weekend', 'Raramente']
  },
  // Aggiungi altre domande e opzioni qui
];
const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      {currentQuestion < questions.length ? (
        <>
          <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
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
          <h2 className="text-xl font-semibold mb-4">Grazie per aver completato il quiz!</h2>
          {/* Mostra risultati o altro dopo la fine del quiz */}
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
