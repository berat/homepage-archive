import { memo } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { RaindropItemsType } from 'lib/types';
import { Titles, Loading } from 'components';

const Card = ({ id, domain, link, title, content, category, date }) => {
  return (
    <article key={id}>
      <h3>
        <Link href={link} className="normal" passHref>
          {title}
        </Link>
      </h3>
      <footer>
        {domain} • {category.join('-')} • {moment(date).fromNow()}
      </footer>
      <summary>{content}</summary>
    </article>
  );
};
const BookmarkCard: React.FC<{ data: RaindropItemsType[] | undefined }> = ({
  data
}) => {
  const links = data && Array.isArray(Object.keys(data));

  if (!links) return <Loading />;
  return (
    <section id="bookmark-card">
      {links &&
        Object.keys(data).map((key: string, index: number) => (
          <ul key={index} id="links">
            <Titles.SectionTitle title={key} />
            {data[key].map((item: RaindropItemsType) => {
              const {
                _id,
                domain,
                tags: category,
                created,
                title,
                link,
                excerpt
              } = item;

              return (
                <Card
                  key={_id}
                  id={_id}
                  title={title}
                  content={excerpt}
                  category={category}
                  domain={domain}
                  link={link}
                  date={created}
                />
              );
            })}
          </ul>
        ))}
    </section>
  );
};

export default memo(BookmarkCard);
