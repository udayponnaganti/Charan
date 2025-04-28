import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay: 0.2 
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
          variants={fadeIn}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-title-line"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and animation */}
          <motion.div 
            className="animate-on-scroll flex justify-center"
            variants={photoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-lg transform rotate-3 scale-105"></div>
              <img 
                src={personalInfo.photo} 
                alt="About me" 
                className="relative z-10 rounded-lg shadow-xl h-[400px] w-full object-cover"
              />
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-400 dark:bg-secondary-600 rounded-full z-0"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div 
                className="absolute -top-6 -left-6 w-16 h-16 bg-primary-300 dark:bg-primary-700 rounded-full z-0"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              />
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div 
            className="animate-on-scroll text-center lg:text-left"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              B.Tech Student & Aspiring Software Developer
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I am a passionate B.Tech student specializing in Computer Science, currently in my third year of studies. My journey in technology started with a fascination for problem-solving and has evolved into a deep love for creating efficient, user-friendly software solutions.
              </p>
              
              <p>
                With a strong foundation in programming languages like Java, Python, and JavaScript, I enjoy taking on challenging projects that push me to learn and grow. I'm particularly interested in web development, machine learning, and building systems that make a positive impact.
              </p>
              
              <p>
                Outside of coding, I enjoy participating in hackathons, contributing to open-source projects, and continuously expanding my knowledge through online courses and certifications. I believe in the power of technology to transform lives and am excited to be part of this ever-evolving field.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400">Education</h4>
                  <p>B.Tech in Computer Science (3rd Year)</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400">Languages</h4>
                  <p>English, Hindi, Telugu</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400">Interests</h4>
                  <p>Web Development, Machine Learning, IoT</p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400">Hobbies</h4>
                  <p>Coding, Reading, Chess, Photography</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;