import {
  java,
  problemsolver,
  self2,
  herobg,
  l3,
  l2,
  l4,
  l6,
  edunet,
  bridge4Engineers,
  gssoc,
  hactoberfest,
  icpc,
  microsoft,
  postman,
  prize,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hoob,
  sumzz,
  news,
  jobj,
  modAi,
  chat,
  collaborator,
  evogym,
  fileshare,
  expt,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'project',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'Experience',
    title: 'Experience',
  },
];

const selfpro = {
  image1: self2,
  imagebg: herobg,
};

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UX/UI Designer',
    icon: mobile,
  },
  {
    title: 'Problem Solver',
    icon: problemsolver,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'java',
    icon: java,
  },
];

const experiences = [
  {
    title: 'Project Manager',
    company_name: 'Bridge4Engineers',
    icon: edunet,
    iconBg: '#ffffff',
    date: 'Dec 2024 - Present',
    points: [
      'Working in a team to developing a Bridge4Engineers Web App where I was responsible for implementing the frontend using React, building the backend with Express, and managing the database with MongoDB.',
      'Exposure: React . Express . MongoDB . JavaScript . Git and Github',
    ],
  },
  {
    title: 'Intern At Edunet Foundation',
    company_name: 'Edunet Foundation',
    icon: edunet,
    iconBg: '#ffffff',
    date: 'Dec 2023 - Jan 2024',
    points: [
      'Worked in a team to develop an Image Captioning Web App where I was responsible for implementing the frontend using React, building the backend with Express, and managing the database with MongoDB.',
      'Exposure: React . Express . MongoDB . JavaScript . Git and Github',
    ],
  },
  {
    title: 'Microsoft Learn Student Ambassadors',
    company_name: 'Microsoft',
    icon: microsoft,
    iconBg: '#ffffff',
    date: 'May 2023 - Present',
    points: [
      'Currently leading a team of 4 for MLSA AI Project (Project Name : Secret Talk).',
      'Hosted Several MLSA Events dedicated on Tech Stack (Git and GitHub . SQL Server etc).',
      'Exposure: GitHub · Git · JavaScript · Team Leadership · Public Speaking · Presentation Skills.',
    ],
  },
  {
    title: 'ICPC REGIONALIST - 2023',
    company_name: 'International Collegiate Programming Contest',
    icon: icpc,
    iconBg: '#383E56',
    date: 'december 2023',
    points: [
      'Team Name - AIMT-Hustler : Qualified for Asia West ICPC Regional Amritapuri.',
      'Secured a Rank of 1242 in Preliminary Round from all over India.',
    ],
  },
  {
    title: 'College Tech Competition(Techbuzz)',
    company_name: 'Techbuzz',
    icon: prize,
    iconBg: '#E6DEDD',
    date: 'January 2023',
    points: [
      'Achieved 3rd place among 200 participants in Techbuzz, Online coding contest at my college.',
      'Problem-Solving Skills: Excelled in tackling complex coding challenges efficiently.',
      'Competitive Edge: Ranked in the top tier, showcasing strong technical abilities under timed conditions.',
    ],
  },
  {
    title: 'Open Source Contribution',
    company_name: 'Hacktoberfest, GSSoC, SSoC',
    icon: hactoberfest,
    iconBg: '#383E56',
    date: 'September 2023 ',
    points: [
      'Successfully conquered Hacktoberfest’23, GSSoC’24, and SSoC’24',
      'Feature Development: Implemented key features, enhancing project functionality and user experience.',
      'Bug Fixes and Optimization: Resolved bugs, improved code efficiency, and ensured smooth functionality.',
    ],
  },
  {
    title: 'Mentor at GSSoC’24:',
    company_name: 'GirlScript Summer of Code',
    icon: gssoc,
    iconBg: '#383E56',
    date: 'june 2024 ',
    points: [
      'Awarded the Top Mentor Award for outstanding mentorship, guiding students in open-source contributions.',
      'Project Guidance: Supported students in each stage of project development, focusing on effective problem-solving and best practices.',
      'Version Control Training: Helped students master Git and GitHub, emphasizing collaboration and pull request management.',
    ],
  },
  {
    title: 'Postman API Student Expert ',
    company_name: 'Postman',
    icon: postman,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Feb 2023',
    points: [
      'Skilled in Postman API Fundamentals, API Development and Testing',
      'API Design: Creating and structuring APIs for efficient, modular, and scalable solutions.',
      'Testing and Debugging: Conducting thorough API testing, identifying issues, and validating functionality.',
    ],
  },
];

