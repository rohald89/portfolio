import styled from 'styled-components';

const SkipToContent = () => {
  return (
    <SkipStyles href="#main" id="skip-to-main">
      Skip to main content
    </SkipStyles>
  );
};

const SkipStyles = styled.a`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 9999;
  background: hsl(var(--grey-blue));
  color: hsl(var(--bg));
  font-weight: bold;
  font-size: 1.3rem;
  padding: 1em 1.5em;
  margin-inline: auto;
  transform: translateY(-100%);

  &:focus {
    transition: transform 0.25s ease-in-out;
    transform: translateY(0);
  }
`;
export default SkipToContent;
