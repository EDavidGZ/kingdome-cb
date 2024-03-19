import React, { useState } from "react";
import "./tests.css";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Bar from "../bar-menu/Bar";

const LevelTest = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };

  const answer = "answer";
  const answerTwo = "no-show";
  const [result, setResult] = useState("");
  const [num, setNum] = useState("no-show");
  const [score, setScore] = useState(0);
  const [arrAnswers, setArrAnswers] = useState([]);
  const [arrWrong, setArrarrWrong] = useState([]);

  const questions = [
    {
      ask: "What is the plural form of 'child'?",
      opt1: "childs",
      opt2: "child",
      opt3: "children",
      answer: "children",
    },
    {
      ask: "Which word means the opposite of 'begin'?",
      opt1: "end",
      opt2: "start",
      opt3: "commence",
      answer: "end",
    },
    {
      ask: "What is the correct spelling?",
      opt1: "recieve",
      opt2: "receive",
      opt3: "recievee",
      answer: "receive",
    },
    {
      ask: "Choose the correct sentence:",
      opt1: "They is going to the party.",
      opt2: "They are going to the party.",
      opt3: "They am going to the party.",
      answer: "They are going to the party.",
    },
    {
      ask: "What part of speech is the word 'quickly'?",
      opt1: "verb",
      opt2: "adjective",
      opt3: "adverb",
      answer: "adverb",
    },
    {
      ask: "Which sentence is grammatically correct?_",
      opt1: "He don't like pizza.",
      opt2: "He doesn't likes pizza.",
      opt3: "He doesn't like pizza.",
      answer: "He doesn't like pizza.",
    },
    {
      ask: "Identify the noun in the sentence: 'The cat chased the mouse.'",
      opt1: "chased",
      opt2: "cat",
      opt3: "mouse",
      answer: "cat",
    },
    {
      ask: "What is the past tense of 'eat'?",
      opt1: "eating",
      opt2: "ate",
      opt3: "eaten",
      answer: "ate",
    },
    {
      ask: "Which sentence uses the correct form of the comparative adjective?",
      opt1: "She runs more faster than me.",
      opt2: "She runs most fast than me.",
      opt3: "She runs faster than me.",
      answer: "She runs faster than me.",
    },
    {
      ask: "What is a synonym for 'happy'?",
      opt1: "sad",
      opt2: "joyful",
      opt3: "angry",
      answer: "joyful",
    },
    {
      ask: "Choose the correct homophone:",
      opt1: "their",
      opt2: "there",
      opt3: "they're",
      answer: "there",
    },
    {
      ask: "What does the prefix 'un-' usually mean?",
      opt1: "not",
      opt2: "opposite of",
      opt3: "too much",
      answer: "not",
    },
    {
      ask: "Identify the subject in the sentence: 'The flowers bloomed beautifully in the garden.'",
      opt1: "flowers",
      opt2: "bloomed",
      opt3: "garden",
      answer: "flowers",
    },
    {
      ask: "What is the plural of 'knife'?",
      opt1: "knifes",
      opt2: "knive",
      opt3: "knives",
      answer: "knives",
    },
    {
      ask: "Which sentence is punctuated correctly?",
      opt1: "I went to the store and bought apples, oranges, bananas, and grapes.",
      opt2: "I went to the store and bought apples, oranges, bananas and grapes.",
      opt3: "I went to the store, and bought apples, oranges, bananas, and grapes.",
      answer:
        "I went to the store and bought apples, oranges, bananas, and grapes.",
    },
    {
      ask: "What is the comparative form of 'bad'?",
      opt1: "badder",
      opt2: "worst",
      opt3: "worse",
      answer: "worse",
    },
    {
      ask: "Which sentence is in the passive voice?",
      opt1: "The cat chased the mouse.",
      opt2: "The mouse was chased by the cat.",
      opt3: "The mouse chased the cat.",
      answer: "The mouse was chased by the cat.",
    },
    {
      ask: "Identify the verb in the sentence: 'She dances gracefully.'",
      opt1: "she",
      opt2: "dances",
      opt3: "gracefully",
      answer: "dances",
    },
    {
      ask: "What is a synonym for 'big'?",
      opt1: "large",
      opt2: "small",
      opt3: "tiny",
      answer: "large",
    },
    {
      ask: "Which word is a conjunction?",
      opt1: "and",
      opt2: "happy",
      opt3: "quickly",
      answer: "and",
    },
    {
      ask: "What is the plural of 'goose'?",
      opt1: "gooses",
      opt2: "geese",
      opt3: "goose",
      answer: "geese",
    },
    {
      ask: "What is the superlative form of 'good'?",
      opt1: "goodest",
      opt2: "better",
      opt3: "best",
      answer: "best",
    },
    {
      ask: "Choose the correct possessive pronoun:",
      opt1: "his",
      opt2: "he's",
      opt3: "its",
      answer: "his",
    },
    {
      ask: "Which sentence is grammatically correct?",
      opt1: "I seen that movie before.",
      opt2: "I saw that movie before.",
      opt3: "I seed that movie before.",
      answer: "I saw that movie before.",
    },
    {
      ask: "What does the suffix '-less' usually mean?",
      opt1: "full of",
      opt2: "without",
      opt3: "more",
      answer: "without",
    },
    {
      ask: "What is the past participle of 'write'?",
      opt1: "wrote",
      opt2: "written",
      opt3: "writing",
      answer: "written",
    },
    {
      ask: "Identify the adverb in the sentence: 'He speaks softly.'",
      opt1: "speaks",
      opt2: "he",
      opt3: "softly",
      answer: "softly",
    },
    {
      ask: "Which word is a preposition?",
      opt1: "with",
      opt2: "walk",
      opt3: "happy",
      answer: "with",
    },
    {
      ask: "What is the comparative form of 'far'?",
      opt1: "farer",
      opt2: "further",
      opt3: "farther",
      answer: "farther",
    },
    {
      ask: "Choose the correct indefinite article:",
      opt1: "a",
      opt2: "an",
      opt3: "the",
      answer: "a",
    },
  ];

  const rightAnswers = questions.map((answers) => answers.answer);
  console.log("these are the answer : ", rightAnswers);

  const comparative = (a, b) => {
    a == b && arrAnswers.includes(a) == false
      ? setArrAnswers([...arrAnswers, a])
      : setArrarrWrong([...arrWrong, a]);
  };

  const plus = () => {
    setScore(arrAnswers.length);
    Swal.fire({
      title: "Are you sure you want to save your answers?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Youre score is: " + arrAnswers.length + "/30");
        setResult("no-show");
        setNum("answer");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const sumar = (n) => {
    n += 1;
  };

  return (
    <div className="test-body">
      <Bar />
      <br />
      <h1 className="text-xl font-semibold">Ubication test</h1>
      <form action="" className="test-answer">
        {score == 0
          ? questions.map((value) => (
              <div key={value.ask}>
                <div className={answer}>
                  <h2>{value.ask}</h2>
                  <br />
                  <RadioGroup defaultValue="medium" name="radio-buttons-group">
                    <Radio
                      color="danger"
                      orientation="horizontal"
                      size="md"
                      variant="outlined"
                      label={value.opt1}
                      value={value.opt1}
                      onChange={(e) =>
                        comparative(e.target.value, value.answer)
                      }
                    />
                    <Radio
                      color="danger"
                      orientation="horizontal"
                      size="md"
                      variant="outlined"
                      label={value.opt2}
                      value={value.opt2}
                      onChange={(e) =>
                        comparative(e.target.value, value.answer)
                      }
                    />
                    <Radio
                      color="danger"
                      orientation="horizontal"
                      size="md"
                      variant="outlined"
                      label={value.opt3}
                      value={value.opt3}
                      onChange={(e) =>
                        comparative(e.target.value, value.answer)
                      }
                    />
                  </RadioGroup>
                </div>
                <div className={answerTwo}>
                  <Radio defaultChecked color="success" />
                </div>
              </div>
            ))
          : questions.map((value, index) => (
              <div key={value.ask}>
                <div
                  className={
                    arrAnswers.includes(rightAnswers[index]) ? "ok" : "wrong"
                  }
                >
                  <h2 onBlur={sumar(index)}>{value.ask}</h2>
                  <br />
                  <RadioGroup defaultValue="medium" name="radio-buttons-group">
                    <Radio
                      color="danger"
                      orientation="horizontal"
                      size="md"
                      variant="outlined"
                      label={value.opt1}
                      value={value.opt1}
                    />
                    <Radio
                      color="danger"
                      orientation="horizontal"
                      size="md"
                      variant="outlined"
                      label={value.opt2}
                      value={value.opt2}
                    />
                    <Radio
                      color="danger"
                      orientation="horizontal"
                      size="md"
                      variant="outlined"
                      label={value.opt3}
                      value={value.opt3}
                    />
                  </RadioGroup>
                </div>
                <div
                  className={
                    arrAnswers.includes(rightAnswers[index])
                      ? "no-show"
                      : "show-answer"
                  }
                >
                  <Radio label={value.answer} defaultChecked color="success" />
                </div>
              </div>
            ))}
      </form>

      <div className="text-center mt-6">
        <div className={result}>
          <button
            className="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={plus}
          >
            save answers
          </button>
        </div>
        <div className={num}>
          <section className="bg-gray-200 p-4 rounded-lg">
            <p className="text-lg font-semibold text-gray-800">
              Your level is: 4
            </p>
            <p className="text-base text-gray-600 mt-2">
              We recommend starting at this level. Explore the following
              options:
            </p>
            <ul className="list-disc list-inside mt-2">
            <p className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'><Link to='/'>Go to home</Link></p><br />
              <Link to='/'>Take a lesson</Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LevelTest;
