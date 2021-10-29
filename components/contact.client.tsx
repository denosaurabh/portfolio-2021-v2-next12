// import Link from 'next/link';
import { styled } from '@styled';

// import useCursorAlert from '@state/coursorAlert';

const Contact = () => {
  // const { setAlert } = useCursorAlert(({ setAlert }) => ({ setAlert }));

  const onEmailClick = async () => {
    if (!window) return;

    await window.navigator.clipboard.writeText('denosaurabh@gmail.com');

    // setAlert('Email Copied!');
  };

  return (
    <ContactContaier className="contact">
      <p>
        I am more than happy to work with <br /> artists, creative agencies &
        small startups.
      </p>
      <h6>
        <a href="/contact">REACH OUT</a>
      </h6>
      <span 
      // onClick={onEmailClick}
      >denosaurabh@gmail.com</span>
    </ContactContaier>
  );
};

export default Contact;

const ContactContaier = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',

  textAlign: 'center',

  p: {
    fontSize: '1.8rem',
    color: '$textColor',
    lineHeight: '25px',
  },

  h6: {
    fontWeight: '600',
    fontSize: '8rem',
    textDecoration: 'underline',
    color: '$textColorDark',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  span: {
    fontSize: '2rem',
    color: '$textColor',

    '&:hover': {
      cursor: 'pointer',
    },
  },
});
