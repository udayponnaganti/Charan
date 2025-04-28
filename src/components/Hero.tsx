import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo, GITHUB_URL, LINKEDIN_URL } from '../data/data';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4"
    >
      <motion.div 
        className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={item}
        >
          <motion.p
            className="text-primary-600 dark:text-primary-400 font-medium mb-4"
            variants={item}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={item}
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6"
            variants={item}
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
            variants={item}
          >
            {personalInfo.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4"
            variants={item}
          >
            <a 
              href={personalInfo.resumeUrl} 
              className="button-primary flex items-center gap-2"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              Download Resume
            </a>
            
            <a 
              href={GITHUB_URL} 
              className="button-outline flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>
            
            <a 
              href={LINKEDIN_URL} 
              className="button-secondary flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
        
        {/* Profile Image */}
        <motion.div 
          className="flex-1 flex justify-center"
          variants={item}
        >
          <div className="relative rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-primary-300 dark:border-primary-700 shadow-xl">
            <motion.img 
              src={personalInfo.photo}
              alt="Sai Charan Balde"
              className="object-cover w-full h-full"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-primary-800/30 dark:from-primary-600/20 dark:to-primary-900/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Down Button */}
      <motion.div 
        className="mt-20 md:mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center cursor-pointer text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;