import { motion } from 'framer-motion';
import { skills } from '../data/data';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeInOut", delay: 0.3 }
    })
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <div className="section-title-line"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6">
            As a B.Tech student focusing on software development, I've developed proficiency in various programming languages, frameworks, and tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {skills.map((skillCategory, index) => (
            <motion.div 
              key={index} 
              className="animate-on-scroll"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-gray-800 dark:text-gray-200">
                {skillCategory.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={itemVariants}
                  >
                    <div className="flex items-center mb-4">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-10 h-10 mr-4"
                      />
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>
                    
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-400 rounded-full"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;