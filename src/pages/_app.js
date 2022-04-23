import { NextIntlProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import '@styles/globals.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --fg: #0C0E16;
    --bg: #f8f8f8;
    --primary: hsl(231.11111111111111, 72.97297297297298%, 92.74509803921569%);
    --secondary: hsl(231.30434782608697, 36.50793650793649%, 62.94117647058823%);
    --purple: 252 94% 67%;
    --purple-light: 252 100% 73%;
    --grey: #888eb0;
    --grey-light: #DFE3FA;
    --grey-blue: #7E88C3;
    --red: #EC5757;
    --red-light: #ff9277;
    --white: 0 0% 100%;

    --max-width: 1400px;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #141625;
    --primary: #1e2139;
    --secondary: #252945;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  body {
    background: var(--bg);
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <GlobalStyles />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
