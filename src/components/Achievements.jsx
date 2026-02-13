import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      title: 'Hackify FEST CTF 2025',
      position: 'Champion',
      icon: Trophy,
      color: 'cyber-green',
      rank: '🥇'
    },
    {
      title: 'UITS Winter CTF 2024',
      position: '1st Runner-up',
      icon: Medal,
      color: 'neon-blue',
      rank: '🥈'
    },
    {
      title: 'UITS Next Gen Leadership CTF 2024',
      position: '1st Runner-up',
      icon: Medal,
      color: 'neon-blue',
      rank: '🥈'
    },
    {
      title: 'UITS Idea Contest 2024',
      position: '1st Runner-up',
      icon: Award,
      color: 'neon-blue',
      rank: '🥈'
    }
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/achievements</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Competitive <span className="text-neon-blue">Success</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`card-glass p-8 rounded-xl border border-border-glow hover:border-${achievement.color} transition-all duration-500 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-lg bg-${achievement.color}/10 border border-${achievement.color}/30 group-hover:bg-${achievement.color}/20 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 text-${achievement.color}`} />
                  </div>
                  <div className="text-4xl">{achievement.rank}</div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-soft-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {achievement.title}
                </h4>

                {/* Position Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${achievement.color} to-${achievement.color === 'cyber-green' ? 'neon-blue' : 'cyber-green'} rounded-lg`}>
                  <Star className="w-4 h-4 text-navy-black" />
                  <span className="font-bold text-navy-black">{achievement.position}</span>
                </div>

                {/* Corner accents */}
                <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-${achievement.color}/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className={`mt-12 grid md:grid-cols-4 gap-6 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="card-glass p-6 rounded-lg border border-border-glow hover:border-cyber-green transition-all duration-300 text-center">
            <Trophy className="w-10 h-10 text-cyber-green mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyber-green mb-1">1</div>
            <div className="text-gray-blue text-sm font-mono">Championship</div>
          </div>
          <div className="card-glass p-6 rounded-lg border border-border-glow hover:border-neon-blue transition-all duration-300 text-center">
            <Medal className="w-10 h-10 text-neon-blue mx-auto mb-3" />
            <div className="text-3xl font-bold text-neon-blue mb-1">3</div>
            <div className="text-gray-blue text-sm font-mono">Runner-up Positions</div>
          </div>
          <div className="card-glass p-6 rounded-lg border border-border-glow hover:border-cyber-green transition-all duration-300 text-center">
            <Award className="w-10 h-10 text-cyber-green mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyber-green mb-1">4</div>
            <div className="text-gray-blue text-sm font-mono">Total Awards</div>
          </div>
          <div className="card-glass p-6 rounded-lg border border-border-glow hover:border-neon-blue transition-all duration-300 text-center">
            <Star className="w-10 h-10 text-neon-blue mx-auto mb-3" />
            <div className="text-3xl font-bold text-neon-blue mb-1">2024-25</div>
            <div className="text-gray-blue text-sm font-mono">Competition Years</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;