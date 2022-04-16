import { NextIntlProvider } from 'next-intl';
import Navbar from '@components/Navbar';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.content}>
      <Navbar />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
