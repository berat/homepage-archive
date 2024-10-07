import { allBlogs } from '.contentlayer/data';
import { Blog as BlogType } from '.contentlayer/types';
import { allBlogDataTypes, allBlogDataType } from './types';

export const allBlogData = allBlogs.map((item: BlogType) => {
  const path: string = '/' + item._raw.flattenedPath;

  return {
    path,
    id: item._id,
    slug: item.slug,
    readingTime: item.readingTime.minutes,
    title: item.title,
    date: item.date,
    cover: item.coverImage
      ? '/posts/' + path.slice(6) + '/' + item.coverImage
      : undefined,
    content: item.body.code,
    category: item.category,
    paragraph: item.body.raw
  };
});

export const getSortedPostsData = (count?: number): allBlogDataTypes[] => {
  return allBlogData
    .sort(
      (a: allBlogDataTypes, b: allBlogDataTypes) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .slice(0, count);
};

export const getPostBySlug = (path: string): allBlogDataType => {
  return allBlogData
    .sort(
      (a: allBlogDataTypes, b: allBlogDataTypes) =>
        Number(new Date(a.date)) - Number(new Date(b.date))
    )
    .reduce(
      (
        acc: any,
        item: allBlogDataTypes,
        index: number,
        array: allBlogDataTypes[]
      ) => {
        if (item.path.slice(6) === path) {
          let previous: allBlogDataTypes =
            index !== 0 ? array[index - 1] : null;
          let next: allBlogDataTypes =
            index + 1 !== array.length ? array[index + 1] : null;
          acc = { current: item, previous, next };
        }
        return acc;
      },
      {}
    );
};
