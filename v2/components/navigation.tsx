import { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menus } from 'lib/constants';
import { MenusType } from 'lib/types';
import { isActiveLink } from 'lib/helper';
import CmdkIcon from '/public/icons/command.svg';
import { useKBar } from 'kbar';

const Navigation = () => {
  const { pathname } = useRouter();
  const { query } = useKBar();

  return (
    <nav id="navigation">
      {menus.map((item: MenusType) => (
        <li key={item.key} className={isActiveLink(pathname, item.path)}>
          <Link href={item.path}>
           {item.title}
          </Link>
        </li>
      ))}
      <button className="cmdk" onClick={query.toggle}>
        <CmdkIcon />
      </button>
    </nav>
  );
};
export default memo(Navigation);
