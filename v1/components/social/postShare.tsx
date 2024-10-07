import { useEffect, useState } from 'react';

import TwitterIcon from 'public/icons/twitter.svg';
import LinkedinIcon from 'public/icons/linkedin.svg';
import FacebookIcon from 'public/icons/facebook.svg';
import CopyIcon from 'public/icons/copy.svg';
import HeartIcon from 'public/icons/heart.svg';

interface PostSocialShareProps {
  url: string;
  title: string;
}

const PostSocialShare: React.FC<PostSocialShareProps> = ({ url, title }) => {
  const [like, setLike] = useState<number>(0);

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
    const { like: likeCount } = await response.json();
    setLike(likeCount);
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="bottom-article">
      <div className="share-post">
        <a
          href={`https://twitter.com/intent/tweet?url=${url}&via=beratbozkurt0&text=${title}`}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon width="21" height="21" fill="#3294da" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon width="21" height="21" fill="#1966c2" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon width="21" height="21" fill="#1B77F2" />
        </a>
        <CopyIcon
          onClick={copyClipboard}
          width="21"
          height="21"
          className="copy-icon"
        />
      </div>
      <div className="like-count">
        <button onClick={onLike}>
          <HeartIcon width="24" height="24" />
          {like}
        </button>
      </div>
    </div>
  );
};

export default PostSocialShare;
