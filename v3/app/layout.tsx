import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://beratbozkurt.net'),
  title: 'Berat Bozkurt | frontend developer',
  description: 'Berat Bozkurt, frontend developer, photography, blogging'
};

const isDevelopment = process.env.NODE_ENV === 'development';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="w-11/12 md:w-[768px] mx-auto my-12">
          <Header />
          {children}
        </div>
        <Analytics mode={'production'} />
        {/* {!isDevelopment && (
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
        )}
        {!isDevelopment && (
          <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        )} */}
      </body>
    </html>
  );
}
