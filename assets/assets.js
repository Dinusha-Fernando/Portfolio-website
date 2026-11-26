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
import profile_img_transparent from './profile-img-transparent.png';
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
import abdul_fandom_img from './projects/abdul-fandom.jpg';
import whatsapp_automation_img from './projects/whatsapp-automation.jpg';

export const assets = {
  SQL,
  send_icon,
  chronosentinel_img,
  trading_img,
  sparkler_img,
  servicedesk_img,
  ieti_img,
  touria_img,
  abdul_fandom_img,
  whatsapp_automation_img,
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
  profile_img_transparent,
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
  title: 'Software Engineer · Founder of Zylux Software Solutions',
  tagline: 'Software Engineer · Founder of Zylux Software Solutions · Digital Innovator',
  email: 'dkalharafernando@gmail.com',
  phone: '+94 77 582 9018',
  location: 'Kalpitiya / Colombo, Sri Lanka',
  currentCompany: 'Zylux Software Solutions / Network Wizard SDN BHD',
  currentRole: 'Software Engineer · Founder & CEO',
  education: 'Higher National Diploma in Information Technology (HNDIT) - SLIATE (ATI Dehiwala)',
  linkedin: 'https://www.linkedin.com/in/dinusha-fernando-797745265/',
  github: 'https://github.com/Dinusha-Fernando',
};

