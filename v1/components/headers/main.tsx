import Link from 'next/link';
import { useRouter } from 'next/router';

import ThemeContext from 'context/theme';

import { general, menus } from 'lib/constants/';
import { MenusType } from 'lib/types';

import Moon from 'public/icons/moon.svg';
import Sun from 'public/icons/sun.svg';

const MainHeader = () => {
  const router = useRouter();

  const isActiveLink = (path: string) => {
    return router.pathname === path ? 'active' : '';
  };

  return (
    <header id="top">
      <h1>
        <Link href="/">
          <a>{general.author.name || null}</a>
        </Link>
      </h1>
      <ThemeContext.Consumer>
        {theme => (
          <nav id="navigation">
            <ul>
              {menus.map((item: MenusType) => (
                <li key={item.key} className={isActiveLink(item.path)}>
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
              <button name="theme" onClick={theme.toggleBlack}>
                {!theme.black ? (
                  <Moon width="20" fill="#656565" stroke="#656565" />
                ) : (
                  <Sun stroke="#FFCC33" width="20" />
                )}
              </button>
            </ul>
          </nav>
        )}
      </ThemeContext.Consumer>
    </header>
  );
};

export default MainHeader;
