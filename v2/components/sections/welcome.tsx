import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { general } from 'lib/constants';

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="profile-photo">
        <Image
          src="/general/profile.png"
          alt="Berat Bozkurt"
          height={220}
          width={225}
          placeholder='blur'
          blurDataURL="/general/profile.png"
        />
      </div>
      <div className="info">
        <h2>Merhaba, Ben Berat Bozkurt 🤙🏼</h2>
        <h3 className="subtitle">Frontend developer olarak çalışıyorum</h3>
        <p>
          Fotoğraf çekmeyi, seyehat etmeyi seviyorum. Ayrıca yararlı bulduğum
          içerikleri{' '}
          <a href={general.social.twitter} rel="noreferrer" target="_blank">
            twitter
          </a>
          'da, açık kaynak projelerimi{' '}
          <a href={general.social.github} rel="noreferrer" target="_blank">
            github
          </a>
          'ta, çektiğim fotoğrafları ise{' '}
          <a href={general.social.unsplash} rel="noreferrer" target="_blank">
            unsplash
          </a>{' '}
          üzerinden paylaşıyorum. Ayrıca bu <Link href="/">blog</Link> da ise
          deneyimlerimden teknik yazılarımdan ve hayatımdaki gelişmelerden
          bahsediyorum.
        </p>
      </div>
    </section>
  );
};
export default memo(Welcome);
