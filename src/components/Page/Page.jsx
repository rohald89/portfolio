import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';

const InnerStyles = styled.div`
  max-width: var(--max-width);
  width: min(90%, var(--max-width));
  margin: 4rem auto;
`;

const Page = ({ children }) => (
  <>
    <Header />
    <InnerStyles>{children}</InnerStyles>
    <Footer />
  </>
);

Page.messages = ['Page', ...Header.messages];

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
