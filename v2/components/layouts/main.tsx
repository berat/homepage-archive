import { useEffect, useState } from 'react';
import Router from 'next/router';
import { motion } from 'framer-motion';

import { SEO } from 'components';
import Loading from 'components/sections/loading';
import Navigation from 'components/navigation';
import Footer from 'components/sections/footer';
import Welcome from 'components/sections/welcome';

interface LayoutProps {
  children: React.ReactNode;
  isHomePage?: boolean;
  title?: string;
  description?: string;
  image?: string;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: -10, transition: { duration: 0.3 } },
  enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -10, y: 0, transition: { duration: 0.3 } }
};

const Layout: React.FC<LayoutProps> = ({
  children,
  isHomePage = false,
  ...props
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router]);

  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      id="homepage"
    >
      <Navigation />
      <SEO {...props} />
      {isHomePage && <Welcome />}
      {loading ? (
        <Loading />
      ) : (
        <section className="container">{children}</section>
      )}
      <Footer />
    </motion.main>
  );
};

export default Layout;
