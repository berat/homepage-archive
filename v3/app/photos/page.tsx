import Divider from '@/components/divider';
import Photo from '@/components/home/photo';
import ContactList from '@/components/list/contact';

import { createApi } from 'unsplash-js';

const username: string = 'beratbozkurt0';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY as string,
  next: {
    revalidate: 172800 // twice day
  }
});

export const metadata = {
  title: 'Photos | Berat Bozkurt',
  description: 'Photos | Berat Bozkurt'
};

export default async function PhotosPage() {
  const [data1, data2, data3, data4, data5] = await Promise.all([
    unsplash.users.getPhotos({ username, page: 1, perPage: 100 }),
    unsplash.users.getPhotos({ username, page: 2, perPage: 100 }),
    unsplash.users.getPhotos({ username, page: 3, perPage: 100 }),
    unsplash.users.getPhotos({ username, page: 4, perPage: 100 }),
    unsplash.users.getPhotos({ username, page: 4, perPage: 100 })
  ]);

  if (!(data1.response?.results as any)) return null;

  return (
    <main>
      <Photo
        data={[
          ...(data1.response?.results as any),
          ...(data2.response?.results as any),
          ...(data3.response?.results as any),
          ...(data4.response?.results as any),
          ...(data5.response?.results as any)
        ]}
        page
      />
      <div className="w-11/12 md:w-[768px] mx-auto my-12">
        <Divider />
        <ContactList />
      </div>
    </main>
  );
}