const projects = [
  {
    name: 'Collaborator',
    description:
      'Collaborator is an application that helps us to manage the tasks, track progress of the task and assign task to different team members.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'toast',
        color: 'green-text-gradient',
      },
    ],
    image: collaborator,
    source_code_link: 'https://collaborators-8cwo.onrender.com/dashboard',
  },
  {
    name: 'Job junction',
    description:
      'The  Job junction  project is a web-based platform designed to facilitate job posting and job seeking . It is a web-based platform designed for job posting and job seeking .',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'toast',
        color: 'pink-text-gradient',
      },
      {
        name: 'axios',
        color: 'red-text-gradient',
      },
    ],
    image: jobj,
    source_code_link: 'https://job-junction-cfsh.onrender.com/',
  },
  {
    name: 'Hey-',
    description:
      'This project is a chat application built using , React, Express, MongoDB, and Socket.IO. It allows users to connect with each other and communicate with each other.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'socket-io',
        color: 'white-text-gradient',
      },
    ],
    image: chat,
    source_code_link: 'https://hey-0b6j.onrender.com/',
  },
  {
    name: 'Expense Tracker',
    description:
      'Expense Tracker is a full-stack web application built with GraphQL, React, and MongoDB. It allows users to track their expenses and manage their finances effectively.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'Graph-QL',
        color: 'pink-text-gradient',
      },
    ],
    image: expt,
    source_code_link: 'https://expense-tracker-z1iv.onrender.com/login',
  },
  {
    name: 'Easy-share',
    description:
      'This web application allows users to securely share files of any type with others. Built with Node.js, Express.js, EJS, Tailwind CSS, and MongoDB, it offers features like password protection for shared links.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: fileshare,
    source_code_link: '',
      // 'https://github.com/Anubhav-dev-web/CodeClauseInternship_File-Sharing-Platform',
  },
  {
    name: 'Mod-AI',
    description:
      'This landing page is built with React, Tailwind CSS, and Vite, providing a modern and efficient development environment for showcasing AI-related content.  ',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Ai-page ',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: modAi,
    source_code_link: 'https://mod-ai-six.vercel.app/',
  },
  {
    name: 'EvoGym',
    description:
      'Fitness Site Landing Page project! This landing page is designed for fitness enthusiasts and is built with React, Tailwind CSS, Vite, TypeScript, Framer Motion etc.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: evogym,
    source_code_link: 'https://evo-fitness.netlify.app/',
  },

  {
    name: 'Article summarizer',
    description:
      'This website serves as a tool to summarize lengthy articles into concise and digestible summaries. It leverages the power of GPT AI model to generate accurate and coherent summaries.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'GPT-4 model',
        color: 'pink-text-gradient',
      },
    ],
    image: sumzz,
    source_code_link: 'https://ai-article-summarizer-livid.vercel.app/',
  },
  {
    name: 'News App',
    description:
      'This is a web application that provides news articles from various categories sourced from an API. The app is built using React and Bootstrap, It also have multiple categories to filter from . ',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'new -API',
        color: 'pink-text-gradient',
      },
    ],
    image: news,
    source_code_link: ''
    // 'https://github.com/Anubhav-dev-web/newsapp',
  },
];

export { services, technologies, experiences, projects, selfpro };
