import { gql } from '@apollo/client';
import pick from 'lodash/pick';
import Page from '@components/Page';
import client from '@src/apollo-client';
import { useTranslations } from 'next-intl';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Logo from '@components/shared/Logo';

const components = { Logo };

const BlogPost = ({ blogpost }) => {
  //   const t = useTranslations('Project');
  return (
    <Page>
      <h2>{blogpost.title}</h2>
      <MDXRemote {...blogpost.article} components={components} />
    </Page>
  );
};

BlogPost.messages = ['BlogPost', ...Page.messages];

export async function getStaticProps({ params, locale }) {
  const data = await client.query({
    query: gql`
      query BlogPostPage($slug: String) {
        blogpost(where: { slug: $slug }) {
          id
          slug
          title
          article
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
      slug: params.blogpostSlug,
      //   locale,
    },
  });

  let blogpost = data.data.blogpost;

  //   if (article.localizations.length) {
  //     article = {
  //       ...article,
  //       ...article.localizations[0],
  //     };
  //   }

  return {
    props: {
      messages: pick(await import(`../../locales/${locale}.json`), BlogPost.messages),
      blogpost: {
        ...blogpost,
        article: await serialize(blogpost.article),
      },
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
          slug
        }
      }
    `,
  });

  const paths = data.data.blogposts.map(blog => {
    return {
      params: {
        blogpostSlug: blog.slug,
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
