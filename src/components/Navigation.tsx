
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journey', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set scrolling state
      if (!isScrolling) {
        setIsScrolling(true);
      }

      // Reset scrolling state after scroll ends
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      // Add blur effect during navigation
      setIsScrolling(true);
      document.body.style.transition = 'filter 0.3s ease-out';
      document.body.style.filter = 'blur(2px)';
      
      // Scroll to section
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);

      // Remove blur after scroll animation
      setTimeout(() => {
        document.body.style.filter = 'blur(0px)';
        setTimeout(() => {
          document.body.style.transition = '';
          setIsScrolling(false);
        }, 300);
      }, 500);
    }
  };

  return (
    <>
      {/* Blur overlay during scrolling */}
      <div 
        className={`fixed inset-0 z-40 pointer-events-none transition-all duration-300 ${
          isScrolling 
            ? 'bg-black/20 backdrop-blur-sm' 
            : 'bg-transparent backdrop-blur-none'
        }`}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Bhanu Pratap Singh
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm transition-all duration-300 hover:text-purple-400 hover:scale-105 ${
                    activeSection === item.href.substring(1)
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 py-4 animate-fade-in">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 hover:text-purple-400 hover:bg-gray-700/50 ${
                    activeSection === item.href.substring(1)
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
