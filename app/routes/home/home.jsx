import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer + Web Developer',
    description: `Portfolio of ${config.name}`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const about = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  
  useEffect(() => {
    const sections = [intro, about, projectOne, projectTwo, projectThree];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Ecommerce Website"
        description="Developed a fully functional e-commerce website using React, Node.js, and MongoDB, designed to provide a seamless shopping experience for users. 
        The platform features a responsive user interface, robust backend, and secure data management."
        buttonText="View project"
        buttonLink="#"
        model={{
          type: 'laptop',
          alt: 'Ecommerce Website',
          textures: [
            {
              srcSet: ` `,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Share Market App"
        description="Developed a dynamic web application focused on providing real-time data and insights into the US share market using React, Redux, Next.js, and Express. 
        The platform offers a rich user experience with comprehensive market analysis tools and user-specific features."
        buttonText="View Project"
        buttonLink="#"
        model={{
          type: 'phone',
          alt: 'Share Market App',
          textures: [
            {
              srcSet: ` `,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: ` `,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectOne.current)}
        index={3}
        title="ELearning Website for Programming"
        description="Developed a comprehensive e-learning platform specifically designed for computer science and programming courses, utilizing React for the frontend and Java Spring Boot for the backend. 
        The platform aims to provide an interactive and user-friendly learning experience with extensive course management features."
        buttonText="View Project"
        buttonLink="#"
        model={{
          type: 'laptop',
          alt: 'ELearning',
          textures: [
            {
              srcSet: ` `,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
