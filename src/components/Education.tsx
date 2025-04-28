import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data/data';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education</h2>
          <div className="section-title-line"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6">
            My academic journey has provided me with a strong foundation in computer science and software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800 rounded-full"></div>
          
          {education.map((item, index) => (
            <motion.div 
              key={item.id}
              className="animate-on-scroll mb-12 md:mb-0"
              variants={itemVariants}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:gap-8`}>
                {/* Dot on timeline for desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary-500 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Date */}
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-6 md:mb-0`}>
                  <div className="flex items-center bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full">
                    <Calendar size={18} className="mr-2" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <GraduationCap size={24} className="text-primary-600 dark:text-primary-400 mr-3" />
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      {item.institution}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Key Courses:</h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-2"></span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;