export const workData = [
  {
    id: 'chronosentinel-ai',
    sysCode: 'SYS.01',
    title: 'ChronoSentinel AI',
    tagline: 'Turning Digital Footprints into Security Intelligence.',
    domain: 'ai-cybersecurity',
    domainLabel: 'AI & Cybersecurity',
    description:
      'An AI-driven cybersecurity intelligence platform engineered to uncover potential domain-related threats through historical web analysis, automated data processing, and intelligent risk assessment.',
    fullDetails:
      'Designed to transform fragmented historical data into actionable security insights through scalable backend architecture and asynchronous processing workflows. Engineered at Network Wizard SDN BHD using React, TypeScript, Python, FastAPI, PostgreSQL, Redis, Docker, Celery, and SQLAlchemy with Wayback Machine, VirusTotal, and SecurityTrails integrations.',
    highlights: [
      'AI-driven domain risk assessment',
      'Historical web intelligence',
      'Automated security analysis',
      'Asynchronous background processing',
      'Scalable, containerized architecture',
    ],
    bgImage: '/projects/chronosentinel.jpg',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
  {
    id: 'abdul-fandom',
    sysCode: 'SYS.02',
    title: 'Abdul Fandom',
    tagline: 'Where Commerce Meets Modern Engineering.',
    domain: 'digital-commerce',
    domainLabel: 'Digital Commerce',
    description:
      'A production e-commerce ecosystem engineered to connect customers, products, and business operations through a unified digital shopping experience.',
    fullDetails:
      'Combining a modern Next.js frontend with a robust Django REST Framework backend, the platform delivers responsive interfaces, structured product management, administrative controls, and persistent data architecture.',
    highlights: [
      'Full-stack e-commerce architecture',
      'Dynamic product catalogue',
      'Administrative management system',
      'RESTful API infrastructure',
      'Production deployment architecture',
    ],
    bgImage: '/projects/abdul-fandom.jpg',
    tags: ['Next.js 16', 'React', 'TypeScript', 'Django REST Framework', 'Python', 'PostgreSQL', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
  {
    id: 'whatsapp-automation',
    sysCode: 'SYS.03',
    title: 'WhatsApp AI Sales Automation',
    tagline: 'Turning Conversations into Business Opportunities.',
    domain: 'intelligent-automation',
    domainLabel: 'Intelligent Automation',
    description:
      'An AI-powered customer engagement and sales automation system designed to transform traditional WhatsApp communication into an intelligent business workflow.',
    fullDetails:
      'Integrating conversational AI, CRM automation, WhatsApp connectivity, and backend API integrations to streamline product discovery, customer inquiries, lead capture, and order-related communication while maintaining human oversight.',
    highlights: [
      'Intelligent conversational AI',
      'Automated product inquiries',
      'Customer lead capture',
      'CRM workflow integration',
      'Webhook-based communication',
      'Human-agent handoff',
      'Human-supervised payment verification workflow',
    ],
    bgImage: '/projects/whatsapp-automation.jpg',
    tags: ['Python', 'OpenAI API', 'WhatsApp QR Gateway', 'ChatBiz CRM', 'REST APIs', 'Webhooks', 'Workflow Automation'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
  {
    id: 'trading-platform',
    sysCode: 'SYS.04',
    title: 'Full-Stack Trading Platform',
    tagline: 'Engineering the Digital Financial Experience.',
    domain: 'fintech-trading',
    domainLabel: 'FinTech & Trading',
    description:
      'A full-stack financial trading platform combining responsive user interfaces, structured backend services, and relational database architecture.',
    fullDetails:
      'Engineered with an emphasis on intuitive interaction, secure API communication, efficient data management, and maintainable application architecture.',
    highlights: [
      'Responsive financial interfaces',
      'Full-stack application architecture',
      'Backend API integration',
      'Relational database management',
      'Structured financial data handling',
    ],
    bgImage: '/projects/trading.jpg',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: true,
  },
  {
    id: 'sparkler-ecommerce',
    sysCode: 'SYS.05',
    title: 'Sparkler',
    tagline: 'Powering Commerce Beyond the Storefront.',
    domain: 'digital-commerce',
    domainLabel: 'Digital Commerce',
    description:
      'A full-stack digital commerce platform integrating customer-facing experiences with backend business logic, payment processing, database management, and automated email communication.',
    fullDetails:
      'Designed to connect essential e-commerce operations within a cohesive digital environment. Features seamless checkout, product and customer data management, and automated email receipts.',
    highlights: [
      'Integrated frontend and backend',
      'Payment gateway integration',
      'Automated email communication',
      'Product and customer data management',
      'Commercial application architecture',
    ],
    bgImage: '/projects/sparkler.jpg',
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Database Integration', 'Payment Gateway'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: false,
  },
  {
    id: 'service-desk',
    sysCode: 'SYS.06',
    title: 'Service Desk System',
    tagline: 'Transforming Support into Structured Solutions.',
    domain: 'enterprise-systems',
    domainLabel: 'Enterprise Systems',
    description:
      'An enterprise-oriented service management portal engineered to centralize support requests, streamline operational workflows, and simplify service management.',
    fullDetails:
      'Built around eight RESTful APIs, relational database architecture, and intuitive interfaces to provide structured communication between users and support operations.',
    highlights: [
      'Eight RESTful API endpoints',
      'Centralized service request management',
      'Relational database integration',
      'Structured support workflows',
      'Maintainable backend architecture',
    ],
    bgImage: '/projects/servicedesk.jpg',
    tags: ['Python', 'Django', 'REST APIs', 'SQLite', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: false,
  },
  {
    id: 'ieti-portal',
    sysCode: 'SYS.07',
    title: 'IETI Institutional Portal',
    tagline: 'Connecting People, Information, and Institutions.',
    domain: 'institutional-platforms',
    domainLabel: 'Institutional Platforms',
    description:
      'A full-stack institutional platform engineered to modernize information access, digital administration, and user management within an institutional environment.',
    fullDetails:
      'Combining responsive frontend experiences, role-based authentication, backend APIs, and structured database integration to support organized institutional operations.',
    highlights: [
      'Role-based authentication',
      'Responsive institutional interfaces',
      'RESTful backend architecture',
      'Structured information management',
      'Relational database integration',
    ],
    bgImage: '/projects/ieti.jpg',
    tags: ['React', 'TypeScript', 'Django', 'Python', 'REST APIs', 'Database Integration'],
    githubUrl: 'https://github.com/Dinusha-Fernando',
    featured: false,
  },
  {
    id: 'touria',
    sysCode: 'SYS.08',
    title: 'Touria',
    tagline: 'Discover More. Explore Smarter.',
    domain: 'mobile-engineering',
    domainLabel: 'Mobile Engineering',
    description:
      'A cross-platform mobile tourism companion designed to make destination discovery more interactive, accessible, and intuitive.',
    fullDetails:
      'Powered by Flutter and Firebase, Touria combines location-based experiences, interactive maps, cloud-connected data, and modern mobile interfaces within a unified travel discovery application.',
    highlights: [
      'Cross-platform mobile development',
      'Interactive destination discovery',
      'Google Maps integration',
      'Cloud-based data synchronization',
      'Modern mobile user experience',
    ],
    bgImage: '/projects/touria.jpg',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'Mobile UI'],
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