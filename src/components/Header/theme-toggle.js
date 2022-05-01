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
    <ButtonStyle
      theme={theme}
      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </ButtonStyle>
  );
};
export default ThemeChanger;

const ButtonStyle = styled.button`
  background: hsl(var(--purple));
  font-size: 1.2rem;
  height: 3rem;
  width: 3rem;
  color: hsl(var(--white));
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 99999px;
  &:hover {
    background: hsl(var(--purple-light));
  }
`;
