import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Mahir_Resume.pdf';
    link.download = 'Mahir_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* System Boot Message */}
        <div className="font-mono text-cyber-green text-sm mb-4 animate-fade-in">
          <span className="text-gray-blue">[SYSTEM]</span> Initializing secure intelligence lab...
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-soft-white mb-2">Hi! I'm</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cyber-green text-glow">
            Mohammed Masud Chowdhury Mahir
          </span>
        </h1>

        {/* Title */}
        <div className="font-mono text-xl md:text-2xl text-neon-blue mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          AI Researcher | Cyber Security Enthusiast
        </div>

        {/* Tagline */}
        <p className="text-gray-blue text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          "Building Secure & Intelligent Systems"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-cyber-green text-navy-black font-semibold rounded-lg hover:shadow-xl hover:shadow-neon-blue/50 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleDownloadResume}
            className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-navy-black transition-all duration-300 flex items-center gap-2 hover-glow"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-cyber-green text-cyber-green font-semibold rounded-lg hover:bg-cyber-green hover:text-navy-black transition-all duration-300 glow-border-green"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a
            href="https://github.com/mahirmasud"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border-glow rounded-lg text-gray-blue hover:text-neon-blue hover:border-neon-blue transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-masud-chowdhury-mahir/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-border-glow rounded-lg text-gray-blue hover:text-neon-blue hover:border-neon-blue transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mahirmasud1@gmail.com"
            className="p-3 border border-border-glow rounded-lg text-gray-blue hover:text-cyber-green hover:border-cyber-green transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-neon-blue rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;