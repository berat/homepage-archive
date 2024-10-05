'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavigationType } from '@/models/navigation';
import { NAVIGATION_ITEMS } from '@/constants/navigation';
import { isActiveLink } from '@/lib/helper';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex-wrap gap-y-6 flex gap-x-6 font-normal text-lg">
        {NAVIGATION_ITEMS.map((item: NavigationType) => {
          return (
            <li key={item.key}>
              <Link
                href={item.path}
                className={
                  isActiveLink(pathname, item.path) +
                  ' hover:text-black uppercase'
                }
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
