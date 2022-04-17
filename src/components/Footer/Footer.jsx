import Wrapper from '@components/shared/Wrapper';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: var(--primary);
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterStyles>
      <Wrapper>Footer</Wrapper>
    </FooterStyles>
  );
};
export default Footer;
