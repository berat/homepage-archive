import classNames from 'classnames';
import { Buttons } from 'components';
import Clipboard from 'public/icons/clipboard.svg';
import Like from 'public/icons/like.svg';
import { useEffect, useState } from 'react';

const social = [
  {
    key: 'twitter',
    url: (url: string, title?: string) =>
      `https://twitter.com/intent/tweet?url=${url}&via=beratbozkurt0&text=${title}`
  },
  ,
  {
    key: 'facebook',
    url: (url: string) => 'https://www.facebook.com/sharer/sharer.php?u=' + url
  },
  {
    key: 'linkedin',
    url: (url: string) =>
      'https://www.linkedin.com/sharing/share-offsite/?url=' + url
  }
];

interface ShareSocialProps {
  url: string;
  title: string;
}

const ShareSocial: React.FC<ShareSocialProps> = ({ url, title }) => {
  const [isLiked, setLiked] = useState(false);
  const [like, setLike] = useState<number>(0);

  const likeClassName = classNames('social-button', {
    liked: isLiked,
    like: !isLiked
  });


  useEffect(() => {
    getLike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLike = async () => {
    const response = await fetch(`/api/like?title=${title}`, {
      method: 'GET'
    });
    const { like: likeCount } = await response.json();
    setLike(likeCount);
  };

  const onLike = async () => {
    const response = await fetch(`/api/like?title=${title}`, {
      method: 'POST'
    });
    setLiked(true);
    const { like: likeCount } = await response.json();
    setLike(likeCount);
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(url);
  };
  return (
    <section className="social-share primary">
      {social.map(item => (
        <Buttons.SocialButtons
          key={item.key}
          which={item.key}
          url={item.url(url, title)}
          isPrimary
        />
      ))}
      <div className={'social-button clipboard'}>
        <button onClick={copyClipboard}>
          <Clipboard /> Kopyala
        </button>
      </div>
      <div className={likeClassName}>
        <button
          onClick={onLike}
        >
          <Like /> Beğen ({like})
        </button>
      </div>
    </section>
  );
};

export default ShareSocial;
