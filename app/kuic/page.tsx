"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/data/content";

const Kuic = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleFinishQuiz = () => {
    setShowResults(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  p-4">
      {!showResults ? (
        <div className="w-full max-w-xl ">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Pyetja {currentQuestionIndex + 1}/{quizQuestions.length}
          </h3>

          <h2 className="text-xl font-bold mb-4 text-white">
            {quizQuestions[currentQuestionIndex].question}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {quizQuestions[currentQuestionIndex].options.map(
              (option, optionIndex) => {
                const isSelected =
                  selectedAnswers[currentQuestionIndex] === option[0];
                return (
                  <button
                    key={optionIndex}
                    onClick={() => handleAnswerSelect(option[0])}
                    className={`p-2 border rounded-lg text-left ${
                      isSelected
                        ? "bg-gray-400 text-white"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  >
                    {option}
                  </button>
                );
              }
            )}
          </div>

          {currentQuestionIndex < quizQuestions.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestionIndex]}
              className={`mt-4 py-2 px-4 rounded-lg ${
                selectedAnswers[currentQuestionIndex]
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              Pyetja e rradhës
            </Button>
          ) : (
            <Button
              onClick={handleFinishQuiz}
              disabled={!selectedAnswers[currentQuestionIndex]}
              className={`mt-4 py-2 px-4 rounded-lg ${
                selectedAnswers[currentQuestionIndex]
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              Përfundo Kuizin
            </Button>
          )}
        </div>
      ) : (
        <div className="w-full max-w-xl text-white">
          <h2 className="text-2xl font-bold mb-4">Rezultatet tuaja:</h2>
          {quizQuestions.map((question, index) => {
            const isCorrect = selectedAnswers[index] === question.correctAnswer;
            const selectedOption = quizQuestions[index].options.find(
              (option) => option[0] === selectedAnswers[index]
            );

            const correctOption = quizQuestions[index].options.find(
              (option) => option[0] === question.correctAnswer
            );

            return (
              <div key={index} className="mb-4">
                <p className="font-semibold">{question.question}</p>
                <p
                  className={`${isCorrect ? "text-green-600" : "text-red-600"}`}
                >
                  {isCorrect
                    ? `Saktë! Përgjigjja është ${
                        question.correctAnswer
                      } (${correctOption?.slice(3)}).`
                    : `Gabim! Përgjigjja e saktë ishte ${
                        question.correctAnswer
                      } (${correctOption?.slice(3)}), ju zgjodhët ${
                        selectedAnswers[index]
                      } (${selectedOption?.slice(3)}).`}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Kuic;
