import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from '../data/data';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send the form data to a server
    console.log({ name, email, message });
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

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
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-title-line"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6">
            Feel free to reach out if you have any questions or if you're interested in collaborating on a project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div 
            className="animate-on-scroll bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href={`mailto:${EMAIL}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <a 
                  href={LINKEDIN_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-700 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                
                <a 
                  href={GITHUB_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-700 p-3 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="mt-12 relative">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary-100 dark:bg-secondary-900/20 rounded-full opacity-50"></div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="animate-on-scroll"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your message here..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="button-primary w-full flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? (
                  <span>Message Sent ✓</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 dark:text-green-400 font-medium mt-2"
                >
                  Thanks for your message! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;