
import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LedgerIQ – Personal Finance Tracker',
      description: 'Built with React, Firebase Auth, Firestore, Chart.js, and Ant Design. Includes CSV import/export, real-time updates, and visual analytics.',
      technologies: ['React', 'Firebase', 'Chart.js', 'Ant Design'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'The Cultural Hub – AR Shopping Experience',
      description: 'Immersive AR-based web solution using AR.js, Vantara, and WebXR. Empowers local vendors by enabling customers to view native goods in their real-world surroundings.',
      technologies: ['AR.js', 'WebXR', 'Three.js', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">💻</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    🔗 View Live <ArrowRight size={16} />
                  </a>
                  <a href={project.githubUrl} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
