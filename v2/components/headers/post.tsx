import moment from 'moment';
import Image from 'next/image';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';

interface PostHeaderProps {
  title: string;
  date: string;
  categories: string[];
  cover: string | undefined;
  readingTime: number;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  date,
  categories,
  cover,
  readingTime
}) => {
  const { data } = useSWR<{ view: number }>(
    '/api/view?title=' + title,
    fetcher,
    {
      revalidateOnFocus: false
    }
  );
  return (
    <header className="post-header">
      <div className="top-of-post-image">
        <h1 className="p-name" itemProp="headline">
          {title}
        </h1>
        <footer>
          {categories.join('-')} • {moment(date).format('DD MMMM YYYY')} •{' '}
          {Math.ceil(readingTime)} dk okuma • {data?.view ?? 0} görüntülenme
        </footer>
      </div>
      {cover && (
        <div className="post-cover">
          <Image
            src={cover}
            alt={title || ''}
            placeholder="blur"
            blurDataURL={cover}
            width={900}
            height={400}
          />
        </div>
      )}
    </header>
  );
};

export default PostHeader;
