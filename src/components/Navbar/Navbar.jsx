import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

const NavToggle = styled.button`
  justify-self: start;
  z-index: 2000;
  display: block;
  background: transparent;
  background-image: url('/icon-hamburger.svg');
  background-position: 50%;
  background-repeat: no-repeat;
  width: 1.5rem;
  aspect-ratio: 1;
  border: 0;
  order: -1;
  @media (min-width: 50rem) {
    display: none;
  }

  &[aria-expanded='true'] {
    background-image: url('/icon-close.svg');
  }

  &:focus-visible {
    outline: 5px solid white;
    outline-offset: 5px;
  }
`;

const NavStyles = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: white;
    display: flex;
    height: 100%;
    li {
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (max-width: 50rem) {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 0;
    list-style: none;
    padding: min(20rem, 15vh) 2rem;
    margin: 0;
    transform: translateY(-100%);
    transition: transform 0.35s ease-in-out;
    background: black;
    ul {
      flex-direction: column;
    }
    &[data-visible='true'] {
      transform: translateY(0);
    }
  }
`;

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
      <NavToggle
        onClick={toggleMenu}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        type="button"
      >
        <span className="sr-only">Menu</span>
      </NavToggle>
      <NavStyles data-visible={isOpen}>
        <Link href="/">
          <a>{t('home')}</a>
        </Link>
        <Link href="/about">
          <a>{t('about')}</a>
        </Link>
        <Link href="/projects">
          <a>{t('projects')}</a>
        </Link>
        <Link href="/contact">
          <a>{t('contact')}</a>
        </Link>
      </NavStyles>
    </>
  );
}

Navbar.messages = ['Navbar'];
