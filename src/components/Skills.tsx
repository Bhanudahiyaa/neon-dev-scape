
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const frontendTools = [
    { name: 'TypeScript', icon: 'TS', color: 'bg-blue-600' },
    { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-500' },
    { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
    { name: 'Next.js', icon: 'N', color: 'bg-white text-black' }
  ];

  const backendTools = [
    { name: 'Node.js', icon: '📗', color: 'bg-green-600' },
    { name: 'Python', icon: '🐍', color: 'bg-blue-500' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-700' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={skillsRef} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-300 mb-8 tracking-wide">
            TOOLS IM USING.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Frontend Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-semibold text-gray-400 mb-8">Frontend</h3>
            <div className="grid grid-cols-2 gap-6">
              {frontendTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`transition-all duration-700 delay-${500 + index * 100} ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="group cursor-pointer">
                    <div className={`w-16 h-16 ${tool.color} rounded-lg flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg mb-3`}>
                      {tool.icon}
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {tool.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-semibold text-gray-400 mb-8">Backend</h3>
            <div className="grid grid-cols-2 gap-6">
              {backendTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`transition-all duration-700 delay-${700 + index * 100} ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="group cursor-pointer">
                    <div className={`w-16 h-16 ${tool.color} rounded-lg flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg mb-3`}>
                      {tool.icon}
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {tool.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['Docker', 'AWS', 'Git', 'Figma', 'Tailwind CSS', 'GraphQL'].map((skill, index) => (
              <span
                key={skill}
                className={`px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 hover:text-white transition-all duration-300 cursor-default delay-${1200 + index * 100} ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
