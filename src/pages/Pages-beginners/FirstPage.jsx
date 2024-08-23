// Import React and Tailwind CSS
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PuzzleGame from "./activities/PuzzleGame";

const tenses = [
  {
    tense: "1. Simple Present Tense",
    about:
      "The simple present tense expresses actions that happen regularly, facts, general truths, or scheduled events.",
    use1: "Habitual actions: 'She drinks coffee every morning.'",
    use2: "General truths: 'The sun rises in the east.'",
    use3: "Scheduled events: 'The train arrives at 3 PM.'",
    positive: "He reads books.",
    negative: "She does not read books",
    question: "Do they play soccer?",
    mistake1: "Confusing present continuous with simple present.",
    mistake2:
      'Incorrect use of continuous forms for general likes: "I am loving it" (incorrect) vs "I love it" (correct)..',
  },
  {
    tense: "2. Present Continuous Tense",
    about:
      "The present continuous tense indicates actions happening at or around the moment of speaking, temporary actions, or future arrangements.",
    use1: 'Actions happening now: "She is watching TV."',
    use2: 'Temporary actions: "They are staying with us this month."',
    use3: 'Future arrangements: "We are meeting them tomorrow."',
    positive: "He is eating lunch",
    negative: "She is not listening to music.",
    question: '"Are they sleeping?"',
    mistake1: "Confusing present continuous with simple present.",
    mistake2:
      'Incorrect use of continuous forms for general likes: "I am loving it" (incorrect) vs "I love it" (correct)..',
  },
  {
    tense: "3. Present Perfect Tense",
    about:
      "The present perfect tense connects past actions or experiences to the present moment.",
    use1: 'Actions completed recently or in an indefinite past: "She has finished her homework."',
    use2: "Actions with present relevance:",
    use3: ' "I have lost my keys."',
    positive: '"They have lived here for five years."',
    negative: '"She has not seen that movie."',
    question: '"Have you visited Paris?"',
    mistake1:
      "Using simple past instead of present perfect when there's a connection to the present:",
    mistake2:
      '"I saw him yesterday" (incorrect). (Correct: "I have seen him yesterday" when emphasizing the relevance to the present.).',
  },
  {
    tense: "4. Present Perfect Continuous Tense",
    about:
      "The present perfect continuous tense indicates actions that started in the past, continue into the present, and may continue into the future.",
    use1: "Actions that began  ",
    use2: "in the past and continue:",
    use3: ' "She has been waiting for an hour."',
    positive: '"They have been working hard."',
    negative: '"He has not been studying."',
    question: '"Have you been sleeping?"',
    mistake1: "Confusing present perfect continuous with present perfect:",
    mistake2:
      '"I have known him" (correct) vs I have been knowing him" (incorrect).',
  },
];

const FirstPage = () => {
  const navigate = useNavigate();

  const navigateTo = (goTo) => {
    navigate(goTo);
  };
  // Import React and Tailwind CSS

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Mastering English Present Tenses
        </h1>

        {/* Section 1: Simple Present Tense */}
        {tenses.map((tense) => (
          <div
            key={tense.tense}
            className="bg-white p-6 rounded-lg shadow-xl mb-6"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">
              {tense.tense}
            </h2>
            <p className="mb-4">{tense.about}</p>

            {/* Uses */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                Uses:
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>{tense.use1}</li>
                <li>{tense.use2}</li>
                <li>{tense.use3}</li>
              </ul>
            </div>

            {/* Examples */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                Examples:
              </h3>
              <p>
                Positive:{" "}
                <span className="text-green-500">{tense.positive}</span>
              </p>
              <p>
                Negative: <span className="text-red-500">{tense.negative}</span>
              </p>
              <p>
                Question:{" "}
                <span className="text-purple-500">{tense.question}</span>
              </p>
            </div>

            {/* Common Mistakes */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                Common Mistakes:
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>{tense.mistake1}</li>
                <li>{tense.mistake2}</li>
              </ul>
            </div>
          </div>
        ))}

        {/* Additional Tips */}
        <div className="bg-white p-6 rounded-lg shadow-xl mb-6">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Additional Tips
          </h2>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Time Expressions: Use adverbs and time expressions to clarify when
              actions occur (e.g., "always", "every day", "since", "for",
              "recently").
            </li>
            <li>
              Usage Nuances: Understand the specific contexts each tense is used
              in to convey precise meanings.
            </li>
            <li>
              Practice: Practice forming and using each tense to become more
              comfortable and accurate in your English communication.
            </li>
          </ul>
        </div>

        <PuzzleGame />

        {/* Call to Action */}
        <div className="text-center mt-6">
          <p className="text-2xl">
            Ready to master English present tenses? Explore more!
          </p>
         
          {/* <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300" style={{ margin: "1rem" }}>
            <Link to={"/tensetest"}>Previos topic</Link>
          </button> */}
          <button
            className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300" style={{ margin: "1rem" }}>
            <Link to={"/tensetest-firstbook"}>Get Started</Link>
          </button>
          <button
            className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300" style={{ margin: "1rem" }}>
            <Link to={"/secondpage-firstbook"}>  Next topic</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
