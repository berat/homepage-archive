import Link from 'next/link';
import Image from 'next/image';
import { Tweet } from 'react-twitter-widgets';

const CustomLink = props => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage = props => {
  return <Image alt={props.alt} {...props} loading="lazy" />;
};

const CustomTweet = ({id}) => {
  return <Tweet tweetId={id} options={{ width: 600 }} />;
};

const Youtube = ({ id, width = '100%', height = 366 }) => {
  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="youtube-container">
      <iframe
        width={width}
        height={height}
        src={src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default {
  Image: RoundedImage,
  a: CustomLink,
  Tweet: CustomTweet,
  Youtube: Youtube
};
