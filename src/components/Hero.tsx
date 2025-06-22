
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold">
              BP
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in">
          Hey, I'm Bhanu 👋
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 animate-fade-in delay-300">
          Crafting Functional, Intuitive & Beautiful Web Experiences
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in delay-500">
          Full-stack developer | Passionate problem-solver | Hackathon enthusiast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in delay-700">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            View Projects <ArrowRight size={20} />
          </button>
          <button className="border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            Let's Connect
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in delay-1000">
          <a href="mailto:bhanudahiya8@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com/in/bhanupratap1" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/bhanudahiyaa" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
