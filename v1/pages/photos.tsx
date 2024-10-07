import { useCallback, useState } from 'react';
import useSWR from 'swr';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

import { Layout } from 'components';
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
  const { data, error } = useSWR('/api/photo', fetcher);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };


  return (
    <Layout title={'Fotoğraflar'}>
      {!data ? (
        '...'
      ) : (
        <section id="posts">
          <Gallery
            photos={(data as any).photos.map(item => ({
              src: item.urls.small,
              width: item.width,
              height: item.height
            }))}
            onClick={openLightbox}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={(data as any).photos.map(item => ({
                    source: item.urls.regular,
                    id: item.id
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </section>
      )}
    </Layout>
  );
};

export default Photos;
