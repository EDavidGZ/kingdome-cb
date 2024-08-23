import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ScoreView = () => {
    const navigate = useNavigate()
  const score = useSelector((store) => store.QUESTION.result);
  const level = useSelector((store) => store.QUESTION.level);
  //   const answers = useSelector((store) => store.QUESTION.questionList)

  console.log(score);
  const handleViewResult = () => {
    alert("Displaying results...");
    navigate('/topics-first-book')

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
        <h2 className="text-3xl font-bold mb-4">Your Score</h2>
        <p className="text-6xl font-extrabold text-indigo-600 mb-4">
          {score}/30
        </p>
        <p className="text-xl text-gray-700 mb-6">
          Your level is{" "}
          <span className="text-indigo-600 font-bold">{level}</span>
        </p>
        <button
          onClick={handleViewResult}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          View Topics
        </button>
      </div>
    </div>
  );
};

export default ScoreView;
