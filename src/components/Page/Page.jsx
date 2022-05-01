import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';
import SkipToContent from '@components/shared/SkipToContent';

const InnerStyles = styled.main`
  max-width: var(--max-width);
  width: min(90%, var(--max-width));
  min-height: 200vh;
  margin-inline: auto;
  padding-top: 6rem;
`;

const Page = ({ children }) => (
  <>
    <SkipToContent />
    <Header />
    <InnerStyles id="main">{children}</InnerStyles>
    <Footer />
  </>
);

Page.messages = ['Page', ...Header.messages];

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
