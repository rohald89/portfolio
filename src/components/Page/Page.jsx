import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';

const InnerStyles = styled.div`
  max-width: var(--max-width);
  width: min(100%, var(--max-width));
  padding: 0 2rem;
  margin: 4rem auto;
`;

const Page = ({ children }) => (
  <>
    <Header />
    <InnerStyles>{children}</InnerStyles>
    <Footer />
  </>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
