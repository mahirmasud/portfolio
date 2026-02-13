import React, { useEffect, useRef, useState } from 'react';
import { Brain, Shield, Globe, Database, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Projects');
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

  const filters = ['All Projects', 'AI Research', 'Cybersecurity', 'AI', 'Web'];

  const projects = [
    {
      title: 'Social Engineering Defense AI (SED-AI)',
      description: 'Offline RAG assistant for phishing and social engineering defense training',
      technologies: ['FAISS', 'Sentence Transformers', 'Gemma LLM', 'Ollama', 'Gradio'],
      Link: '',
      features: [
        'Vector database with FAISS',
        'PDF citations & ethical safety guardrails',
        'Real-time chatbot interface'
      ],
      categories: ['Cybersecurity', 'AI'],
      icon: Shield,
      color: 'neon-blue'
    },
    {
      title: 'BDTour-LLM',
      description: 'Fine-tuned travel guidance AI for Bangladesh tourism',
      technologies: ['LoRA', 'Unsloth', 'LLM Fine-tuning'],
      Link: '',
      features: [
        'LoRA + Unsloth optimization',
        'Curated and pre-processed a localized dataset of tourism on niche regional queries for fine-tuning',
        'Bangladesh-specific travel recommendations'
      ],
      categories: ['AI Research', 'AI'],
      icon: Brain,
      color: 'cyber-green'
    },
    {
      title: 'AI Summarizer',
      description: 'T5 abstractive summarization on CNN/DailyMail dataset',
      technologies: ['T5', 'HuggingFace', 'PyTorch'],
      Link: 'https://huggingface.co/spaces/mahirmasud/Summarizer',
      features: [
        'Abstractive text summarization',
        'ROUGE evaluation metrics',
        'Beam search inference'
      ],
      categories: ['AI Research', 'AI'],
      icon: Brain,
      color: 'neon-blue'
    },
    {
      title: 'AmarBangla-whisper',
      description: 'Bengali dialect ASR system with high accuracy',
      technologies: ['Whisper', 'ASR', 'Bengali NLP'],
      Link: 'https://huggingface.co/mahirmasud/AmarBangla-whisper',
      features: [
        'Bengali dialect recognition',
        'Levenshtein similarity score: 0.88573',
        'Real-time transcription'
      ],
      categories: ['AI Research', 'AI'],
      icon: Brain,
      color: 'cyber-green'
    },
    {
      title: 'VOROSHA Web App',
      description: 'Django blood donation management system with secure authentication',
      technologies: ['Django', 'REST API', 'PostgreSQL', 'Bootstrap'],
      Link: 'https://github.com/mahirmasud/Vorosha_app',
      features: [
        'Secure authentication system',
        'REST API implementation',
        'Responsive UI design'
      ],
      categories: ['Cybersecurity', 'Web'],
      icon: Globe,
      color: 'neon-blue'
    }
  ];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`min-h-screen py-20 px-6 transition-opacity duration-700 ${
        isVisible ? 'section-visible' : 'section-dim'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono text-cyber-green text-sm mb-2">/projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
            Featured <span className="text-neon-blue">Work</span>
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-cyber-green rounded"></div>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-neon-blue to-cyber-green text-navy-black font-semibold shadow-lg'
                  : 'bg-dark-slate text-gray-blue border border-border-glow hover:border-neon-blue hover:text-neon-blue'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`card-glass p-8 rounded-xl border border-border-glow hover:border-${project.color} transition-all duration-500 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-lg bg-${project.color}/10 border border-${project.color}/30 group-hover:bg-${project.color}/20 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 text-${project.color}`} />
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.Link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-border-glow hover:bg-${project.color}/20 border border-transparent hover:border-${project.color} transition-all duration-300`}
                      >
                      <ExternalLink className={`w-5 h-5 text-gray-blue hover:text-${project.color} transition-colors`} />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-2xl font-bold text-soft-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-gray-blue mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 group/item">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${project.color} group-hover/item:w-2 group-hover/item:h-2 transition-all duration-300`}></div>
                      <span className="text-gray-blue group-hover/item:text-soft-white transition-colors duration-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 bg-border-glow rounded-full text-xs font-mono text-gray-blue hover:text-${project.color} hover:bg-${project.color}/10 border border-transparent hover:border-${project.color}/30 transition-all duration-300 cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-${project.color}/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Database className="w-16 h-16 text-gray-blue mx-auto mb-4 opacity-50" />
            <p className="text-gray-blue text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;