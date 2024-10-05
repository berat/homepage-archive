import { useCallback, useState } from 'react';
import useSWR from 'swr';
import Gallery from 'react-photo-gallery';

import { Layout, Loading } from 'components';
import fetcher from 'lib/fetcher';

interface Photo {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}
const Photos = () => {
  const { data } = useSWR<{ photos: Photo[] }>('/api/photo', fetcher);

  const openNewTab = useCallback(
    (event, { photo, index }) => {
      window.open(
        (data as any)?.photos[index].links.html,
        '_blank',
        'noopener,noreferrer'
      );
    },
    [data]
  );

  return (
    <Layout title={'Fotoğraflar'}>
      {!data?.photos ? (
        <Loading />
      ) : (
        <section id="posts">
          <p className="subtitle">
            Gözüme güzel gelen her anın fotoğrafını çekip çektiğim ve Adobe
            Lightroom ile düzenlediğim fotoğraflara ulaşabileceğiniz sayfa.
          </p>
          <Gallery
            direction="column"
            photos={(data as any)?.photos.map(item => ({
              src: item.urls.small,
              width: item.width,
              height: item.height
            }))}
            onClick={openNewTab}
          />
        </section>
      )}
    </Layout>
  );
};

export default Photos;
