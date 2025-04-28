import { Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { LINKEDIN_URL, GITHUB_URL, EMAIL, personalInfo } from '../data/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sai Charan Balde</h3>
            <p className="text-gray-400 mb-4">
              A passionate B.Tech student and software developer focused on creating innovative solutions to real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a 
                href={`mailto:${EMAIL}`} 
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  About Me
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="education"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Education
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="certifications"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Certifications
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-primary-400 mr-2 mt-1 flex-shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-gray-400">Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-primary-400 mr-2 mt-1 flex-shrink-0">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-primary-400 mr-2 mt-1 flex-shrink-0">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href={personalInfo.resumeUrl} 
                className="button-primary inline-flex items-center"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Sai Charan Balde. All rights reserved. Made with 
            <Heart size={16} className="inline text-red-500 mx-1" /> 
            using React & TypeScript.
          </p>
          
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <ScrollLink
              to="hero"
              smooth={true}
              duration={800}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full cursor-pointer transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;