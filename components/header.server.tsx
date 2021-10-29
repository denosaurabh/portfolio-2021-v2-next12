/* eslint-disable @next/next/no-img-element */
// import { useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import { styled } from '@styled';

// import useNav from '@state/nav';

// import NavSvg from '@svg/Hamburger.svg';
// import CrossSvg from '@svg/Cross.svg';

const Header = () => {
  // const { showNavButton, showNav, setShowNav, setShowNavButton } = useNav(
  //   (state) => state
  // );

  // useEffect(() => {
  //   if (!window) return;

  //   setShowNavButton(window.innerWidth <= 460);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <HeaderStyled className="header">
      <HeaderLeftBox>
        {/* <Link  passHref> */}
        <a href="/" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img src="/img/deno.webp" alt="denosaurabh" width={35} height={35} />
        </a>
        {/* </Link> */}

        {/* <Link href="/" passHref> */}
        <a href="/">@denosaurabh</a>
        {/* </Link> */}
      </HeaderLeftBox>

      {/* {showNavButton || ( */}
      <Nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Reach out</a>
      </Nav>
      {/* )} */}

      {/* {showNavButton && !showNav ? (
        <NavSvgStyled onClick={() => setShowNav(true)} />
      ) : null}
      {showNavButton && showNav ? (
        <CrossSvgStyled onClick={() => setShowNav(false)} />
      ) : null} */}
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled('header', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',

  color: '$textColor',

  img: {
    cursor: 'pointer',
  },
});

const HeaderLeftBox = styled('div', {
  display: 'flex',
  alignItems: 'end',
  gap: '1.5rem',

  fontSize: '1.8rem',
});

const Nav = styled('nav', {
  display: 'flex',
  gap: '2.6rem',

  fontSize: '1.6rem',
  fontWeight: '400',

  'a:last-child': {
    fontWeight: '600',
  },
});

// const NavSvgStyled = styled(NavSvg, {
//   '&:hover': {
//     cursor: 'pointer',
//   },
//   zIndex: 100,
// });

// const CrossSvgStyled = styled(CrossSvg, {
//   position: 'fixed',
//   top: '3%',
//   right: '5%',

//   '&:hover': {
//     cursor: 'pointer',
//   },
//   zIndex: 100,
// });
