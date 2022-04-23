import styled from 'styled-components';

const LogoStyles = styled.h1`
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  background-image: linear-gradient(to left, hsl(var(--purple) / .8), hsl(var(--purple-light)));
  background-clip: text;
  color: transparent;
   &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 2rem;
    height: 3px;
    background: hsl(var(--purple-light));
    margin-top: 0.5rem; */
  } 
`;

const Logo = () => {
  return <LogoStyles>Rohald</LogoStyles>;
};
export default Logo;
