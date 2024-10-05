import Link from 'next/link';
import Image from 'next/image';
import { Tweet } from 'react-twitter-widgets';

const CustomLink = props => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}  {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage = props => {
  return (
    <figure className="content-image">
      <Image
        alt={props.alt}
        {...props}
        loading="lazy"
        placeholder="blur"
        blurDataURL={props.src}
      />
      <figcaption>{props.alt}</figcaption>
    </figure>
  );
};

const Figure = ({ children }) => {
  return (
    <figure className="content-images">
      <div className="images">
        {children.map(({ props }) => {
          return (
            <Image
              key={props.src}
              alt={props.alt}
              {...props}
              loading="lazy"
              placeholder="blur"
              blurDataURL={props.src}
            />
          );
        })}
      </div>
      <figcaption>{children[0].props.alt}</figcaption>
    </figure>
  );
};

const CustomTweet = ({ id }) => {
  return <Tweet tweetId={id} options={{ width: 600 }} />;
};

const Youtube = ({ id, width = '100%', height = 550 }) => {
  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="youtube-container">
      <iframe
        width={width}
        height={height}
        src={src}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

const Blockquote = ({ children }) => {
  return (
    <blockquote className="blockquote display-font">{children}</blockquote>
  );
};

const TipBlockquote = ({ children }) => {
  return (
    <blockquote className="tip-blockquote">
      {children}
    </blockquote>
  );
};

export default {
  Image: RoundedImage,
  a: CustomLink,
  Tweet: CustomTweet,
  Youtube: Youtube,
  blockquote: Blockquote,
  Tip: TipBlockquote,
  Figure: Figure
};
