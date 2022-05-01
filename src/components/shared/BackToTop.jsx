import Image from 'next/image';
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .8;
  }
`;
const LinkStyles = styled.a`
  border: none;
  height: 3rem;
  width: 3rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 999999px;
  background-color: hsl(var(--purple) / 0.8);
  display: grid;
  place-items: center;
  transition: all 0.3s ease-in;
  animation: ${fadeIn} 0.3s ease-in;

  &:hover,
  &:focus {
    transform: translateY(-0.3rem);
    background-color: hsl(var(--purple));
  }
`;

export default function BackToTop() {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    if (window.pageYOffset > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleShow);
  });

  return (
    <LinkStyles
      aria-label="back to top"
      href="#skip-to-main"
      onClick={scrollToTop}
      style={{ display: show ? 'grid' : 'none' }}
    >
      <Image src="/up-arrow.svg" alt="up arrow" width="30" height="30" />
    </LinkStyles>
  );
}
