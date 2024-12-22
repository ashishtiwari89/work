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
    'I’m a Full-Stack Software Engineer with over 7 years of experience building scalable, maintainable systems that drive business success. Proficient in Java, Spring Boot, React, Node.js, microservices architecture, and API development. I deliver seamless solutions across backend and frontend development. My expertise spans API design, cloud-native technologies, and CI/CD pipelines using Docker and Kubernetes. I’ve led teams to optimize legacy systems, enhance performance, and create user-friendly applications that align with business goals. Passionate about solving real-world challenges, I focus on crafting impactful, efficient, and adaptable platforms that empower organizations to grow and innovate.',
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
