import { NextIntlProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { createGlobalStyle } from 'styled-components';
import Page from '@components/Page';
import '@styles/globals.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --fg: #0C0E16;
    --bg: #f8f8f8;
    --primary: #373B53;
    --secondary: #7E88C3
    --purple: #7c5DFA;
    --purple-light: #9277ff;
    --grey: #888eb0;
    --grey-light: #DFE3FA;
    --grey-blue: #7E88C3
    --red: #EC5757;
    --red-light: #ff9277
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
    <NextIntlProvider messages={pageProps.content}>
      <GlobalStyles />
      <ThemeProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
