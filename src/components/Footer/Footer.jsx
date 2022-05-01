import Wrapper from '@components/shared/Wrapper';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--background-gradient);
  width: 100%;
  padding: 2rem 0;
  border-top: 2px solid hsl(var(--primary) / 0.6);
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Wrapper>Footer</Wrapper>
    </FooterStyles>
  );
};
export default Footer;
