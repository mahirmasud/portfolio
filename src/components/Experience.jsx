import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Award, Users } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      role: 'Senior Executive & Trainer',
      organization: 'UITS Computer Club, Dhaka',
      period: 'Apr 2024 – Present',
      responsibilities: [
        'Lead cybersecurity training sessions + mentor students in CTF',
        'Conduct workshops on networking + threat detection + web security',
        'Organizer of: UITS Skillathon CTF 2025',
        'Organizer of: UITS Hacked 101 CTF',
        'Organizer of: UITS Winter CTF Junior'
      ],
      icon: Briefcase
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Professional <span className="text-neon-blue">Journey</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-cyber-green to-neon-blue hidden md:block"></div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-neon-blue border-4 border-navy-black hidden md:block z-10 animate-pulse"></div>

                {/* Content card */}
                <div className="md:ml-20 card-glass p-8 rounded-xl border border-border-glow hover:border-neon-blue transition-all duration-500 group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-neon-blue/10 border border-neon-blue/30 group-hover:bg-neon-blue/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-neon-blue" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-soft-white mb-1">{exp.role}</h4>
                        <p className="text-neon-blue font-mono text-sm">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-sm text-cyber-green bg-cyber-green/10 px-4 py-2 rounded-lg border border-cyber-green/30 w-fit">
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                      {exp.period}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-green group-hover/item:w-2 group-hover/item:h-2 transition-all duration-300"></div>
                        <p className="text-gray-blue group-hover/item:text-soft-white transition-colors duration-300 leading-relaxed">
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements badge */}
                  <div className="mt-6 pt-6 border-t border-border-glow">
                    <div className="flex items-center gap-2 text-neon-blue">
                      <Award className="w-5 h-5" />
                      <span className="font-mono text-sm">Key Organizer of 3+ CTF Competitions</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-neon-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills developed */}
        <div className={`mt-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="card-glass p-8 rounded-xl border border-border-glow">
            <h4 className="font-mono text-cyber-green mb-6 flex items-center gap-2 text-lg">
              <Users className="w-5 h-5" />
              Leadership & Technical Skills Developed
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'CTF Challenge Design & Deployment',
                'Student Mentorship & Training',
                'Workshop Facilitation',
                'Community Building',
                'Event Management',
                'Technical Documentation'
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-cyber-green"></div>
                  <span className="text-gray-blue group-hover:text-soft-white transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;