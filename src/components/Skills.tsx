
import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = {
    languages: ['C', 'C++', 'JavaScript'],
    frameworks: ['Bootstrap', 'Tailwind', 'React.js', 'Express.js', 'Three.js', 'GSAP'],
    platforms: ['GitHub', 'Vercel'],
    databases: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma'],
    design: ['Figma', 'AdobeXD', 'Framer']
  };

  const allSkills = Object.values(skillCategories).flat();
  const displaySkills = activeCategory === 'all' ? allSkills : skillCategories[activeCategory] || [];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'languages', 'frameworks', 'platforms', 'databases', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {displaySkills.map((skill, index) => (
            <div
              key={skill}
              className="bg-gray-800 px-6 py-3 rounded-full border border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-gray-300 hover:text-white transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
