import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Page from '@components/Page';
import Wrapper from '@components/shared/Wrapper';

export default function About() {
  const t = useTranslations('about');
  const { locale } = useRouter();

  return (
    <div>
      <Head>
        <title>Rohald.dev | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="alternate" hrefLang={locale} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Wrapper>
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
        </Wrapper>
      </Page>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
