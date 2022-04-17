import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { gql } from '@apollo/client';
import client from 'src/apollo-client';

export default function Home({ content }) {
  const t = useTranslations('index');
  const { home } = content;

  return (
    <div>
      <Head>
        <title>Rohald.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="local-json">
        <h2>From next-intl</h2>
        <h1>{t('heading')}</h1>
        <p>{t('content')}</p>
      </div>
      <div className="from-cms">
        <h2>From graphCMS</h2>
        <h1>{home.heroTitle}</h1>
        <p>{home.heroText}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const data = await client.query({
    query: gql`
      query HomePage($locale: Locale!) {
        page(where: { slug: "home" }) {
          id
          heroText
          heroTitle
          localizations(locales: [$locale]) {
            id
            heroText
            heroTitle
            locale
          }
        }
      }
    `,
    variables: {
      locale,
    },
  });

  let home = data.data.page;
  if (home.localizations.length) {
    home = {
      ...home,
      ...home.localizations[0],
    };
  }

  return {
    props: {
      content: {
        ...require(`../locales/${locale}.json`),
        home,
      },
    },
  };
}
