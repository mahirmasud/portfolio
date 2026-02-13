import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      name: 'Certified Web App Penetration Testing Apprentice (kWAPTA)',
      issuer: 'Knghtsquad Academy',
      date: 'Jan 2026',
      verificationLink: 'https://credential.knightsquad.academy/KSA-XC97YPLU2601',
      color: 'neon-blue'
    },
    {
      name: 'Certified Network Security Practitioner (CNSP)',
      issuer: 'The Secops Group',
      date: 'Aug 2025',
      verificationLink: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXVM4V1mhxTSFNFlXgLx56fVg9h55Kk4CHdkWjF+g/pnnxPhyCjv9rDNcfapQDKjUy24r/zFLTAOAPlJecC3Bunc=',
      color: 'cyber-green'
    }
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/certifications</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Professional <span className="text-neon-blue">Credentials</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`card-glass p-8 rounded-xl border border-border-glow hover:border-${cert.color} transition-all duration-500 group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Certificate Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-lg bg-${cert.color}/10 border border-${cert.color}/30 group-hover:bg-${cert.color}/20 transition-all duration-300`}>
                  <Award className={`w-10 h-10 text-${cert.color}`} />
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-${cert.color}/10 border border-${cert.color}/30`}>
                  <CheckCircle className={`w-4 h-4 text-${cert.color}`} />
                  <span className={`text-${cert.color} font-mono text-xs`}>Verified</span>
                </div>
              </div>

              {/* Certificate Name */}
              <h4 className="text-xl font-bold text-soft-white mb-2 leading-tight group-hover:text-neon-blue transition-colors duration-300">
                {cert.name}
              </h4>

              {/* Issuer */}
              <p className="text-gray-blue mb-4 font-mono text-sm">
                Issued by: <span className={`text-${cert.color}`}>{cert.issuer}</span>
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 mb-6 text-gray-blue">
                <div className={`w-2 h-2 rounded-full bg-${cert.color} animate-pulse`}></div>
                <span className="font-mono text-sm">{cert.date}</span>
              </div>

              {/* Verification Button */}
              <a
                href={cert.verificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-${cert.color} to-${cert.color === 'neon-blue' ? 'cyber-green' : 'neon-blue'} text-navy-black font-semibold rounded-lg hover:shadow-xl hover:shadow-${cert.color}/50 transition-all duration-300 group/btn`}
              >
                Verify Certificate
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              {/* Corner accents */}
              <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-${cert.color}/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;