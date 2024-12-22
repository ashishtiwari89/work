const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ashishtiwari89.github.io/work',
  title: 'AT',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashish Tiwari',
  role: 'Full Stack Developer',
  description:
    'I am a Full-Stack Software Engineer with 7+ years of experience delivering scalable, high-performance applications. Proficient in Java, React, Spring Boot, and Node.js, I specialize in building robust APIs and microservices, intuitive user interfaces, and resilient backend systems. Skilled in MySQL, PostgreSQL, MongoDB, Cassandra, Docker, and Kubernetes, I excel in CI/CD workflows, creating solutions that drive business success.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'E-Commerce Website',
    description:
      'E-commerce platform using React, Node.js, MongoDB for flexible data handling, WebSockets for real-time order tracking, and Apache Kafka for event-driven messaging.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'E-Learning Website',
    description:
      'Java, SpringBoot and React-based e-learning platform with course management, quizzes, and progress tracking, leveraging MySQL for database and RabbitMQ for notifications.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Collaborative Workspace',
    description:
      'Collaborative workspace with task management, real-time chat, and scheduling, using Spring Boot, React, PostgreSQL for data storage, and Apache Kafka for event streaming.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
