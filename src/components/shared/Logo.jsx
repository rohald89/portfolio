import styled from 'styled-components';

const LogoStyles = styled.h1`
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  background-image: linear-gradient(to left, hsl(var(--purple) / 0.8), hsl(var(--purple-light)));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Logo = () => {
  return <LogoStyles>Rohald</LogoStyles>;
};
export default Logo;
