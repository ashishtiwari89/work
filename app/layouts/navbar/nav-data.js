import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
    target: '_self',
  },
  {
    label: 'About',
    pathname: '/#about',
    target: '_self',
  },
  {
    label: 'Resume',
    pathname: 'https://ashishtiwari.work/Resume_Ashish_Tiwari.pdf',
    target: '_blank',
  },
  {
    label: 'Contact',
    pathname: 'mailto:ashishtiwari.b@gmail.com',
    target: '_blank',
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
