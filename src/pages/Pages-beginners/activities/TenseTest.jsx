import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const TenseTest = () => {
  // State to track user answers
  const [answers, setAnswers] = useState(new Array(15).fill(''));

  // Sample questions and correct answers
  const questions = [
    {
      id: 1,
      question: 'Which tense is used for actions happening now?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Present Continuous'
    },
    {
      id: 2,
      question: 'Which sentence is in the Simple Present tense?',
      options: [
        'She has been studying for two hours.',
        'He is eating lunch right now.',
        'They go to school every day.',
        'We have visited Paris last year.'
      ],
      answer: 'They go to school every day.'
    },
    {
      id: 3,
      question: 'When do we use the Present Perfect tense?',
      options: [
        'For actions happening at the moment.',
        'For future arrangements.',
        'For actions completed recently or with present relevance.',
        'For actions that started in the past and continue into the present.'
      ],
      answer: 'For actions completed recently or with present relevance.'
    },
    {
      id: 4,
      question: 'Which tense connects past actions to the present moment?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Present Perfect'
    },
    {
      id: 5,
      question: 'Which tense indicates actions that started in the past and continue into the present?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Present Perfect Continuous'
    },
    {
      id: 6,
      question: 'Which sentence is in the Present Perfect Continuous tense?',
      options: [
        'She has finished her homework.',
        'They have been working for three hours.',
        'He goes to the gym every morning.',
        'I eat lunch at noon.'
      ],
      answer: 'They have been working for three hours.'
    },
    {
      id: 7,
      question: 'Which tense is used for general truths?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Simple Present'
    },
    {
      id: 8,
      question: 'Which sentence is in the Present Continuous tense?',
      options: [
        'She reads books every day.',
        'They have lived here for five years.',
        'He is playing football right now.',
        'I have seen that movie.'
      ],
      answer: 'He is playing football right now.'
    },
    {
      id: 9,
      question: 'Which tense is used for scheduled events?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Simple Present'
    },
    {
      id: 10,
      question: 'Which sentence is in the Simple Present tense?',
      options: [
        'She has been waiting for an hour.',
        'They are staying with us this month.',
        'The train arrives at 3 PM.',
        'I have lost my keys.'
      ],
      answer: 'The train arrives at 3 PM.'
    },
    {
      id: 11,
      question: 'Which tense indicates actions happening now?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Present Continuous'
    },
    {
      id: 12,
      question: 'Which sentence is in the Present Perfect tense?',
      options: [
        'She is watching TV.',
        'They have lived here for five years.',
        'He goes to bed early.',
        'I eat lunch at noon every day.'
      ],
      answer: 'They have lived here for five years.'
    },
    {
      id: 13,
      question: 'Which tense is used for actions completed recently or with present relevance?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Present Perfect'
    },
    {
      id: 14,
      question: 'Which sentence is in the Present Perfect Continuous tense?',
      options: [
        'She has finished her homework.',
        'They have been working for three hours.',
        'He goes to the gym every morning.',
        'I eat lunch at noon.'
      ],
      answer: 'They have been working for three hours.'
    },
    {
      id: 15,
      question: 'Which tense indicates actions that started in the past and continue into the present?',
      options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous'],
      answer: 'Present Perfect Continuous'
    }
  ];

  // Function to handle user's answer selection
  const handleAnswerSelection = (questionId, selectedAnswer) => {
    const newAnswers = [...answers];
    newAnswers[questionId - 1] = selectedAnswer;
    setAnswers(newAnswers);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          English Tense Quiz
        </h1>

        {/* Render questions */}
        {questions.map((question) => (
          <div key={question.id} className="bg-white p-6 rounded-lg shadow-xl mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{question.id}. {question.question}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {question.options.map((option, index) => (
                <li key={index} className="cursor-pointer">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={option}
                      checked={answers[question.id - 1] === option}
                      onChange={() => handleAnswerSelection(question.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Submit button */}
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
            Submit Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenseTest;
