import styled from 'styled-components';

const LogoStyles = styled.h1`
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  background-image: linear-gradient(to left, hsl(var(--purple) / 0.8), hsl(var(--purple-light)));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  & small {
    color: hsl(var(--fg));
    font-size: 1rem;
    font-weight: normal;
    position: relative;
    text-transform: uppercase;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: -0.38rem;
      height: 5px;
      width: 5px;
      background: hsl(var(--purple));
      border-radius: 50%;
    }
  }
  &::before,
  &::after {
    position: absolute;
    height: 100%;
    width: 20px;
    color: hsl(var(--fg) / 0.2);
  }
  &::after {
    content: '/>';
    right: -1.4rem;
    top: 0;
  }
  &::before {
    content: '<';
    left: -1.4rem;
    top: 0;
  }
`;

const Logo = () => {
  return (
    <LogoStyles>
      Rohald <small>dev</small>
    </LogoStyles>
  );
};
export default Logo;
