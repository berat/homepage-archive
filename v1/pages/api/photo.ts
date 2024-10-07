import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

interface Photo {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
}
const username: string = 'beratbozkurt0';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const unsplash = createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY
    });

    const photos = await unsplash.users.getPhotos({ username, perPage: 50 });

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json({
      photos: photos.response.results
    });
  } catch (err) {
    return res.status(404).send({ err });
  }
};

export default handler;
