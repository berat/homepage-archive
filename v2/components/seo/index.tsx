import Head from 'next/head';
import { useRouter } from 'next/router';

import { general } from 'lib/constants/';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  const router = useRouter();

  return (
    <Head>
      <title>
        {title ? `${title} | ${general.author.name}` : general.title}
      </title>
      <meta name="robots" content="follow, index" />
      <meta content={description ?? general.description} name="description" />
      <meta property="og:url" content={general.domain + router.asPath} />
      <link rel="canonical" href={general.domain + router.asPath} />
      <meta property="og:site_name" content={general.author.name} />
      <meta
        property="og:description"
        content={description ?? general.description}
      />
      <meta
        property="og:title"
        content={title ? `${title} | ${general.author.name}` : general.title}
      />
      <meta
        property="og:image"
        content={
          image ??
          `https://beratbozkurt.net/api/thumbnail?title=${
            title || general.author.name
          }`
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:site"
        content={'@' + general.social.twitter.split('/').slice(-1)}
      />
      <meta
        name="twitter:title"
        content={title ? `${title} | ${general.author.name}` : general.title}
      />
      <meta
        name="twitter:description"
        content={description ?? general.description}
      />
      <meta
        name="twitter:image"
        content={
          image ??
          `https://beratbozkurt.net/api/thumbnail?title=${
            title || general.author.name
          }`
        }
      />
      <link rel="shortcut icon" href="/favicon.svg" />
      <link
        rel="webmention"
        href="https://webmention.io/beratbozkurt.net/webmention"
      />
      <link
        rel="pingback"
        href="https://webmention.io/beratbozkurt.net/xmlrpc"
      />
    </Head>
  );
};

export default SEO;
