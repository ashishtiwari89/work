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
    pathname: 'https://drive.google.com/file/d/11AlvrtNqdFQVnP6PEhPwcqiwIQtE5W91',
    target: '_blank',
  },
  {
    label: 'Contact',
    pathname: '/contact',
    target: '_self',
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
