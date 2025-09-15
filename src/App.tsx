import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Briefcase,
  Award,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

// Define types
interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
}

interface Internship {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const App = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const roleText = "Senior Undergraduate in Computer Science & IT";

  const skills: Skill[] = [
    { name: 'HTML', icon: '</>', color: 'text-orange-500' },
    { name: 'CSS', icon: '</>', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'JS', color: 'text-yellow-500' },
    { name: 'Java', icon: 'J', color: 'text-red-500' },
    { name: 'Node.js', icon: 'Node', color: 'text-green-500' },
    { name: 'React', icon: 'React', color: 'text-cyan-400' },
    { name: 'MongoDB', icon: 'DB', color: 'text-green-400' }
  ];

  const education: Education[] = [
    {
      degree: 'B.Tech in IT',
      institution: 'Kakinada Institute of Technological Sciences',
      year: '2021 - 2025',
      grade: '67%',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      year: '2019 - 2021',
      grade: '89%',
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: 'Secondary School',
      institution: 'SSPV Zilla Parishad High School',
      year: '2019',
      grade: 'CGPA: 9.7',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const projects: Project[] = [
    {
      title: "Detection of Fake Online Reviews Using Supervised and Semi-Supervised Learning Techniques",
      description: "This project aims to identify fake or misleading online reviews by using machine learning techniques. It uses both labeled (supervised) and partially labeled (semi-supervised) data to train models that can recognize patterns in genuine and fake reviews. The goal is to improve trust in online platforms by filtering out dishonest feedback.",
      technologies: ["Machine Learning", "Python", "Scikit-learn", "NLP"],
      status: "Completed"
    },
    {
      title: "Personal Portfolio",
      description: "Developed a responsive and visually appealing personal portfolio website to showcase my skills, projects, and experience. Built using modern web technologies like HTML, CSS, JavaScript, React & TailwindCSS. It serves as an online presence for potential employers and clients to learn more about my work.",
      technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
      status: "Completed"
    },
    {
      title: "AI Copilot UI",
      description: "Currently working on designing and developing a user interface for an AI-powered copilot tool aimed at assisting users with coding and task automation. Focusing on building an intuitive, responsive, and user-centric UI using modern frontend technologies. UI completed, integration of API key is not done and connected with MongoDB Atlas and also connected with backend server using Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "AI Integration"],
      status: "In Progress"
    }
  ];

  const internships: Internship[] = [
    {
      role: "Software Intern",
      company: "Tanasvi Technologies Pvt Limited",
      location: "IT SEZ, Vizag",
      period: "July 2025 - Present",
      description: [
        "Currently working as a Software Intern at Tanasvi Technologies, a growing startup based in Vizag.",
        "Actively involved in real-world projects, contributing to the development and maintenance of web-based applications.",
        "This role has provided hands-on experience with modern development tools and frameworks, while also enhancing my skills in problem-solving, collaboration, and project execution.",
        "Continuously learning and adapting to new technologies in a dynamic work environment."
      ]
    }
  ];

// SEO Meta Tags
useEffect(() => {
  document.title = "Inti Tarun Sai Kumar | Computer Science Student & Developer";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", "Computer Science student specializing in React, Node.js, and MongoDB. Currently interning at Tanasvi Technologies. View my projects, skills, and experience.");
  } else {
    const meta = document.createElement('meta');
    meta.name = "description";
    meta.content = "Computer Science student specializing in React, Node.js, and MongoDB. Currently interning at Tanasvi Technologies. View my projects, skills, and experience.";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }

  // Open Graph / Social Media Meta Tags
  // Fixed: Using setAttribute instead of direct property assignment to avoid TypeScript errors
  
  // OG Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", "Inti Tarun Sai Kumar | Computer Science Student & Developer");
  } else {
    const meta = document.createElement('meta');
    meta.setAttribute("property", "og:title");
    meta.setAttribute("content", "Inti Tarun Sai Kumar | Computer Science Student & Developer");
    document.getElementsByTagName('head')[0].appendChild(meta);
  }

  // OG Description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute("content", "Computer Science student specializing in React, Node.js, and MongoDB. Currently interning at Tanasvi Technologies. View my projects, skills, and experience.");
  } else {
    const meta = document.createElement('meta');
    meta.setAttribute("property", "og:description");
    meta.setAttribute("content", "Computer Science student specializing in React, Node.js, and MongoDB. Currently interning at Tanasvi Technologies. View my projects, skills, and experience.");
    document.getElementsByTagName('head')[0].appendChild(meta);
  }

  // OG Image
  let ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute("content", "https://res.cloudinary.com/dwuci0dhj/image/upload/v1757913373/IMG20250905201701_x0cgwh.jpg");
  } else {
    const meta = document.createElement('meta');
    meta.setAttribute("property", "og:image");
    meta.setAttribute("content", "https://res.cloudinary.com/dwuci0dhj/image/upload/v1757913373/IMG20250905201701_x0cgwh.jpg");
    document.getElementsByTagName('head')[0].appendChild(meta);
  }

