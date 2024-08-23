import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const topics = [
  {
    title: 'Simple Present Tense',
    description: 'Learn about actions that happen regularly, facts, general truths, or scheduled events.',
    link: '/firstpage-firstbook'
  },
  {
    title: 'Present Continuous Tense',
    description: 'Understand actions happening now, temporary actions, or future arrangements.',
    link: '/secondpage-firstbook'
  },
  {
    title: 'Present Perfect Tense',
    description: 'Connect past actions or experiences to the present moment.',
    link: '/thirdpage-firstbook'
  },
  {
    title: 'Present Perfect Continuous Tense',
    description: 'Explore actions that started in the past and continue into the present.',
    link: '#'
  }
];

const TopicCard = ({ title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 mb-4">{description}</p>
    <Link to={link} className="text-blue-500 hover:underline">Learn More</Link>
  </div>
);

const Topics = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Language Learning Hub</h2>
          <p className="text-xl mb-8">Explore various topics and enhance your language skills with our comprehensive guides.</p>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Explore Our Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <TopicCard key={index} title={topic.title} description={topic.description} link={topic.link} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">We are dedicated to providing comprehensive resources for language learners of all levels. Our mission is to make learning languages accessible, engaging, and effective.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">Have questions or need assistance? Reach out to us, and we’ll be happy to help you with your language learning journey.</p>
          <div className="flex justify-center">
            <a href="mailto:support@example.com" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Email Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          &copy; 2024 KINGDOM-CB. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Topics;
