import React, { useEffect, useRef, useState } from 'react';
import { Code, Shield, Database, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'C/C++', 'Bash', 'PHP'],
      color: 'neon-blue'
    },
    {
      icon: Database,
      title: 'Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Django', 'FastAPI'],
      color: 'cyber-green'
    },
    {
      icon: Shield,
      title: 'Security Tools',
      skills: ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit'],
      color: 'neon-blue'
    },
    {
      icon: Wrench,
      title: 'Methodologies',
      skills: ['OWASP Top 10', 'Penetration Testing', 'Vulnerability Assessment'],
      color: 'cyber-green'
    },
    {
      icon: BookOpen,
      title: 'Libraries',
      skills: ['NumPy', 'Pandas', 'Scikit-learn', 'HuggingFace Transformers'],
      color: 'neon-blue'
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/skills</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Technical <span className="text-neon-blue">Arsenal</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`card-glass p-6 rounded-xl border border-border-glow hover:border-${category.color} transition-all duration-500 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/30 group-hover:border-${category.color} transition-all duration-300`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-soft-white">{category.title}</h4>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 group/item"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-${category.color} group-hover/item:w-3 transition-all duration-300`}></div>
                      <span className="text-gray-blue group-hover/item:text-soft-white transition-colors duration-300 font-mono text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-${category.color}/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Tech Stack */}
        <div className={`mt-12 card-glass p-8 rounded-xl border border-border-glow transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h4 className="font-mono text-neon-blue mb-4 flex items-center gap-2">
            <span className="text-cyber-green">{'>'}</span> Additional Tools & Technologies
          </h4>
          <div className="flex flex-wrap gap-3">
            {['Docker', 'Git', 'Github', 'Linux', 'SQL'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-border-glow rounded-lg text-gray-blue hover:text-neon-blue hover:bg-neon-blue/10 border border-transparent hover:border-neon-blue transition-all duration-300 font-mono text-sm cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;