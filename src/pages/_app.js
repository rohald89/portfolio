import { NextIntlProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import '@styles/globals.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --fg: #0C0E16;
    --bg: #f8f8f8;
    --primary: #DFE3FA;
    --secondary: #7E88C3;
    --purple: #7c5DFA;
    --purple-light: #9277ff;
    --grey: #888eb0;
    --grey-light: #DFE3FA;
    --grey-blue: #7E88C3;
    --red: #EC5757;
    --red-light: #ff9277;
    --max-width: 1400px;
    --white: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #141625;
    --primary: #1e2139;
    --secondary: #252945;
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
