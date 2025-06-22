
import React from 'react';
import { Code, Trophy } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <Code size={24} />,
      title: '💻 Freelance Web Developer',
      description: 'Built multiple responsive UIs and fullstack apps using React, Node.js, and MongoDB.',
      period: 'Ongoing'
    },
    {
      icon: <Trophy size={24} />,
      title: '🏆 Hackathon Developer',
      description: 'Built rapid prototypes in 24–48 hour sprints, collaborating on creative, intuitive solutions with full-stack technologies.',
      period: 'Multiple Events'
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="text-purple-400">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">{exp.description}</p>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
