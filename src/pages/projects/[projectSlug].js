import { gql } from '@apollo/client';
import pick from 'lodash/pick';
import Page from '@components/Page';
import client from '@src/apollo-client';
import { useTranslations } from 'next-intl';

const Project = ({ project }) => {
  const t = useTranslations('Project');
  return (
    <Page>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </Page>
  );
};

Project.messages = ['Project', ...Page.messages];

export async function getStaticProps({ params, locale }) {
  const data = await client.query({
    query: gql`
      query ProjectPage($slug: String, $locale: Locale!) {
        project(where: { slug: $slug }) {
          id
          slug
          title
          description
          localizations(locales: [$locale]) {
            title
            description
            locale
          }
        }
      }
    `,
    variables: {
      slug: params.projectSlug,
      locale,
    },
  });

  let project = data.data.project;

  if (project.localizations.length) {
    project = {
      ...project,
      ...project.localizations[0],
    };
  }

  return {
    props: {
      messages: pick(await import(`../../locales/${locale}.json`), Project.messages),
      project,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const data = await client.query({
    query: gql`
      query ProjectPage {
        projects {
          title
          description
          slug
        }
      }
    `,
  });

  const paths = data.data.projects.map(project => {
    return {
      params: {
        projectSlug: project.slug,
      },
    };
  });

  return {
    paths: [
      ...paths,
      ...paths.flatMap(path => {
        return locales.map(locale => {
          return {
            ...path,
            locale,
          };
        });
      }),
    ],
    fallback: false,
  };
}

export default Project;
