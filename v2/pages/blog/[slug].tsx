import { GetServerSideProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { allBlogDataType, allBlogDataTypes, WebmentionType } from 'lib/types';
import { getPostBySlug, getSortedPostsData } from 'lib/post';
import { general } from 'lib/constants';

import {
  Layout,
  PostHeader,
  MDX,
  ShareSocial,
  Webmention,
  Pagination
} from 'components';
import SubscribeCard from 'components/cards/subscribe';

interface BlogPostProp {
  posts: allBlogDataType;
  tweets: any[];
}

const BlogPost: React.FC<BlogPostProp> = ({ posts, tweets }) => {
  const { current: article, previous, next } = posts;
  const Component = useMDXComponent(article?.content);

  const { data } = useSWR<WebmentionType[]>(
    '/api/webmention?slug=' + article.slug,
    fetcher,
    { revalidateOnFocus: false }
  );
  return (
    <Layout
      title={article.title}
      image={general.domain + article.cover}
      description={article.paragraph.slice(0, 140)}
    >
      <article
        className="blog-post h-entry"
        itemScope
        itemType="http://schema.org/Article"
      >
        <PostHeader
          title={article.title}
          date={article.date}
          readingTime={article.readingTime}
          categories={article.category}
          cover={article.cover}
        />
        <section className="content e-content">
          <Component
            components={
              {
                ...MDX
              } as any
            }
          />
        </section>
        <SubscribeCard />
      </article>
      <ShareSocial url={general.domain + article.path} title={article.title} />
      <Pagination
        previous={
          previous && {
            path: previous.path,
            title: previous.title,
            date: previous.date,
            read: previous.readingTime
          }
        }
        next={
          next && {
            path: next.path,
            title: next.title,
            date: next.date,
            read: next.readingTime
          }
        }
      />
      <Webmention loading={!data} data={data} />
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: getSortedPostsData().map((item: allBlogDataTypes) => {
      return {
        params: { slug: item.slug }
      };
    }),
    fallback: false
  };
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const posts = getPostBySlug(params.slug as string);

  return { props: { posts: JSON.parse(JSON.stringify(posts)) } };
};

export default BlogPost;
