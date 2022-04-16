import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import styled from 'styled-components';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      The current theme is: {theme}
      <ButtonStyle theme={theme} onClick={() => setTheme('light')}>
        Light Mode
      </ButtonStyle>
      <ButtonStyle theme={theme} onClick={() => setTheme('dark')}>
        Dark Mode
      </ButtonStyle>
    </div>
  );
};
export default ThemeChanger;

const ButtonStyle = styled.button`
  background: var(--purple);
  color: var(--fg);
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: var(--purple-light);
  }
`;
