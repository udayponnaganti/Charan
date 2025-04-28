import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/data';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Certifications</h2>
          <div className="section-title-line"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6">
            I'm constantly learning and improving my skills through various courses and certifications. Here are some of the certifications I've earned.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500 dark:border-primary-400"
              variants={itemVariants}
            >
              <div className="flex items-start mb-4">
                <Award size={28} className="text-primary-600 dark:text-primary-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{cert.organization}</span> • {cert.date}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {cert.description}
              </p>
              
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                <span>View Certificate</span>
                <ExternalLink size={16} className="ml-1" />
              </a>
              
              {/* Badge/Seal animation */}
              <div className="flex justify-end">
                <motion.div
                  className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800/50 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-200 dark:bg-primary-700/50 rounded-full flex items-center justify-center">
                      <span className="text-primary-800 dark:text-primary-200 text-xs font-bold">CERT</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;