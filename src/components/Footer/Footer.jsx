import Wrapper from '@components/shared/Wrapper';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: fixed;
  bottom: 2rem;
  background: linear-gradient(
    to right,
    hsl(var(--white) / 0),
    hsl(var(--white) / 0.1),
    hsl(var(--white) / 0)
  );
  backdrop-filter: blur(20px);
  width: 100%;
  padding: 2rem;
  border-top: 2px solid hsl(var(--white) / 0.1);
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Wrapper>Footer</Wrapper>
    </FooterStyles>
  );
};
export default Footer;
