import Link from 'next/link';
import { memo } from 'react';

const Logo = () => {
  return (
    <h1 className="logo">
      <Link href="/">Berat Bozkurt</Link>
    </h1>
  );
};
export default memo(Logo);
