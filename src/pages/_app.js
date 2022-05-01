import { NextIntlProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import '@styles/globals.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --fg: 228 29.4% 6.667%;
    --bg: 0 0% 97%;
    --primary: 231 73% 93%;
    --secondary: 231 36% 63%;
    --purple: 252 94% 67%;
    --purple-light: 252 100% 73%;
    --grey: #888eb0;
    --grey-light: #DFE3FA;
    --grey-blue: 231.3 36.5% 62.9%;
    --red: #EC5757;
    --red-light: #ff9277;
    --white: 0 0% 100%;
    --background-gradient: linear-gradient(to right, hsl(var(--bg)), hsl(var(--primary)), hsl(var(--bg)));
    --max-width: 1400px;
  }

  [data-theme="dark"] {
    --fg: 0 0% 100%;
    --bg: 233 30% 11%;
    --primary: 233 31% 17%;
    --secondary: 232.5 30.2% 20.78%;
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
    background: hsl(var(--bg));
    color: hsl(var(--fg));
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
