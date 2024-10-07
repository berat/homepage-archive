import { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';

import { allBlogs } from '.contentlayer/data';

import { GeneralContext } from 'context/general';

import { allBlogDataTypes } from 'lib/types';
import { getSortedPostsData } from 'lib/post';

import { CategoriesTitle, Layout, PostCard, SearchInput } from 'components';
interface BlogProps {
  allPosts: allBlogDataTypes[];
}

const Blog: React.FC<BlogProps> = ({ allPosts }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('Tümü');
  const [posts, setPosts] = useState<allBlogDataTypes[]>(allPosts);
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {
    const filterByCategory = categoryFilter
      ? allPosts.filter(
          item =>
            (categoryFilter !== 'Tümü'
              ? item.category.indexOf(categoryFilter) + 1
              : item.category) &&
            (searchValue
              ? !item.title.toLowerCase().search(searchValue.toLowerCase())
              : item.title)
        )
      : allPosts;
    setPosts(filterByCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter, searchValue]);

  const categories = useMemo(
    () =>
      Array.from(new Set(['Tümü', ...allBlogs.flatMap(item => item.category)])),
    []
  );
  return (
    <GeneralContext.Provider
      value={{
        categoryFilter,
        setCategoryFilter
      }}
    >
      <Layout title="Blog">
        <section id="posts">
          <CategoriesTitle categories={categories} />
          <SearchInput setSearchValue={setSearchValue} />
          <ul className="posts-list">
            {posts.map((item: allBlogDataTypes) => (
              <li key={item.id}>
                <PostCard
                  title={item.title}
                  slug={item.path}
                  content={item.content}
                  date={item.date}
                  categories={item.category}
                />
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </GeneralContext.Provider>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const allPosts = await getSortedPostsData();
  return {
    props: { allPosts: JSON.parse(JSON.stringify(allPosts)) },
    revalidate: 86400
  };
};

export default Blog;
