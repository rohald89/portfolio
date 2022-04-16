import { NextIntlProvider } from 'next-intl';
import Header from '@components/Header';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.content}>
      <Header />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
