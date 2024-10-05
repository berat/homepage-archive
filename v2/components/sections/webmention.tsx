import { useMemo, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';

import { WebmentionType } from 'lib/types';

interface WebmentionProps {
  data: WebmentionType[];
  loading: boolean;
}

const Webmention: React.FC<WebmentionProps> = ({ data, loading }) => {
  const [likeTweet, setLikeTweet] = useState<string>();

  const commentData: WebmentionType[] = useMemo(
    () => data?.filter(item => ['reply', 'link'].includes(item.activity.type)),
    [data]
  );

  const likesData: WebmentionType[] = useMemo(
    () => data?.filter(item => ['like'].includes(item.activity.type)),
    [data]
  );
  if (!Array.isArray(data)) return null;

  if (loading) return <div>Loading...</div>;
  return (
    <div id="webmentions">
      <ul className="likes">
        {likesData.slice(0, 20).map((item: WebmentionType, index: number) => {
          const {
            source,
            data: { author }
          } = item;

          if (likeTweet === undefined && ~source.search('beratbozkurt0')) {
            setLikeTweet(source);
          }

          return (
            <li key={index}>
              <Image
                src={author.photo}
                alt={author.name}
                placeholder="blur"
                blurDataURL={author.photo}
                className="profilePhoto"
                width={40}
                height={40}
              />
            </li>
          );
        })}
        {likesData.length !== 0 && likesData.length > 20 && (
          <li className="last-like">+{likesData.length - 20}</li>
        )}
        {likesData.length !== 0 && (
          <a
            href={likeTweet ?? ''}
            target="_blank"
            className="normal"
            rel="noopener noreferrer"
          >
            {likesData.length} kişi <strong>beğendi</strong>
          </a>
        )}
      </ul>
      <ul className="comment">
        {commentData.map((item: WebmentionType, index: number) => {
          const {
            data: { author, content, url, published }
          } = item;
          const isOwnTweet: boolean =
            author?.url === 'https://twitter.com/beratbozkurt0';

          return (
            <div
              key={index}
              className={`mention ${isOwnTweet ? 'mention-own' : ''}`}
            >
              <div className="profilePhotoHolder">
                <Image
                  src={author?.photo}
                  alt={author?.name}
                  placeholder="blur"
                  blurDataURL={author?.photo}
                  width={45}
                  height={45}
                  className="profilePhoto"
                />
              </div>
              <div className="content">
                <strong className="author">{author?.name}</strong>
                {' • '}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link normal"
                >
                  {moment(published).format('DD MMMM YYYY')}
                </a>
                <div className="mentionText">
                  {content ? (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.split('\n')[0]
                      }}
                    />
                  ) : (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="url normal"
                    >
                      {url.replace(/https?:\/\//, '')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Webmention;
