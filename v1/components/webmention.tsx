import Image from 'next/image';
import moment from 'moment';

import { WebmentionType } from 'lib/types';

interface WebmentionProps {
  data: WebmentionType[];
  loading: boolean;
}

const Webmention: React.FC<WebmentionProps> = ({ data, loading }) => {
  if (!Array.isArray(data)) return null;
  const filterData: WebmentionType[] = data?.filter(item =>
    ['reply', 'link'].includes(item.activity.type)
  );

  return (
    <div id="webmentions" style={{ display: 'block' }}>
      {loading
        ? 'loading'
        : filterData.map((item: WebmentionType, index: number) => {
            const {
              data: { author, content, url, published }
            } = item;
            const isOwnTweet: boolean =
              author.url === 'https://twitter.com/beratbozkurt0';

            return (
              <div
                key={index}
                className={`mention ${isOwnTweet ? 'mention-own' : ''}`}
              >
                <div className="profilePhotoHolder">
                  <Image
                    src={author.photo}
                    alt={author.name}
                    className="profilePhoto"
                  />
                </div>
                <div className="content">
                  <strong className="author">{author.name}</strong>{' '}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <small className="mentionAction">
                      {moment(published).format('DD-MM-YYYY')}
                    </small>
                  </a>
                  <div className="mentionText">
                    {content ? (
                      <p dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="url"
                      >
                        {url.replace(/https?:\/\//, '')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Webmention;
