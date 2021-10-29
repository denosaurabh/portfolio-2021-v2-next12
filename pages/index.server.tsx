// import Image from 'next/image';
import { styled } from '@styled';

import Alert from '@components/alert.server';
import Description from '@components/description.server';
// import Projects from '@components/projects.server';
import Technologies from '@components/technologies.server';
import Contact from '@components/contact.client';

// import { projectsData2021 } from '@data/projectsData';

export default function Home() {
  return (
    <>
      <Alert />
      <Description />
      {/* <Projects
        title="Projects 2021"
        data={projectsData2021}
        showMoreProjectsLink
      /> */}
      <Technologies />
      <Contact />

      {/* <GradientBox>
        <Image src="/img/Gradient.webp" alt="Gradient" layout="fill" />
      </GradientBox> */}
    </>
  );
}

const GradientBox = styled('div', {
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translateX(-50%)',

  width: '70rem',
  height: '70rem',

  zIndex: -10,

  '@mobile': {
    // top: '90%',

    width: '50rem',
    height: '50rem',
  },
});
