import { OtherButton } from 'components/buttons';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

interface PhotoCardProps {
  id: string | number;
  href: string;
  title: string;
  image: string;
}

const PhotoCard: React.FC<{ data: PhotoCardProps[] }> = ({ data }) => {
  return (
    <section id="photo-card">
      {data.map((photo: PhotoCardProps) => {
        const { id, href, image, title } = photo;
        return (
          <article key={id}>
            <Link
              href={href}
              className="normal"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <Image
                src={image}
                alt={title}
                placeholder="blur"
                blurDataURL={image}
                height={450}
                width={350}
              />
            </Link>
          </article>
        );
      })}
      <OtherButton href="/photos" text="Diğer fotoğraflara göz at!" />
    </section>
  );
};

export default memo(PhotoCard);
