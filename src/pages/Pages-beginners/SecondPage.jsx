// Import React and Tailwind CSS
import React from "react";
import { Link } from "react-router-dom";
import SecondActivity from "./activities/SecondActivity";

const tenses = [
  {
    tense: "1. Simple Past Tense",
    about:
      "The simple past tense expresses actions that happened at a specific time in the past.",
    use1: 'Completed actions: "She drank coffee yesterday morning."',
    use2: 'Specific time in the past: "They visited Paris last year."',
    use3: 'Series of completed actions: "He finished work, walked to the park, and found a bench to sit on."',
    positive: "He read books.",
    negative: "She did not read books.",
    question: "Did they play soccer?",
    mistake1: "Using past continuous instead of simple past.",
    mistake2:
      'Incorrect verb forms: "I goed to the store" (incorrect) vs "I went to the store" (correct).',
  },
  {
    tense: "2. Past Continuous Tense",
    about:
      "The past continuous tense indicates actions that were ongoing at a specific moment in the past.",
    use1: 'Actions in progress at a specific time: "She was watching TV at 8 PM."',
    use2: 'Background actions in a story: "They were staying with us when the incident happened."',
    use3: 'Interrupted actions: "I was reading when he called."',
    positive: "He was eating lunch.",
    negative: "She was not listening to music.",
    question: "Were they sleeping?",
    mistake1: "Using simple past instead of past continuous.",
    mistake2:
      'Incorrect usage of continuous forms: "I was loving it" (incorrect) vs "I loved it" (correct).',
  },
  {
    tense: "3. Past Perfect Tense",
    about:
      "The past perfect tense describes actions that were completed before another action in the past.",
    use1: 'Actions completed before another past action: "She had finished her homework before she went out."',
    use2: 'Past actions with relevance to another past event: "I had lost my keys before I found them under the couch."',
    use3: 'Experience up to a point in the past: "They had never seen such a beautiful sunset until that day."',
    positive: "They had lived here before moving to the city.",
    negative: "She had not seen that movie before last night.",
    question: "Had you visited Paris before 2010?",
    mistake1: "Using simple past instead of past perfect for earlier past actions.",
    mistake2:
      '"I saw him before you arrived" (incorrect) vs "I had seen him before you arrived" (correct).',
  },
  {
    tense: "4. Past Perfect Continuous Tense",
    about:
      "The past perfect continuous tense indicates actions that were ongoing up until a specific moment in the past.",
    use1: 'Actions that started in the past and continued up to another point in the past: "She had been waiting for an hour when he finally arrived."',
    use2: 'Duration of an activity before another past action: "They had been working hard before the project was completed."',
    use3: 'Cause of a past event: "He was tired because he had been running."',
    positive: "They had been working hard.",
    negative: "He had not been studying.",
    question: "Had you been sleeping?",
    mistake1: "Confusing past perfect continuous with past perfect.",
    mistake2:
      '"I had known him" (correct) vs "I had been knowing him" (incorrect).',
  },
];

const SecondPage = () => {

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

        <SecondActivity />

        {/* Call to Action */}
        <div className="text-center mt-6">
          <p className="text-2xl">
            Ready to master English present tenses? Explore more!
          </p>
         
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300" style={{ margin: "1rem" }}>
            <Link to={"/firstpage-firstbook"}>Previos topic</Link>
          </button>
          <button
            className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300" style={{ margin: "1rem" }}>
            <Link to={"/SecondActivity-firstbook"}>Get Started</Link>
          </button>
          <button
            className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300" style={{ margin: "1rem" }}>
            <Link to={"/thirdpage-firstbook"}>  Next topic</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
