import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mahirmasud1@gmail.com',
      link: 'mailto:mahirmasud1@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/mahirmasud',
      link: 'https://github.com/mahirmasud',
      color: 'cyber-green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mahirmasud',
      link: 'https://www.linkedin.com/in/mohammed-masud-chowdhury-mahir/',
      color: 'neon-blue'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/contact</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Get In <span className="text-neon-blue">Touch</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="card-glass p-8 rounded-xl border border-border-glow">
              <h4 className="text-2xl font-bold text-soft-white mb-6">
                Let's Connect
              </h4>
              <p className="text-gray-blue leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target={method.label !== 'Email' ? '_blank' : undefined}
                      rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 p-4 bg-border-glow rounded-lg border border-transparent hover:border-${method.color} transition-all duration-300 group`}
                    >
                      <div className={`p-3 rounded-lg bg-${method.color}/10 border border-${method.color}/30 group-hover:bg-${method.color}/20 transition-all duration-300`}>
                        <Icon className={`w-6 h-6 text-${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-blue text-sm font-mono mb-1">{method.label}</div>
                        <div className={`text-soft-white group-hover:text-${method.color} transition-colors duration-300 break-all`}>
                          {method.value}
                        </div>
                      </div>
                      <Send className={`w-5 h-5 text-gray-blue group-hover:text-${method.color} group-hover:translate-x-1 transition-all duration-300`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div className="card-glass p-6 rounded-xl border border-border-glow hover:border-cyber-green transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-cyber-green/10 border border-cyber-green/30">
                  <MapPin className="w-6 h-6 text-cyber-green" />
                </div>
                <div>
                  <div className="text-gray-blue text-sm font-mono mb-1">Location</div>
                  <div className="text-soft-white">Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="card-glass p-10 rounded-xl border border-border-glow hover:border-neon-blue transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-center">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-cyber-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-block p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/30 mb-6">
                    <Send className="w-12 h-12 text-neon-blue" />
                  </div>
                  <h4 className="text-3xl font-bold text-soft-white mb-4">
                    Have a project in mind?
                  </h4>
                  <p className="text-gray-blue leading-relaxed mb-8">
                    Whether it's AI research, cybersecurity consulting, or software development - I'd love to hear about your ideas and explore how we can work together.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-border-glow rounded-lg">
                    <div className="text-2xl font-bold text-neon-blue mb-1">24h</div>
                    <div className="text-gray-blue text-sm">Response Time</div>
                  </div>
                  <div className="p-4 bg-border-glow rounded-lg">
                    <div className="text-2xl font-bold text-cyber-green mb-1">100%</div>
                    <div className="text-gray-blue text-sm">Availability</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="mailto:mahirmasud1@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-cyber-green text-navy-black font-bold rounded-lg hover:shadow-xl hover:shadow-neon-blue/50 transition-all duration-300 group/btn w-full justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Send Me an Email
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyber-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-10 border-t border-border-glow transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <p className="text-gray-blue font-mono mb-4">
              Designed & Built by <span className="text-neon-blue">Masud</span>
            </p>
            <p className="text-gray-blue text-sm">
              Portfolio © 2026 Masud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;