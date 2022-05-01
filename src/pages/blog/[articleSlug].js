import { gql } from '@apollo/client';
import pick from 'lodash/pick';
import Page from '@components/Page';
import client from '@src/apollo-client';
import { useTranslations } from 'next-intl';

const BlogPost = ({ article }) => {
  const t = useTranslations('Project');
  console.log(article);
  return (
    <Page>
      <h2>{article.title}</h2>
    </Page>
  );
};

// Project.messages = ['Project', ...Page.messages];

export async function getStaticProps({ params, locale }) {
  const data = await client.query({
    query: gql`
      query BlogPostPage($slug: String) {
        blogpost(where: { slug: $slug }) {
          id
          slug
          title
        }
      }
    `,
    //   query BlogPostPage($slug: String, $locale: Locale!) {
    //     project(where: { slug: $slug }) {
    //       id
    //       slug
    //       title
    //       article
    //       localizations(locales: [$locale]) {
    //         title
    //         article
    //         locale
    //       }
    //     }
    //   }

    variables: {
      slug: params.articleSlug,
      //   locale,
    },
  });

  let article = data.data.blogpost;

  //   if (article.localizations.length) {
  //     article = {
  //       ...article,
  //       ...article.localizations[0],
  //     };
  //   }

  return {
    props: {
      messages: pick(await import(`../../locales/${locale}.json`), BlogPost.messages),
      article,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const data = await client.query({
    query: gql`
      query ArticlePage {
        blogposts {
          id
          title
          article
          slug
        }
      }
    `,
  });

  const paths = data.data.blogposts.map(blog => {
    return {
      params: {
        articleSlug: blog.slug,
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

export default BlogPost;
