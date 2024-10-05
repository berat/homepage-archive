import Blog from '@/components/home/blog';
import Contact from '@/components/home/contact';
import Info from '@/components/home/info';
import Photo from '@/components/home/photo';
import { blogData } from '@/lib/blog';
import { createApi } from 'unsplash-js';
import Project from '@/components/home/project';

const username: string = 'beratbozkurt0';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string
});
export default async function Home() {
  const [data] = await Promise.all([
    unsplash.users.getPhotos({ username, perPage: 50 })
  ]);

  if (!(data.response?.results as any)) return null;

  return (
    <main>
      <Info />
      <Blog data={blogData().slice(0, 4)} />
      <Project />
      <Photo data={(data.response?.results as any).slice(0, 3)} />
      <Contact />
    </main>
  );
}
