/* eslint-disable @next/next/no-img-element */
import {ImageResponse} from 'next/og';
import {NextRequest} from 'next/server';
import {Inter} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get('title');

  return new ImageResponse(
    (
      <div
        className={inter.className}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '200px',
          justifyContent: 'center',
          backgroundImage: 'url(https://beratbozkurt.net/images/og-bg.png)'
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 110,
            color: 'black',
            lineHeight: '130px',
            whiteSpace: 'pre-wrap',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontWeight: '500'
          }}
        >
          {postTitle}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <img
            src="https://beratbozkurt.net/images/photo.jpg"
            alt="Berat Bozkurt"
            style={{
              borderRadius: 6
            }}
            width={225}
            height={250}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '60px'
            }}
          >
            <h1
              style={{
                color: '#4B5562',
                fontSize: 48,
                fontWeight: 600
              }}
            >
              beratbozkurt.net
            </h1>
            <h2
              style={{
                color: ' #8D9195',
                fontSize: 32,
                marginTop: -20,
                fontWeight: 200
              }}
            >
              blogging • shutterbug • frontend developer
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080
    }
  );
}
