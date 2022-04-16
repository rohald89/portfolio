import Navbar from '@components/Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyles>
      <Navbar />
    </HeaderStyles>
  );
};
export default Header;

const HeaderStyles = styled.header`
  background-color: var(--primary);
  width: 100%;
`;
