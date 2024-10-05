import { allProjects } from 'contentlayer/generated';

export const projectData = () => {
  const data = allProjects.map(item => {
    return {
      ...item,
      id: item._id,
      title: item.title,
      slug: item.slug
    };
  });

  return data;
};

export const findProjectBySlug = (slug: string) => {
  const blog = projectData().find(item => item.slug === slug);
  return blog;
};
