import { Education, Certification, ProjectData, Skill } from '../types';

// Social Links
export const LINKEDIN_URL = 'https://www.linkedin.com/in/saicharan-balde-07bb59266/';
export const GITHUB_URL = 'https://github.com/Saicharanbalde01';
export const EMAIL = 'saicharan.balde@example.com'; // Replace with actual email

// Resume data
export const personalInfo = {
  name: 'Sai Charan Balde',
  title: 'B.Tech Student & Software Developer',
  description: 'A passionate software developer and B.Tech student specializing in full-stack development with expertise in Java, Python, and JavaScript. Currently pursuing my degree with a focus on building efficient and scalable applications.',
  photo: '/charan.jpg', // Placeholder image
  resumeUrl: '/resume.pdf', // Path to your resume PDF
};

// Skills data
export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Java', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'C++', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'HTML5', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Tailwind CSS', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      { name: 'Git', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Docker', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'MongoDB', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'AWS', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    ],
  },
];

// Project data
export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Smart Home Automation System',
    description: 'Developed an IoT-based smart home automation system using Arduino and Raspberry Pi. The system allows users to control home appliances remotely via a mobile application.',
    image: 'https://images.pexels.com/photos/4731094/pexels-photo-4731094.jpeg',
    tags: ['IoT', 'Arduino', 'Raspberry Pi', 'Mobile App', 'Python'],
    githubUrl: `${GITHUB_URL}/smart-home-automation`,
    demoUrl: '',
  },
  {
    id: 2,
    title: 'Machine Learning Model for Disease Prediction',
    description: 'Implemented a machine learning model to predict the likelihood of chronic diseases based on patient data. Achieved 92% accuracy using a combination of Decision Trees and Random Forest algorithms.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Data Analysis', 'Healthcare'],
    githubUrl: `${GITHUB_URL}/disease-prediction-model`,
    demoUrl: '',
  },
  {
    id: 3,
    title: 'E-commerce Web Application',
    description: 'Built a full-stack e-commerce web application with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'RESTful API'],
    githubUrl: `${GITHUB_URL}/ecommerce-webapp`,
    demoUrl: 'https://ecommerce-webapp-demo.netlify.app',
  },
  {
    id: 4,
    title: 'Student Management System',
    description: 'Developed a student management system for universities to handle student records, course registrations, and academic performance tracking.',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'RESTful API'],
    githubUrl: `${GITHUB_URL}/student-management-system`,
    demoUrl: '',
  },
];

// Education data
export const education: Education[] = [
  {
    id: 1,
    institution: 'Lovely proffesional  University of Technology',
    degree: 'Bachelor of Technology in Computer Science',
    duration: '2021 - 2025 (Expected)',
    description: 'Pursuing a B.Tech degree with specialization in Artificial Intelligence and Machine Learning. Currently maintaining a 9.2 CGPA.',
    courses: ['Data Structures and Algorithms', 'Database Management Systems', 'Operating Systems', 'Machine Learning', 'Web Development'],
  },
  {
    id: 2,
    institution: 'Sri Chaitanya Junior College',
    degree: 'Higher Secondary Education (12th Grade)',
    duration: '2019 - 2021',
    description: 'Completed higher secondary education with 95% marks in PCM (Physics, Chemistry, Mathematics) stream.',
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
  {
    id: 3,
    institution: 'ZPHS High School',
    degree: 'Secondary Education (10th Grade)',
    duration: '2018 - 2019',
    description: 'Completed secondary education with 92% marks.',
    courses: ['Mathematics', 'Science', 'English', 'Social Studies', 'Computer Applications'],
  },
];

// Certification data
export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    organization: 'Coursera (Stanford University)',
    date: 'January 2023',
    description: 'Completed a comprehensive specialization in machine learning covering supervised learning, unsupervised learning, and best practices in ML.',
    url: 'https://www.coursera.org/specializations/machine-learning-introduction',
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    organization: 'Udemy',
    date: 'July 2022',
    description: 'Completed a full stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    url: 'https://www.udemy.com',
  },
  {
    id: 3,
    title: 'AWS Certified Developer - Associate',
    organization: 'Amazon Web Services',
    date: 'March 2023',
    description: 'Earned the AWS Certified Developer Associate certification demonstrating proficiency in developing and maintaining applications on the AWS platform.',
    url: 'https://aws.amazon.com/certification/certified-developer-associate/',
  },
  {
    id: 4,
    title: 'Python for Data Science and Machine Learning',
    organization: 'DataCamp',
    date: 'November 2022',
    description: 'Mastered the use of Python for data analysis, visualization, and building machine learning models.',
    url: 'https://www.datacamp.com',
  },
];
