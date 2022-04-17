import Navbar from '@components/Navbar';
import Logo from '@components/shared/Logo';
import LocaleSwitcher from './locale-switcher';
import ThemeChanger from './theme-toggle';
import Wrapper from '@components/shared/Wrapper';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyles>
      <Wrapper>
        <Logo />
        <Navbar />
        <LocaleSwitcher />
        <ThemeChanger />
      </Wrapper>
    </HeaderStyles>
  );
};

Header.messages = ['Header', ...Navbar.messages];

const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--primary);
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
