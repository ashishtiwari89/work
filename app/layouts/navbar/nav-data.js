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
    pathname: 'https://docs.google.com/document/d/1OFdk-LsBkJ_fkgHJkq4G5Nh1EUjuBB6Biz-YxpsPrjw/edit?usp=drive_link',
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
