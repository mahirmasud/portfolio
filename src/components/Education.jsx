import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/education</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Academic <span className="text-neon-blue">Background</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        {/* Education Card */}
        <div className={`card-glass p-10 rounded-xl border border-border-glow hover:border-neon-blue transition-all duration-500 group ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-6">
            <div className="flex items-start gap-6">
              <div className="p-5 rounded-xl bg-neon-blue/10 border border-neon-blue/30 group-hover:bg-neon-blue/20 transition-all duration-300">
                <GraduationCap className="w-12 h-12 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-soft-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  BSc in Computer Science & Engineering
                </h4>
                <p className="text-neon-blue text-lg font-mono mb-2">
                  University of Information Technology and Sciences
                </p>
                <p className="text-gray-blue">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Period Badge */}
            <div className="flex items-center gap-2 px-6 py-3 bg-cyber-green/10 border border-cyber-green/30 rounded-lg w-fit">
              <Calendar className="w-5 h-5 text-cyber-green" />
              <span className="font-mono text-cyber-green">2022 – 2026</span>
            </div>
          </div>

          {/* CGPA */}
          <div className="mb-8 p-6 bg-border-glow rounded-lg border border-neon-blue/20 hover:border-neon-blue transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-blue mb-1 font-mono text-sm">Current CGPA</p>
                <p className="text-4xl font-bold text-neon-blue">3.45 <span className="text-2xl text-gray-blue">/ 4.00</span></p>
              </div>
              <div className="p-4 rounded-lg bg-neon-blue/10">
                <Award className="w-10 h-10 text-neon-blue" />
              </div>
            </div>
          </div>

          {/* Key Coursework */}
          <div>
            <h5 className="font-mono text-cyber-green mb-4 flex items-center gap-2">
              <span className="text-neon-blue">{'>'}</span> Relevant Coursework
            </h5>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Data Structures & Algorithms',
                'Computer Networks',
                'Database Management Systems',
                'Software Engineering',
                'Artificial Intelligence',
                'Machine Learning',
                'Cybersecurity Fundamentals',
                'Web Technologies',
                'Operating Systems',
                'Computer Architecture'
              ].map((course, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-blue group-hover/item:w-2 group-hover/item:h-2 transition-all duration-300"></div>
                  <span className="text-gray-blue group-hover/item:text-soft-white transition-colors duration-300">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-neon-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Education;