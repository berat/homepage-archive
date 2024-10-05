import dynamic from 'next/dynamic';
import { getSortedPostsData } from 'lib/post';
import { allBlogDataTypes } from 'lib/types';
import { generateRssFeed } from 'lib/rss';
import { Layout, Loading, Titles } from 'components';

const PostCard = dynamic(() => import('components/cards/post'), {
  loading: Loading
});
const PhotoCard = dynamic(() => import('components/cards/photo'), {
  loading: Loading
});

interface HomeProps {
  blog: allBlogDataTypes[];
}

const Home: React.FC<HomeProps> = ({ blog }) => {
  return (
    <Layout isHomePage>
      <Titles.SectionTitle title="Son Yazılar" />
      <PostCard data={blog} />
      <Titles.SectionTitle title="Son Fotoğraflar" />
      <PhotoCard
        data={[
          {
            id: 1,
            href: 'https://unsplash.com/photos/1SZyMIAeIy0',
            title: 'Two people in train',
            image:
              'https://images.unsplash.com/photo-1660817271828-23ef30cfd02e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80'
          },
          {
            id: 2,
            href: 'https://unsplash.com/photos/w-HIKDnodVQ',
            title: '',
            image:
              'https://images.unsplash.com/photo-1655215614043-4ec0288a7fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          },
          {
            id: 3,
            href: 'https://unsplash.com/photos/1SZyMIAeIy0',
            title: '',
            image:
              'https://images.unsplash.com/photo-1655215658306-8e9be4984962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          }
        ]}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const blog = await getSortedPostsData(3);

  await generateRssFeed();

  return { props: { blog: JSON.parse(JSON.stringify(blog)) } };
}

export default Home;
