
import React from 'react';
import { Code, Monitor, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web solutions using modern technologies like React, Node.js, and cloud platforms.',
      tools: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      icon: <Monitor size={32} />,
      title: 'Portfolio Website Creation',
      description: 'Custom portfolio websites that showcase your work with stunning designs and smooth animations.',
      tools: ['React', 'Tailwind', 'Three.js', 'GSAP']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Custom Web App Solutions',
      description: 'Tailored web applications built to solve specific business needs with scalable architecture.',
      tools: ['JavaScript', 'PostgreSQL', 'Vercel', 'Figma']
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-purple-400 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
