import config from '~/config.json';

export const navLinks = [
  {
    label: 'Home',
    pathname: '/',
  },
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'About',
    pathname: '/#about',
  },
  {
    label: 'Resume',
    pathname: 'https://drive.google.com/file/d/11AlvrtNqdFQVnP6PEhPwcqiwIQtE5W91',
    target: '_blank',
  },
  {
    label: 'Contact',
    pathname: '/contact',
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
