import { memo } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { allBlogDataTypes } from 'lib/types';

import { OtherButton } from 'components/buttons';
import MDX from '../MDX';

interface PostCardProps {
  data: allBlogDataTypes[];
  isPage?: boolean;
}
const Post = ({ id, title, content, category, slug, read, date }) => {
  const Component = useMDXComponent(content);

  return (
    <article key={id}>
      <h3>
        <Link href={'/blog/' + slug} className="normal">
          {title}
        </Link>
      </h3>
      <footer>
        {category.join('-')} • {moment(date).format('DD MMMM YYYY')} •{' '}
        {Math.ceil(read)} dk okuma
      </footer>
      <summary>
        <Component
          components={
            {
              ...MDX
            } as any
          }
        />
      </summary>
    </article>
  );
};
const PostCard: React.FC<PostCardProps> = ({ data, isPage = false }) => {
  return (
    <section id="post-card">
      {data.map((post: allBlogDataTypes) => {
        const {
          id,
          title,
          slug,
          content,
          category,
          readingTime: read,
          date
        } = post;

        return (
          <Post
            key={id}
            slug={slug}
            id={id}
            title={title}
            content={content}
            category={category}
            read={read}
            date={date}
          />
        );
      })}
      {!isPage && <OtherButton href="/blog" text="Diğer yazılara göz at!" />}
    </section>
  );
};

export default memo(PostCard);
