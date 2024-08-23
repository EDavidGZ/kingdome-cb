// Import React and Tailwind CSS
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SecondActivity from "./activities/SecondActivity";
import ThirdActivty from "./activities/ThirdActivty";

const tenses = [
  {
    tense: "1. Simple Future Tense",
    about:
      "The simple future tense expresses actions that will happen in the future, decisions made at the moment of speaking, and predictions.",
    use1: 'Future actions: "She will travel to France next month."',
    use2: 'Decisions at the moment: "I will have the salad."',
    use3: 'Predictions: "It will rain tomorrow."',
    positive: "He will read books.",
    negative: "She will not read books.",
    question: "Will they play soccer?",
    mistake1: "Confusing future with other tenses like present continuous for plans.",
    mistake2: 'Incorrectly using "will" for scheduled events: "The train will arrive at 3 PM" (incorrect) vs "The train arrives at 3 PM" (correct for schedules).',
  },
  {
    tense: "2. Future Continuous Tense",
    about:
      "The future continuous tense indicates actions that will be happening at a specific moment in the future, actions that will be in progress, or future plans.",
    use1: 'Actions in progress at a future time: "She will be watching TV at 8 PM."',
    use2: 'Future plans: "They will be staying with us next month."',
    use3: 'Polite inquiries about future plans: "Will you be joining us for dinner?"',
    positive: "He will be eating lunch.",
    negative: "She will not be listening to music.",
    question: "Will they be sleeping?",
    mistake1: "Using simple future instead of future continuous to indicate actions in progress.",
    mistake2: 'Incorrect use for fixed plans: "I will be meeting them tomorrow" (when it should be "I am meeting them tomorrow" for fixed plans).',
  },
  {
    tense: "3. Future Perfect Tense",
    about:
      "The future perfect tense connects future actions to a specific point in the future, indicating that an action will be completed before a certain time.",
    use1: 'Actions completed before a future time: "She will have finished her homework by 7 PM."',
    use2: 'Predictions about completed actions: "By next year, they will have moved to a new city."',
    use3: 'Expectations: "I will have graduated by then."',
    positive: "They will have lived here for five years.",
    negative: "She will not have seen that movie.",
    question: "Will you have visited Paris?",
    mistake1: "Using simple future instead of future perfect when specifying completion before a future time.",
    mistake2: 'Incorrectly using "will have" for ongoing actions: "I will have been living here for five years" (should be "I will have lived here for five years").',
  },
  {
    tense: "4. Future Perfect Continuous Tense",
    about:
      "The future perfect continuous tense indicates actions that will have been in progress for a certain duration by a specific future time.",
    use1: 'Actions continuing up to a future point: "She will have been waiting for two hours by 3 PM."',
    use2: 'Indicating duration: "By next month, they will have been working on the project for a year."',
    use3: 'Expectations: "I will have been studying for three hours by the time you arrive."',
    positive: "They will have been working hard.",
    negative: "He will not have been studying.",
    question: "Will you have been sleeping?",
    mistake1: "Confusing future perfect continuous with future perfect.",
    mistake2: 'Incorrect use for actions that are not ongoing: "I will have known him" (correct) vs "I will have been knowing him" (incorrect).',
  },
];

const ThirdPage = () => {
  
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

        <ThirdActivty />

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
            <Link to={"/tensetest-firstbook"}>  Next topic</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
