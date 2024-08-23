// // Import React and Tailwind CSS
// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";

// // Sample questions
// const questions = [
//   {
//     question:
//       "What is the correct form of the verb in the sentence: 'She ___ (go) to school every day.'?",
//     options: ["goes", "go", "going", "gone"],
//     correctAnswer: "goes",
//   },
//   {
//     question: "Which sentence is in the present simple tense?",
//     options: [
//       "I am eating lunch.",
//       "She drinks coffee every morning.",
//       "They will go to the park.",
//       "He was sleeping.",
//     ],
//     correctAnswer: "She drinks coffee every morning.",
//   },
//   {
//     question:
//       "What is the correct form of the verb in the sentence: 'They ___ (not/like) pizza.'?",
//     options: ["not like", "do not like", "are not like", "not likes"],
//     correctAnswer: "do not like",
//   },
//   {
//     question: "Choose the correct sentence:",
//     options: [
//       "He don't like to play soccer.",
//       "They doesn't like pizza.",
//       "She doesn't like to read.",
//       "We doesn't go to the gym.",
//     ],
//     correctAnswer: "She doesn't like to read.",
//   },
//   {
//     question:
//       "What is the correct form of the verb in the sentence: 'I ___ (eat) breakfast at 7 AM.'?",
//     options: ["eats", "eating", "ate", "eat"],
//     correctAnswer: "eat",
//   },
// ];

// const PuzzleGame = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [isQuizFinished, setIsQuizFinished] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [answers, setAnswers] = useState([]);

//   const handleAnswerOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextQuestion = () => {

//     setAnswers([...answers, selectedOption]);
//     console.log("Answer", answers);
//     if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
//       setScore(score + 1);
//     }

//     setSelectedOption("");

//     const nextQuestionIndex = currentQuestionIndex + 1;
//     if (nextQuestionIndex < questions.length ) {
//       setCurrentQuestionIndex(nextQuestionIndex);

//     }
//     if ( setAnswers.length == 5) {
//       setIsQuizFinished(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 flex flex-col justify-center items-center">
//       {!isQuizFinished ? (
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-4">
//             Question {currentQuestionIndex + 1} of {questions.length}
//           </h2>
//           <p className="mb-6">{questions[currentQuestionIndex].question}</p>
//           <div className="grid gap-4">
//             {questions[currentQuestionIndex].options.map((option) => (
//               <button
//                 key={option}
//                 className={`p-2 border rounded ${
//                   selectedOption === option
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => handleAnswerOptionClick(option)}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//           <button
//             onClick={handleNextQuestion}
//             className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             disabled={!selectedOption}
//           >
//             Next
//           </button>
//         </div>
//       ) : (
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
//           <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
//           <p className="text-lg">
//             You scored {score} out of {questions.length}
//           </p>
//           <button
//             className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             onClick={() => window.location.reload()}
//           >
//             Restart Quiz
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PuzzleGame;

import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

const PuzzleGame = () => {
  const words = [
    { id: 1, word: "walks" },
    { id: 2, word: "drinking" },
    { id: 3, word: "waits" },
    { id: 4, word: "studying" },
    { id: 5, word: "has" },
    { id: 6, word: "waiting" },
    { id: 7, word: "thinking" },
    { id: 8, word: "learned" },
    { id: 9, word: "arrives" },
    { id: 10, word: "reviewed" },
    { id: 11, word: "practicing" },
  ];

  const initialSentence = [
    { id: 1, text: "Every morning, Sarah", answer: "walks", blank: true },
    { id: 2, text: "to school, is", answer: "drinking", blank: true },
    { id: 3, text: "her coffee while she", answer: "waits", blank: true },
    { id: 4, text: "for the bus, and has been", answer: "studying", blank: true },
    { id: 5, text: "for her exams. She", answer: "has", blank: true },
    { id: 6, text: "always been a diligent student and has never missed a class. While she is", answer: "waiting", blank: true },
    { id: 7, text: "for the bus, she is", answer: "thinking", blank: true },
    { id: 8, text: "about the lessons she has", answer: "learned", blank: true },
    { id: 9, text: "so far this week. By the time she", answer: "arrives", blank: true },
    { id: 10, text: "at school, she has already", answer: "reviewed", blank: true },
    { id: 11, text: "her notes and is ready for the day. Her friends often join her during the walk, and together they have been", answer: "practicing", blank: true },
    { id: 12, text: "their presentations for the science fair, which is happening next month.", answer: "", blank: false },
  ];

  const [sentence, setSentence] = useState(initialSentence);
  const [availableWords, setAvailableWords] = useState(words);
  const [draggedWord, setDraggedWord] = useState(null);

  const handleDragStart = (word) => {
    setDraggedWord(word);
  };

  const handleDrop = (id) => {
    setSentence(
      sentence.map((part) =>
        part.id === id && part.blank && part.answer === draggedWord.word
          ? { ...part, text: [part.text, " ", draggedWord.word, " "], blank: false }
          : part
      )
    );
    
    if (sentence.find((part) => part.id === id && part.answer === draggedWord.word)) {
      setAvailableWords(availableWords.filter((word) => word.word !== draggedWord.word));
    }
    setDraggedWord(null);
  };

  return (
    <div className="p-6 bg-white min-h-screen flex flex-col items-center rounded-lg shadow-xl">
      <h1 className="text-3xl font-semibold mb-4 text-red-600">We are going to practice..!!</h1>
      <h2 className="text-3xl font-semibold mb-4 text-blue-600">Complete the Sentence</h2>
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xl">
        <p className="text-lg leading-8">
          {sentence.map((part) => (
            <span key={part.id} className="mx-1">{part.text}
              {part.blank ? (
                <span
                
                  onDrop={() => handleDrop(part.id)}
                  onDragOver={(e) => e.preventDefault()}
                  
                >
                  {" _____ "}
                </span>
              ) : (
                part.text
              )}
            </span>
          ))}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {availableWords.map((word) => (
          <div
            key={word.id}
            className="cursor-move relative flex space-x-3 border rounded p-2 bg-blue-300 "
            draggable
            onDragStart={() => handleDragStart(word)}
          >
            <p className="text-center">{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;
