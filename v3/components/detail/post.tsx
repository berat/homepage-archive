'use client';

import { Blog } from '@/.contentlayer/generated';
import Image from 'next/image';
import { MDX } from '../MDX';
import ShareButtons from '../share';

interface PostDetailProps {
  post: Blog;
  view?: number;
}

export default function PostDetail({ post, view }: PostDetailProps) {
  return (
    <section className="my-8">
      {post?.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          placeholder="blur"
          blurDataURL={post.coverImage}
          width={2040}
          height={400}
          className="h-full max-w-full md:max-w-[890px] relative left-1/2 -translate-x-1/2 rounded-md object-cover"
          priority
        />
      )}
      <h1 className="text-2xl font-medium text-slate-800 mt-4">{post.title}</h1>
      <div className="text-gray-400 font-light flex justify-between items-center gap-1 -mb-2">
        <div>
          <span>{post.date}</span>
          <span> • </span>
          <span>{post.readingTime} dk okuma</span>
        </div>
        <span>{view} views</span>
      </div>
      <MDX code={post.body.code} />
      {/* <Pagination /> */}
      <ShareButtons
        url={'https://beratbozkurt.net/' + post._raw.flattenedPath}
        title={post.title}
      />
    </section>
  );
}
