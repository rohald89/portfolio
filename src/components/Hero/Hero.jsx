import Wrapper from '@components/shared/Wrapper';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroStyles>
      <Wrapper></Wrapper>
    </HeroStyles>
  );
};

// Header.messages = ['Header', ...Navbar.messages];

const HeroStyles = styled.section`
  height: 800px;
  width: 100%;
`;

export default Hero;
