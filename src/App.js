import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  Award,
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const roleText = "Senior Undergraduate in Computer Science & IT";
  const skills = [
    { name: 'HTML', icon: '</>', color: 'text-orange-500' },
    { name: 'CSS', icon: '</>', color: 'text-blue-500' },
    { name: 'Bootstrap', icon: 'B', color: 'text-purple-500' },
    { name: 'JavaScript', icon: 'JS', color: 'text-yellow-500' },
    { name: 'Java', icon: 'J', color: 'text-red-500' },
    { name: 'Python', icon: 'Py', color: 'text-blue-400' }
  ];

  const education = [
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

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/tarun-inti-/', // Replace with your actual LinkedIn URL
      color: 'bg-blue-600 hover:bg-blue-700' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/Coder-Tarun01', // Replace with your actual GitHub URL
      color: 'bg-gray-800 hover:bg-gray-900' 
    },
    { 
      name: 'YouTube', 
      icon: ExternalLink, 
      url: '#', // Keep as # if you don't have a YouTube channel
      color: 'bg-red-600 hover:bg-red-700' 
    }
  ];

  // Typewriter effect for role
  useEffect(() => {
    if (currentRoleIndex < roleText.length) {
      const timer = setTimeout(() => {
        setCurrentRoleIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentRoleIndex]);

  // Scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(prev => ({ ...prev, [el.id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsVisible]); // Added setIsVisible as dependency

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-sm bg-black/30 border-b border-purple-500/20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            ITSK
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8"
          >
            {['Home', 'Education', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Inti Tarun
                  </span>
                  <br />
                  <span className="text-white">Sai Kumar</span>
                </h1>
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="text-xl md:text-2xl text-gray-300 font-light">
                  I would love to work in a challenging environment where I can utilize and upskill myself with the latest tech stacks in Software field.
                </div>
                
                <div className="text-2xl md:text-3xl font-mono text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                  {roleText.slice(0, currentRoleIndex)}
                  <span className="animate-pulse">|</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                {['React', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm font-medium backdrop-blur-sm hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1 backdrop-blur-sm">
                  <img
                    src="https://res.cloudinary.com/dwuci0dhj/image/upload/v1743230902/WhatsApp_Image_2025-03-29_at_12.16.44_5a22fc1e_c3w81i.jpg"
                    alt="Inti Tarun Sai Kumar"
                    className="w-full h-full rounded-full object-cover border-4 border-transparent bg-gradient-to-br from-purple-500/30 to-cyan-500/30"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 blur-xl animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
              <p className="text-xl text-gray-400">My academic journey</p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-cyan-500/50"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  id={`edu-${index}`}
                  data-animate
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isVisible[`edu-${index}`] ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg mr-3 text-purple-400">
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-purple-400 font-medium">{edu.grade}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <p className="text-cyan-400 text-sm">{edu.year}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-black z-10 shadow-lg shadow-purple-500/50"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-xl text-gray-400">Technologies I work with</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 text-center cursor-pointer">
                    <div className={`text-4xl font-bold mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Contact Me
                </span>
              </h2>
              <p className="text-xl text-gray-400">Let's work together</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg text-purple-400">
                        <Code className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Inti Tarun Sai Kumar</p>
                        <p className="text-gray-400 text-sm">Senior Undergraduate</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg text-purple-400">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white">+91 9848151735</p>
                        <p className="text-gray-400 text-sm">Phone</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg text-purple-400">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white">tarunsaikumarinti3@gmail.com</p>
                        <p className="text-gray-400 text-sm">Email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
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
                        className={`flex items-center space-x-4 w-full p-4 ${social.color} bg-opacity-90 hover:bg-opacity-100 rounded-lg transition-all duration-300 group`}
                      >
                        <div className="p-2 bg-black bg-opacity-30 rounded-lg">
                          <social.icon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold">{social.name}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              © 2025 Inti Tarun Sai Kumar. Computer Science & Information Technology.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;