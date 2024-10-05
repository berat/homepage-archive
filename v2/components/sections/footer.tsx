import { general } from 'lib/constants';
import Link from 'next/link';
import { memo } from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="h-card">
      <nav>
        {Object.keys(general.social).map((item: string) => {
          return (
            <Link
              key={item}
              href={general.social[item]}
              target="_blank"
              className="normal subtitle"
              rel="me"
              passHref
            >
              {item}
            </Link>
          );
        })}
      </nav>
      <h1 className="logo">Berat Bozkurt</h1>
    </footer>
  );
};

export default memo(Footer);
