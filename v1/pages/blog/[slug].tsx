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
  PostSocialShare,
  PreviousNextPagination,
  MDX,
  Webmention
} from 'components';

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
      description={article.paragraph}
    >
      <article
        className="blog-post"
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
        <section>
          <Component
            components={
              {
                ...MDX
              } as any
            }
          />
        </section>
        <PostSocialShare
          url={general.domain + article.path}
          title={article.title}
        />
        <PreviousNextPagination
          previous={previous && { path: previous.path, title: previous.title }}
          next={next && { path: next.path, title: next.title }}
        />
        <Webmention loading={!data} data={data} />
      </article>
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
