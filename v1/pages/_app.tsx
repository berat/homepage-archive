import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { AnimatePresence } from 'framer-motion';

import ThemeContext, { ThemeProvider } from 'context/theme';

import * as gtag from 'lib/analytics';

import 'styles/style.scss';
import 'moment/locale/tr';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {theme => (
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <div id={theme.black ? 'dark' : 'white'}>
              <Component {...pageProps} />
            </div>
          </AnimatePresence>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
