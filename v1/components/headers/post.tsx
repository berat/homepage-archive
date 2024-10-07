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
    <header>
      <div className="top-of-post-image">
        <h1 className="display-font" itemProp="headline">
          {title}
        </h1>
        <div className="top-of-header">
          <small>
            {moment(date).locale('tr').format('DD MMMM YYYY')} -{' '}
            {`${Math.round(readingTime)} dakika`}
          </small>
          <small> - {data?.view ?? 0}</small>
          <ul>
            {categories?.length > 0 &&
              categories.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
      </div>
      {cover && (
        <div className="post-cover">
          <Image
            src={cover}
            alt={title || ''}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}
    </header>
  );
};

export default PostHeader;
