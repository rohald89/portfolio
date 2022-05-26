import { useEffect } from 'react';
import Navbar from '@components/Navbar';
import Logo from '@components/shared/Logo';
import LocaleSwitcher from './locale-switcher';
import ThemeChanger from './theme-toggle';
import Wrapper from '@components/shared/Wrapper';
import styled, {css} from 'styled-components';
import useScrollDirection from '@hooks/useScrollDirection';

const Header = () => {
    const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const header = document.querySelector('header');
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <HeaderStyles scrollDirection={scrollDirection}>
      <Wrapper>
        <Logo />
        <div className="navigation">
          <Navbar />
          <LocaleSwitcher />
          <ThemeChanger />
        </div>
      </Wrapper>
    </HeaderStyles>
  );
};

Header.messages = ['Header', ...Navbar.messages];

const HeaderStyles = styled.header`
${props => props.scrollDirection === 'up' && css`
transform: translateY(0);
`}
${props => props.scrollDirection === 'down' && css`
transform: translateY(-100%);
`}
  position: sticky;
  top: -4rem;
  background-color: hsl(var(--primary) / 0);
  z-index: 1;
  width: 100%;
  padding-top: 4rem;
  transition: all 0.4s ease-in-out;

  &.scrolled {
    background: var(--background-gradient);
    border-bottom: 2px solid hsl(var(--primary) / 0.6);
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & .navigation {
    display: flex;
    align-items: center;
  }
`;

export default Header;
