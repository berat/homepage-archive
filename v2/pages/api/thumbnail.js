import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = {
  runtime: 'experimental-edge'
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const hasUrl = searchParams.get('url');

    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Berat Bozkurt';

    const url = `beratbozkurt.net${hasUrl ? `/${hasUrl}` : ''}`;

    const content = (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white'
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              marginLeft: 16,
              fontSize: 21,
              color: '#39484f',
              fontWeight: 400
            }}
          >
            @beratbozkurt0
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 50
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px 30px',
              margin: '0 60px',
              fontSize: 40,
              width: 'auto',
              textAlign: 'center',
              backgroundColor: '#39484f',
              borderRadius: 5,
              color: 'white',
              lineHeight: 1.4
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
              textAlign: 'center',
              backgroundColor: '#39484f',
              color: 'white',
              borderRadius: 5,
              lineHeight: 1.4,
              padding: '10px 20px'
            }}
          >
            <span style={{ fontSize: 20 }}>{url}</span>
          </div>
        </div>
      </div>
    );

    return new ImageResponse(content, {
      width: 850,
      height: 500
    });
  } catch (e) {
    return new Response('Failed to generate the image', {
      status: 500
    });
  }
}
