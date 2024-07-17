import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am a highly skilled and experienced Full Stack Software Engineer and Web Developer, with more than 10 years of hands-on experience in developing enterprise solutions for small and medium-sized businesses. 
      My expertise spans across the full software development lifecycle, from initial requirements gathering and design to implementation, testing, and deployment.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My technical proficiency includes a robust skill set in both backend and frontend development. I am proficient in Java, SpringBoot, Python, Django, JavaScript, React, Node.js, Next.js, Express.js, HTML, and CSS. 
      This extensive background allows me to build comprehensive, scalable, and user-friendly applications that not only meet but exceed client expectations.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am passionate about delivering high-quality software solutions that drive business results and provide exceptional user experiences. 
      My ability to translate business requirements into technical specifications and deliver efficient, maintainable, and scalable software solutions has been a key contributor to my success in the industry.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 768w`}
                  width={768}
                  height={1024}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Ashish Tiwari"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
