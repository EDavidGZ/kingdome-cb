

import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

const ThirdActivty = () => {
  const words = [
    { id: 1, word: "will travel" },
    { id: 2, word: "will return" },
    { id: 3, word: "will arrive" },
    { id: 4, word: "will stay" },
    { id: 5, word: "will explore" },
    { id: 6, word: "will visit" },
    { id: 7, word: "will take" },
    { id: 8, word: "will meet" },
    { id: 9, word: "will try" },
    { id: 10, word: "will enjoy" },
    { id: 11, word: "will pack" },
  ];
  
  const initialSentence = [
    { id: 1, text: "Next month, we", answer: "will travel", blank: true },
    { id: 2, text: "to Japan. Before leaving, we", answer: "will pack", blank: true },
    { id: 3, text: "our bags carefully. We", answer: "will arrive", blank: true },
    { id: 4, text: "in Tokyo and", answer: "will stay", blank: true },
    { id: 5, text: "at a nice hotel. During our trip, we", answer: "will explore", blank: true },
    { id: 6, text: "many temples and", answer: "will visit", blank: true },
    { id: 7, text: "beautiful gardens. We", answer: "will take", blank: true },
    { id: 8, text: "a lot of pictures and", answer: "will meet", blank: true },
    { id: 9, text: "new friends. We", answer: "will try", blank: true },
    { id: 10, text: "traditional Japanese food and", answer: "will enjoy", blank: true },
    { id: 11, text: "every moment. After two weeks, we", answer: "will return", blank: true },
    { id: 12, text: "home with amazing memories and stories to share.", answer: "", blank: false },
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

export default ThirdActivty;
