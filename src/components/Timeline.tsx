
import React, { useEffect, useRef, useState } from 'react';

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);

  const timelineItems = [
    { id: 1, title: 'Ideation', description: 'Conceptualizing innovative solutions' },
    { id: 2, title: 'Research', description: 'Deep diving into market analysis' },
    { id: 3, title: 'Development', description: 'Building robust applications' },
    { id: 4, title: 'Testing', description: 'Ensuring quality and performance' },
    { id: 5, title: 'Launch', description: 'Delivering successful products' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, itemId]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const items = document.querySelectorAll('[data-item-id]');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate how much of the timeline is visible
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleHeight = Math.min(visibleTop, elementHeight);
      const progress = Math.min(visibleHeight / elementHeight, 1);
      
      setLineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Journey
        </h2>
        
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 rounded-full">
            <div 
              ref={lineRef}
              className="w-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${lineProgress * 100}%` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                data-item-id={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div 
                    className={`w-6 h-6 rounded-full border-4 border-gray-900 transition-all duration-700 ${
                      visibleItems.has(item.id) 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-100' 
                        : 'bg-gray-700 scale-75'
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div 
                  className={`w-5/12 transition-all duration-700 ease-out ${
                    visibleItems.has(item.id)
                      ? 'opacity-100 translate-x-0'
                      : index % 2 === 0
                        ? 'opacity-0 -translate-x-16'
                        : 'opacity-0 translate-x-16'
                  }`}
                >
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                        {item.id}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
