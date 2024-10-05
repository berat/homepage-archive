import { allBlogs } from 'contentlayer/generated';

const sortedBlogData = allBlogs.sort((a, b) => {
  if (new Date(a.date) > new Date(b.date)) {
    return -1;
  }
  return 1;
});

export const blogData = () => {
  const data = sortedBlogData.map(item => {
    const path: string = '/' + item._raw.flattenedPath;

    return {
      ...item,
      id: item._id,
      title: item.title,
      slug: item.slug,
      date: item.date,
      readingTime: item.readingTime.text.split(' ')[0],
      coverImage: item.coverImage
        ? '/posts/' + path.slice(6) + '/' + item.coverImage
        : undefined
    };
  });

  return data;
};

export const findBlogBySlug = (slug: string) => {
  const blog = blogData().find(item => item.slug === slug);
  return blog;
};