  // OG URL
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", window.location.href);
  } else {
    const meta = document.createElement('meta');
    meta.setAttribute("property", "og:url");
    meta.setAttribute("content", window.location.href);
    document.getElementsByTagName('head')[0].appendChild(meta);
  }

  // Twitter Card
  const twitterCard = document.querySelector('meta[name="twitter:card"]');
  if (!twitterCard) {
    const meta = document.createElement('meta');
    meta.name = "twitter:card";
    meta.content = "summary_large_image";
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
}, []);

  // Typewriter effect for role
  useEffect(() => {
    if (currentRoleIndex < roleText.length) {
      const timer = setTimeout(() => {
        setCurrentRoleIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentRoleIndex]);

  // Scroll reveal effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'internship', 'projects', 'skills', 'contact'];
      
      // Track active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Scroll reveal animation
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          const id = el.id;
          if (id) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Fixed: Use type-safe easing (cubic bezier) to avoid TS errors
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const // ✅ Proper easing (standard easeOut)
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const // ✅ Type-safe easing
      }
    }
  };

  // Mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Inti Tarun Sai Kumar",
          "url": window.location.href,
          "image": "https://res.cloudinary.com/dwuci0dhj/image/upload/v1757913373/IMG20250905201701_x0cgwh.jpg",
          "jobTitle": "Computer Science Student & Developer",
          "description": "Computer Science student specializing in React, Node.js, and MongoDB. Currently interning at Tanasvi Technologies.",
          "sameAs": [
            "https://linkedin.com/in/tarun-inti-",
            "https://github.com/Coder-Tarun01"
          ]
        })}
      </script>

      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-50 backdrop-blur-sm bg-black/30 border-b border-purple-500/20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            ITSK
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-6 lg:space-x-8"
          >
            {['Home', 'Education', 'Internship', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className={`text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group ${
                  activeSection === item.toLowerCase() ? 'text-white' : ''
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'w-full' : ''
                }`}></span>
              </a>
            ))}
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-purple-500/20 z-40"
            >
              <div className="flex flex-col p-4 space-y-4">
                {['Home', 'Education', 'Internship', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }}
                    className={`py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 font-medium ${
                      activeSection === item.toLowerCase() ? 'text-white bg-gray-800/50' : ''
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-24 md:pt-28">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 md:space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Inti Tarun
                  </span>
                  <br />
                  <span className="text-white">Sai Kumar</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
                  I would love to work in a challenging environment where I can utilize and upskill myself with the latest tech stacks in Software field.
                </div>

                <div className="text-xl md:text-2xl lg:text-3xl font-mono text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                  {roleText.slice(0, currentRoleIndex)}
                  <span className="animate-pulse ml-1">|</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4 pt-4">
                {['React', 'Node.js', 'MongoDB', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-3 md:px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1 backdrop-blur-sm">
                  <img
                    src="https://res.cloudinary.com/dwuci0dhj/image/upload/v1757913373/IMG20250905201701_x0cgwh.jpg"
                    alt="Inti Tarun Sai Kumar - Computer Science Student & Developer"
                    className="w-full h-full rounded-full object-cover border-4 border-transparent"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 blur-xl animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400">My academic journey</p>
            </motion.div>

            <div className="relative">
              <div className="hidden md:block absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-cyan-500/50"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  id={`edu-${index}`}
                  data-animate
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isVisible[`edu-${index}`] ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`relative flex flex-col md:flex-row items-center mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-6 md:mb-0`}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg mr-3 text-purple-400">
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-purple-400 font-medium">{edu.grade}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2 text-sm md:text-base">{edu.institution}</p>
                      <p className="text-cyan-400 text-xs md:text-sm">{edu.year}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-black z-10 shadow-lg shadow-purple-500/50 md:mt-0"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Section */}
        <section id="internship" className="py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Internship
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400">My professional experience</p>
            </motion.div>

            <div className="grid gap-6 md:gap-8">
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{internship.role}</h3>
                      <p className="text-purple-400 text-lg font-medium">{internship.company}</p>
                      <p className="text-cyan-400 text-sm md:text-base">{internship.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 rounded-full text-sm font-medium">
                        {internship.period}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    {internship.description.map((desc, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm md:text-base">{desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400">My recent work and creations</p>
            </motion.div>

            <div className="grid gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">{project.title}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === "Completed" 
                        ? "bg-green-600/20 text-green-300" 
                        : "bg-yellow-600/20 text-yellow-300"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 rounded-full text-xs md:text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400">Technologies I work with</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 text-center cursor-pointer">
                    <div className={`text-3xl md:text-4xl font-bold mb-2 md:mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Contact Me
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400">Let's work together</p>
            </motion.div>

            {/* Flex Layout for Equal Height */}
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
              {/* Left: Two Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 space-y-6 md:space-y-8"
              >
                {/* Get In Touch Card */}
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/20">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Get In Touch</h3>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg text-purple-400">
                        <Code className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm md:text-base">Inti Tarun Sai Kumar</p>
                        <p className="text-gray-400 text-xs md:text-sm">Senior Undergraduate</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg text-purple-400">
                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <a href="tel:+919848151735" className="text-white hover:text-purple-300 transition-colors text-sm md:text-base">
                          +91 9848151735
                        </a>
                        <p className="text-gray-400 text-xs md:text-sm">Phone</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg text-purple-400">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <a href="mailto:tarunsaikumarinti3@gmail.com" className="text-white hover:text-purple-300 transition-colors text-sm md:text-base">
                          tarunsaikumarinti3@gmail.com
                        </a>
                        <p className="text-gray-400 text-xs md:text-sm">Email</p>
                      </div>
                    </div>

                    {/* Resume Button */}
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Inti_Tarun_Sai_Kumar_Resume.pdf';
                        link.download = 'Inti_Tarun_Sai_Kumar_Resume.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="w-full mt-4 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl focus:outline-none text-sm md:text-base"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 5a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Download Resume
                    </button>
                  </div>
                </div>

                {/* Connect With Me */}
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/20">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Connect With Me</h3>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        name: 'LinkedIn',
                        icon: Linkedin,
                        url: 'https://linkedin.com/in/tarun-inti-',
                        color: 'bg-blue-600 hover:bg-blue-700'
                      },
                      {
                        name: 'GitHub',
                        icon: Github,
                        url: 'https://github.com/Coder-Tarun01',
                        color: 'bg-gray-800 hover:bg-gray-900'
                      },
                      {
                        name: 'YouTube',
                        icon: ExternalLink,
                        url: '#',
                        color: 'bg-red-600 hover:bg-red-700'
                      }
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center space-x-3 md:space-x-4 w-full p-3 md:p-4 ${social.color} bg-opacity-90 hover:bg-opacity-100 rounded-lg transition-all duration-300 group`}
                      >
                        <div className="p-2 bg-black bg-opacity-30 rounded-lg">
                          <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <span className="font-semibold text-sm md:text-base">{social.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Form with Min-Height Matching */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <motion.form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                      name: { value: string };
                      email: { value: string };
                      message: { value: string };
                    };

                    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'my-gmail';
                    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_0l91yev';
                    const userID = process.env.REACT_APP_EMAILJS_USER_ID || 'npo32uzCifNY6jjWJ';

                    const templateParams = {
                      name: target.name.value,
                      email: target.email.value,
                      message: target.message.value,
                      time: new Date().toLocaleString()
                    };

                    import('emailjs-com').then((emailjs) => {
                      emailjs
                        .send(serviceID, templateID, templateParams, userID)
                        .then(() => {
                          alert('✅ Thanks! I’ll get back to you soon.');
                          (e.target as HTMLFormElement).reset();
                        })
                        .catch((err) => {
                          console.error('EmailJS Error:', err);
                          alert('❌ Failed to send. Please try again or email me directly.');
                        });
                    });
                  }}
                  className="w-full bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-purple-500/20 flex flex-col"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Send Me a Message</h3>
                    <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">I’d love to hear from you. Fill out the form below.</p>
                  </div>

                  <div className="space-y-4 md:space-y-6 flex-1">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 text-sm md:text-base">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 text-sm md:text-base"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 text-sm md:text-base">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 text-sm md:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2 text-sm md:text-base">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none text-sm md:text-base"
                        placeholder="Tell me about your project, opportunity, or collaboration idea..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 text-sm md:text-base"
                  >
                    Send Message
                  </button>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 Inti Tarun Sai Kumar. Computer Science & Information Technology.
            </p>
          </div>
        </footer>
        
        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 p-2 md:p-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110 focus:outline-none z-40"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default App;