// import Link from 'next/link';
import { styled } from '@styled';

const Footer = () => {
  return (
    <FooterStyled className="footer">
      <LinksContainer>
        <FooterBox>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Reach Out</a>
        </FooterBox>
        <FooterBox>
          <a
            href="https://github.com/denosaurabh"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://twitter.com/DenoSaurabh"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://dribbble.com/denosaurabh"
            target="_blank"
            rel="noreferrer"
          >
            Dribbble
          </a>
          <a
            href="https://behance.net/denosaurabh"
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
        </FooterBox>
        <FooterBox>
          <a href="/talks">Talks</a>
          <a href="/tech">Technologies</a>
          <a href="/snippets">Snippets</a>
          <a href="/art">Art</a>
        </FooterBox>
      </LinksContainer>
      <BottomContainer>
        <span>&copy; denosaurabh 2021</span>
        <span
          // onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          BACK TO TOP &uarr;
        </span>
        <span>PORTOLIO 2021</span>
      </BottomContainer>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled('footer', {
  display: 'flex',
  flexDirection: 'column',

  gap: '6rem',
});

const LinksContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  flexWrap: 'wrap',
});

const FooterBox = styled('div', {
  // flexBasis: '33%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.8rem',

  a: {
    fontSize: '1.6rem',
    color: '$textColor',
  },
});

const BottomContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '1.6rem',
    fontWeight: '500',
    color: '$textColorDark',
  },
});
