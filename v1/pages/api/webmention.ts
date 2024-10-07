import { NextApiRequest, NextApiResponse } from 'next';

const siteURL = 'https://beratbozkurt.net/blog/';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = req.query;
    const response = await fetch(
      `https://webmention.io/api/mentions.json?token=gHp4yyAsI9ceGXUO_YWZiA&&per-page=150&target=${siteURL}${slug}/`
    );
    const { links: data } = await response.json();
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json(data);
  } catch (err) {
    return res.status(404).send({ err });
  }
};

export default handler;
