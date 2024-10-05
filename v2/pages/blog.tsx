import { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';

import { getSortedPostsData } from 'lib/post';
import { allBlogDataTypes } from 'lib/types';

import { allBlogs } from 'contentlayer/generated';

import { GeneralContext } from 'context/general';

import { Inputs, Layout, Titles } from 'components';
import { PostCard } from 'components/cards';

interface BlogProps {
  blog: allBlogDataTypes[];
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('Tümü');
  const [posts, setPosts] = useState<allBlogDataTypes[]>(blog);
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {
    const filterByCategory = categoryFilter
      ? blog.filter(
          item =>
            (categoryFilter !== 'Tümü'
              ? item.category.indexOf(categoryFilter) + 1
              : item.category) &&
            (searchValue
              ? !item.title.toLowerCase().search(searchValue.toLowerCase())
              : item.title)
        )
      : blog;
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
      <Layout>
        <section id="blogs">
          <p className="subtitle">
            Aklıma gelenleri yazıya döktüğüm, deneyimlerinden bahsettiğim,
            teknik yazılarla sektöre katkı sağladığım blog sayfası.
            Aşağıdaki kategorilerden ilgini çeken içeriklere kolayca
            erişebilirsin.
          </p>
          <Titles.CategoriesTitle categories={categories} />
          <Inputs.SearchInput setSearchValue={setSearchValue} />
          <PostCard isPage data={posts} />
        </section>
      </Layout>
    </GeneralContext.Provider>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const allPosts = await getSortedPostsData();
  return {
    props: { blog: JSON.parse(JSON.stringify(allPosts)) },
    revalidate: 86400
  };
};

export default Blog;
