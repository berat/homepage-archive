import Image from 'next/image';

import { general } from 'lib/constants/';

const Welcome = () => {
  return (
    <section className="welcome">
      {general.author.photo && (
        <div className="bio-avatar">
          <Image
            src={general.author.photo}
            width="175"
            height="175"
            alt={general.author.name || ''}
            objectFit="cover"
          />
        </div>
      )}
      <h2>Selam, ben Berat</h2>
      <p className="display-font">
        front-end developer olarak çalışıyorum. Ayrıca yararlı bulduğum
        içerikleri ve deneyimlerimi{' '}
        <a href={general.social.twitter} rel="noreferrer" target="_blank">
          twitter
        </a>
        'da, açık kaynak projelerimi{' '}
        <a href={general.social.github} rel="noreferrer" target="_blank">
          github
        </a>
        'ta, gözüme güzel gelen her şeyi{' '}
        <a href={general.social.unsplash} rel="noreferrer" target="_blank">
          unsplash
        </a>
        'da paylaşıyorum.
      </p>
    </section>
  );
};

export default Welcome;
