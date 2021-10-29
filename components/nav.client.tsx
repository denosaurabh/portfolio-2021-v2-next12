// import Link from 'next/link';
import { keyframes, styled } from '@styled';

// import useNav from '@state/nav';

const Nav = () => {
  // const { setShowNav } = useNav(({ setShowNav }) => ({ setShowNav }));

  return (
    <NavContainer>
      <a href="/">
        <a
        //  onClick={() => setShowNav(false)}
        >
          Home
        </a>
      </a >
      <a  href="/about">
        <a
        //  onClick={() => setShowNav(false)}
        >
          About
        </a>
      </a >
      <a  href="/projects">
        <a
        //  onClick={() => setShowNav(false)}
        >
          Projects
        </a>
      </a >
      <a  href="/contact">
        <a
        //  onClick={() => setShowNav(false)}
        >
          Reach out
        </a>
      </a >
    </NavContainer>
  );
};

export default Nav;

const FadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const NavContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  backgroundColor: '#F3F3F3',

  userSelect: 'none',
  overflow: 'hidden',

  animation: `${FadeIn} 0.5s ease-in-out`,

  zIndex: 50,

  a: {
    fontSize: '5rem',
    fontWeight: '400',

    textDecoration: 'underline',
  },
});
