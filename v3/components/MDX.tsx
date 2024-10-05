'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { TwitterTweetEmbed } from 'react-twitter-embed';

interface MdxProps {
  code: string;
}

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link
        className="text-black underline underline-offset-[6px] inline-flex gap-1 items-center text-lg"
        href={href}
        {...props}
      >
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return (
    <a
      className="text-blue-600 underline underline-offset-[6px] inline-flex gap-1 items-center text-lg"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

function RoundedImage(props: any) {
  return (
    <Image
      alt={props.alt}
      className="rounded-lg shadow-md p-4 mx-auto"
      quality={100}
      {...props}
    />
  );
}

const Tip = (props: any) => {
  return (
    <blockquote className="p-4 my-4 border-l-4 border-blue-300 bg-blue-50 dark:border-blue-500 dark:bg-blue-800">
      {props.children}
    </blockquote>
  );
};

const CustomTweet = (props: any) => {
  return (
    <div style={{ maxWidth: 550, width: '99%', margin: '0px auto' }}>
      <TwitterTweetEmbed tweetId={props.id} />
    </div>
  );
};

const Youtube = (props: any) => {
  const src = `https://www.youtube.com/embed/${props.id}`;

  return (
    <div className="youtube-container">
      <iframe
        width={'100%'}
        height={400}
        src={src}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export const Pre = (props: any) => {
  return (
    <pre {...props} className={'p-0 !bg-inherit break-words'}>
      {props.children}
    </pre>
  );
};

const Figure = (item: any) => {
  return (
    <figure className="w-11/12 md:w-[890px] mx-auto my-8 md:relative md:left-1/2 md:-translate-x-1/2">
      <div className={'columns-2 space-y-4'}>
        {item.children.map(({ props }: { props: any }) => {
          return (
            <Image
              key={props.src}
              alt={props.alt}
              {...props}
              loading="lazy"
              placeholder="blur"
              className="rounded-md shadow-md"
              blurDataURL={props.src}
              quality={100}
            />
          );
        })}
      </div>
      <figcaption className="text-sm text-center text-slate-400 py-2 pt-4">
        {item.children[0].props.alt}
      </figcaption>
    </figure>
  );
};

const Blockquote = (props: any) => {
  return (
    <blockquote className="p-4 my-4 border-l-4 border-gray-400 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
      {props.children}
    </blockquote>
  );
};

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Tip: Tip,
  Tweet: CustomTweet,
  Youtube: Youtube,
  blockquote: Blockquote,
  Figure: Figure,
  pre: Pre
};

export function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article
      className="article flex flex-col gap-5 leading-8 text-lg font-light text-slate-600 mt-6"
      itemScope
      itemType="http://schema.org/Article"
    >
      <Component components={{ ...components }} />
    </article>
  );
}
