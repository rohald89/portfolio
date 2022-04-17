import styled from 'styled-components';

const LogoStyles = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: var(--purple);
`;

const Logo = () => {
  return <LogoStyles>RvM</LogoStyles>;
};
export default Logo;
