import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { useLiveReload } from 'next-contentlayer/hooks';
import Router, { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { KBarProvider } from 'kbar';

import ThemeContext, { ThemeProvider } from 'context/theme';

// import * as gtag from 'lib/analytics';

import 'styles/style.scss';
import 'moment/locale/tr';
import { CmdKMenu } from 'components';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const history = useRouter();
  useLiveReload()
  
  const actions = [
    {
      id: 'homeAction',
      name: 'Anasayfa',
      shortcut: ['a'],
      keywords: 'anasayfa',
      section: 'Menüler',
      perform: () => history.push('/')
    },
    {
      id: 'aboutAction',
      name: 'Hakkımda',
      shortcut: ['h'],
      keywords: 'hakkımda',
      section: 'Menüler',
      perform: () => history.push('/about')
    },
    {
      id: 'blogAction',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'blog',
      section: 'Menüler',
      perform: () => history.push('/blog')
    },
    {
      id: 'journeyAction',
      name: 'Yolculuk',
      shortcut: ['y'],
      keywords: 'journey',
      section: 'Menüler',
      perform: () => history.push('/journey')
    },
    {
      id: 'bookmarkAction',
      name: 'Yer imleri',
      shortcut: ['y'],
      keywords: 'yer imleri',
      section: 'Menüler',
      perform: () => history.push('/bookmarks')
    },
    {
      id: 'photosAction',
      name: 'Fotoğraflar',
      shortcut: ['f'],
      keywords: 'fotoğraflar',
      section: 'Menüler',
      perform: () => history.push('/photos')
    },
    {
      id: 'usedAction',
      name: 'Neler Kullanıyorum',
      keywords: 'neler kullanıyorum, use',
      section: 'Popüler Yazılar',
      perform: () => history.push('/blog/neler-kullaniyorum')
    },
    {
      id: 'startAction',
      name: 'Yazılıma Nasıl Başlanılmamalı',
      keywords: 'yazılım, başlamak',
      section: 'Popüler Yazılar',
      perform: () => history.push('/blog/yazilima-nasil-baslanilmamali')
    },
    {
      id: 'twitterAction',
      name: 'Twitter',
      keywords: 'twitter',
      section: 'Sosyal Medya',
      perform: () => window.open('https://twitter.com/beratbozkurt0', '_blank')
    },
    {
      id: 'githubAction',
      name: 'Github',
      keywords: 'github',
      section: 'Sosyal Medya',
      perform: () => window.open('https://github.com/berat', '_blank')
    },
    {
      id: 'instagramAction',
      name: 'İnstagram',
      keywords: 'instagram',
      section: 'Sosyal Medya',
      perform: () =>
        window.open('https://instagram.com/beratbozkurt0', '_blank')
    },
    {
      id: 'githubAction',
      name: 'Github',
      keywords: 'github',
      section: 'Sosyal Medya',
      perform: () => window.open('https://github.com/berat', '_blank')
    },
    {
      id: 'linkedinAction',
      name: 'Linkedin',
      keywords: 'linkedin',
      section: 'Sosyal Medya',
      perform: () =>
        window.open('https://www.linkedin.com/in/beratbozkurt/', '_blank')
    },
    {
      id: 'superpeerAction',
      name: 'Superpeer',
      keywords: 'superpeer',
      section: 'Sosyal Medya',
      perform: () => window.open('https://superpeer.com/berat', '_blank')
    },
    {
      id: 'unsplashAction',
      name: 'Unsplash',
      keywords: 'unsplash',
      section: 'Sosyal Medya',
      perform: () =>
        window.open('https://unsplash.com/@beratbozkurt0', '_blank')
    }
  ];

  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     gtag.pageview(url);
  //   };
  //   Router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     Router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);

  return (
    <KBarProvider
      options={{
        enableHistory: true
      }}
      actions={actions}
    >
      <ThemeProvider>
        <ThemeContext.Consumer>
          {theme => (
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <div id={theme.black ? 'dark' : 'white'}>
                <CmdKMenu />
                <Component {...pageProps} />
                <Analytics />
              </div>
            </AnimatePresence>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </KBarProvider>
  );
};

export default App;
