import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import application_icon from './application_icon.png';
import java from './java.png';
import right_arrow from './right-arrow.png';
import SQL from './SQL.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import chronosentinel_img from './projects/chronosentinel.jpg';
import trading_img from './projects/trading.jpg';
import sparkler_img from './projects/sparkler.jpg';
import servicedesk_img from './projects/servicedesk.jpg';
import ieti_img from './projects/ieti.jpg';
import touria_img from './projects/touria.jpg';

export const assets = {
  SQL,
  send_icon,
  chronosentinel_img,
  trading_img,
  sparkler_img,
  servicedesk_img,
  ieti_img,
  touria_img,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  SQL,
  java,
  application_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const personalInfo = {
  name: 'Dinusha Fernando',
  title: 'Associate Software Engineer',
  email: 'dkalharafernando@gmail.com',
  phone: '+94 77 582 9018',
  location: 'Kalpitiya / Colombo, Sri Lanka',
  currentCompany: 'Network Wizard SDN BHD',
  currentRole: 'Associate Software Engineer',
  education: 'Higher National Diploma in Information Technology (HNDIT) - SLIATE (ATI Dehiwala)',
  linkedin: 'https://www.linkedin.com/in/dinusha-fernando-797745265/',
  github: 'https://github.com/Dinusha-Fernando',
};

export const workData = [
  {
    id: 'chronosentinel-ai',
    title: 'ChronoSentinel AI',
    subtitle: 'Domain Risk & Threat Intelligence Platform',
    category: 'web',
    categoryLabel: 'AI & Cybersecurity',
    description: 'AI-driven domain risk intelligence platform for automated threat detection, historical vulnerability analysis, and real-time risk insights.',
    fullDetails: 'Engineered at Network Wizard SDN BHD using React, TypeScript, Python, FastAPI, PostgreSQL, Redis, Docker, Celery, and SQLAlchemy. Integrated security intelligence feeds including Wayback Machine, VirusTotal, and SecurityTrails for deep domain threat analysis and automated risk scoring.',
    bgImage: '/projects/chronosentinel.jpg',
    tags: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'VirusTotal API'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
  {
    id: 'trading-website',
    title: 'Full Stack Trading Platform',
    subtitle: 'Real-Time Financial & Asset Trading',
    category: 'web',
    categoryLabel: 'FinTech Web Platform',
    description: 'A full-stack trading website built with React, Node.js, Express.js, and PostgreSQL with secure authentication and optimized database performance.',
    fullDetails: 'Engineered secure RESTful APIs, JWT role-based authentication, and optimized database queries in PostgreSQL to ensure ultra-low latency transaction handling and seamless user experience.',
    bgImage: '/projects/trading.jpg',
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
  {
    id: 'sparkler-ecommerce',
    title: 'Sparkler E-commerce Platform',
    subtitle: 'Full-Stack Commercial Storefront',
    category: 'web',
    categoryLabel: 'E-Commerce System',
    description: 'Full-stack e-commerce ecosystem with payment gateway integration, product management, order processing, and automated email notifications.',
    fullDetails: 'Delivered an end-to-end e-commerce solution featuring secure checkout, automated order confirmation via email server, inventory management dashboard, and performant backend APIs.',
    bgImage: '/projects/sparkler.jpg',
    tags: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Payment Gateway', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
  {
    id: 'service-desk',
    title: 'Service Desk System',
    subtitle: 'Enterprise Support & Ticket Management',
    category: 'web',
    categoryLabel: 'Enterprise System',
    description: 'Comprehensive support portal with 8 RESTful APIs, relational database integration, and intuitive frontend support workflows.',
    fullDetails: 'Developed 8 resilient RESTful API endpoints, robust database transaction handling, error logging, and responsive frontend views for streamlined issue resolution.',
    bgImage: '/projects/servicedesk.jpg',
    tags: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: false,
  },
  {
    id: 'ieti-website',
    title: 'IETI Institutional Portal',
    subtitle: 'Full-Stack Educational Web Portal',
    category: 'web',
    categoryLabel: 'Full-Stack Web',
    description: 'Full-stack web application with responsive frontend, role-based authentication, dynamic content management, and optimized backend APIs.',
    fullDetails: 'Built with React and Django, featuring role-based access control (RBAC), relational database schemas, dynamic course/event publishing, and high performance.',
    bgImage: '/projects/ieti.jpg',
    tags: ['React', 'Django', 'Python', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: false,
  },
  {
    id: 'touria-app',
    title: 'Touria - Tourism Guide Mobile App',
    subtitle: 'Cross-Platform Mobile Travel Guide',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description: 'Cross-platform mobile tourism guide engineered with Flutter & Firebase featuring interactive destination discovery and cloud sync.',
    fullDetails: 'Developed with Flutter and Dart, utilizing Firebase Authentication, Cloud Firestore, and Google Maps API for localized travel guides and seamless mobile UX.',
    bgImage: '/projects/touria.jpg',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Mobile UI'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
];

export const experienceData = [
  {
    period: '05/2026 – Present',
    role: 'Associate Software Engineer',
    company: 'NETWORK WIZARD SDN BHD',
    location: 'Havelock Town, Colombo',
    type: 'Full-Time Engineering',
    description:
      'Developing automation and cybersecurity solutions using React, TypeScript, Python, FastAPI, PostgreSQL, Redis, Docker, Celery, SQLAlchemy, and REST APIs with secure authentication and scalable backend architecture. Architected ChronoSentinel AI, an AI-driven domain risk intelligence platform integrating security intelligence sources (Wayback Machine, VirusTotal, SecurityTrails) for threat detection and real-time risk insights.',
    skills: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'SQLAlchemy', 'REST APIs'],
    metrics: ['ChronoSentinel AI Lead', 'Threat Intel Pipelines', 'Containerized Deployment'],
  },
  {
    period: '09/2025 – 03/2026',
    role: 'Full Stack Software Engineer Intern',
    company: 'NAITA - Head Office',
    location: 'Sri Lanka',
    type: 'Software Engineering Internship',
    description:
      'Developed RESTful APIs using Django and Python with authentication, role-based access control, and PostgreSQL/SQLite database management. Built and integrated full-stack modules with React, Tailwind CSS, reusable components, testing, and performance optimization.',
    skills: ['Django', 'Python', 'React', 'Tailwind CSS', 'PostgreSQL', 'SQLite', 'REST APIs', 'RBAC Auth'],
    metrics: ['RESTful API Suite', 'Database Optimization', 'Component Architecture'],
  },
];

export const educationData = [
  {
    period: '2023 – Present',
    degree: 'Higher National Diploma in Information Technology (HNDIT)',
    institution: 'SLIATE (ATI Dehiwala)',
    location: 'Dehiwala, Sri Lanka',
    description: 'Specializing in advanced software engineering, data structures, database design, and full-stack development.',
  },
  {
    period: '2022',
    degree: 'GCE Advanced Level (A/L)',
    institution: 'Kal/ Nirmala Matha Sinhala National College',
    location: 'Kalpitiya, Sri Lanka',
    description: 'Completed secondary education with focused studies.',
  },
  {
    period: '2019',
    degree: 'Diploma in English & IT',
    institution: 'Esoft Metro Campus',
    location: 'Chilaw, Sri Lanka',
    description: 'Foundational certification in information technology and professional English communication.',
  },
];

export const referencesData = [
  {
    name: 'Mr. Praneeth Weerawardhana',
    title: 'Assistant Director (IS)',
    organization: 'NAITA Head Office',
    email: 'praneeth@naita.gov.lk',
    phone: '0719603838',
  },
  {
    name: 'Mr. N. Kannangara',
    title: 'Senior Lecturer, Department of IT',
    organization: 'ATI Dehiwala (SLIATE)',
    email: 'nalin@sliate.ac.lk',
    phone: '0782930414',
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages & Core',
    description: 'Python, TypeScript, JavaScript, Dart, Java, C#, SQL, HTML5, CSS3',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'HND in Information Technology @ SLIATE (ATI Dehiwala)',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Current Role',
    description: 'Associate Software Engineer @ Network Wizard SDN BHD',
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.SQL,
  assets.figma,
  assets.git,
  assets.java,
];