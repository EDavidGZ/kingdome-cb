// src/WordChecker.js
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import questions from "./questions";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setResult, setLevel } from "../store/question-slice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";


const WordChecker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(3600);
  const [arrAnswers, setArrAnswers] = useState([]);
  const [arrWrong, setArrarrWrong] = useState([]);

  const comparative = (a, b) => {
    a == b && arrAnswers.includes(a) == false
      ? setArrAnswers([...arrAnswers, a])
      : setArrarrWrong([...arrWrong, a]);
  };

  function getNoteOftest(e) {
    e.preventDefault();
    const result = arrAnswers.length;
    const level =
      result < 10
        ? "Beginner"
        : result < 20 && result > 10
        ? "Intermediate"
        : "Advanced";

    dispatch(setResult({ result }));
    dispatch(setLevel({ level }));
    navigate("/score");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center"
      style={{ padding: "1rem" }}
    >
      <form
        onSubmit={getNoteOftest}
        className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-3/4 lg:w-1/2"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-blue-600">
            {timer < 60 ? `${timer}` : `0${timer}`}
          </div>
          <button className="text-gray-500 hover:text-gray-800">
            QUIT TEST
          </button>
        </div>
        <div className="h-1 bg-gray-300 rounded-full mb-4">
          <div
            className="h-1 bg-yellow-500 rounded-full"
            style={{ width: `${(timer / 3600) * 1}%` }}
          ></div>
        </div>
        {questions.map((question) => (
          <div key={question.ask}>
            <h2 className="text-center text-2xl font-semibold mb-6">
              {question.ask}
            </h2>
            <div
              className="flex justify-center space-x-4"
              style={{
                borderRadius: "10px",
                padding: "1rem",
              }}
            >
              <RadioGroup defaultValue="medium" name="radio-buttons-group">
                <Radio
                  color="danger"
                  orientation="horizontal"
                  size="lg"
                  variant="outlined"
                  label={question.opt1}
                  value={question.opt1}
                  onChange={(e) => comparative(e.target.value, question.answer)}
                />
                <Radio
                  color="danger"
                  orientation="horizontal"
                  size="lg"
                  variant="outlined"
                  label={question.opt2}
                  value={question.opt2}
                  onChange={(e) => comparative(e.target.value, question.answer)}
                />
                <Radio
                  color="danger"
                  orientation="horizontal"
                  size="lg"
                  variant="outlined"
                  label={question.opt3}
                  value={question.opt3}
                  onChange={(e) => comparative(e.target.value, question.answer)}
                />{" "}
              </RadioGroup>
            </div>
          </div>
        ))}
        <Button variant="solid" color="primary"
          type="submit"
          style={{ marginTop: "1.5rem",   }}
        >
          Save answers
        </Button>
      </form>
    </div>
  );
};

export default WordChecker;
