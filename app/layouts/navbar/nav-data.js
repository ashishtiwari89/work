import config from '~/config.json';

export const navLinks = [
  {
    label: 'About',
    pathname: '/#details',
  },
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
  {
    label: 'Resume',
    pathname: 'https://ashishtiwari.work/Resume_Ashish_Tiwari.pdf',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
