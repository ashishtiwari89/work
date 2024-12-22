const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ashishtiwari89.github.io/work',
  title: 'AT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashish Tiwari',
  role: 'Full Stack Developer',
  description:
    'I am a Full-Stack Software Engineer with over 7 years of experience building scalable applications tailored to handle high-volume data and address complex business needs. With expertise in Java, React, Spring Boot, and Node.js, I excel at developing robust APIs, seamless user interfaces, and resilient backend systems. My skills include working with relational databases like MySQL and PostgreSQL, as well as NoSQL technologies such as MongoDB and Cassandra. Proficient in CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes, I deliver cloud-native solutions and microservices architectures that drive performance, scalability, and measurable business success.',
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
    name: 'Project 1 Renamed',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
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
