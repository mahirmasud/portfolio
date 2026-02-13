import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/about</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            About <span className="text-neon-blue">Me</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="card-glass p-8 rounded-xl border border-border-glow hover:border-neon-blue transition-all duration-300">
              <p className="text-gray-blue text-lg leading-relaxed mb-6">
                  Hi, I’m Masud a 
                   cybersecurity enthuasist and 
                   AI researcher passionate about building intelligent systems that are as secure as they are innovative. 
                    I focus on bridging the gap between cutting-edge AI development and robust digital defense, ensuring that the technology of tomorrow is built on a foundation of trust.
                    Every project I tackle from fine-tuning high-performance LLMs to 
                performing deep-dive vulnerability assessments reflects my dedication to combining analytical precision with 
               ethical engineering to deliver digital solutions that are powerful, resilient, and safe for everyone to use.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="card-glass p-4 rounded-lg text-center border border-border-glow hover:border-cyber-green transition-all duration-300">
                <div className="text-3xl font-bold text-cyber-green mb-1">5+</div>
                <div className="text-gray-blue text-sm font-mono">Projects</div>
              </div>
              <div className="card-glass p-4 rounded-lg text-center border border-border-glow hover:border-neon-blue transition-all duration-300">
                <div className="text-3xl font-bold text-neon-blue mb-1">10+</div>
                <div className="text-gray-blue text-sm font-mono">CTF Wins</div>
              </div>
              <div className="card-glass p-4 rounded-lg text-center border border-border-glow hover:border-cyber-green transition-all duration-300">
                <div className="text-3xl font-bold text-cyber-green mb-1">2+</div>
                <div className="text-gray-blue text-sm font-mono">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right: Profile Image with Hover Effect */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative group">
              {/* Glowing border container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-cyber-green rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image container with color reveal effect */}
              <div 
                ref={imageRef}
                onMouseMove={handleMouseMove}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '1/1' }}
              >
                {/* Color base image (bottom layer) */}
                <img
                  src="/assets/masud.png"
                  alt="Mahir Profile Color"
                  className="w-full h-full object-cover absolute inset-0"
                />
                
                {/* Grayscale overlay with cursor-based cutout */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, black 100%)`,
                    maskImage: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, black 100%)`,
                  }}
                >
                  <img
                    src="/assets/masud.png"
                    alt="Mahir Profile Grayscale"
                    className="w-full h-full object-cover filter grayscale"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-blue pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-green pointer-events-none"></div>
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-navy-black/90 px-4 py-2 rounded-full border border-cyber-green">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                <span className="text-cyber-green font-mono text-sm">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;