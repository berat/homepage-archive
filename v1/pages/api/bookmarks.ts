import { fetchBookmarks } from 'lib/raindrop';
import { RaindropItemsType } from 'lib/types';
import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';

type FetchBookmarksType = {
  result: boolean;
  count?: number;
  errorMessage?: string;
  items?: RaindropItemsType[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const getBookmarks: FetchBookmarksType = await fetchBookmarks();

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    if (getBookmarks?.result === true) {
      const { items } = getBookmarks;

      const getCategories = items.flatMap(item => item.tags);

      const groupedBookmarks = items.reduce((acc: any, item: any) => {
        const getMonth = moment(item.created).format('MMMM YYYY');
        acc[getMonth] = acc[getMonth] || [];
        acc[getMonth].push(item);
        return acc;
      }, {});

      return res.status(200).json({
        bookmarks: groupedBookmarks,
        categories: Array.from(new Set(getCategories))
      });
    } else {
      return res.status(400).send({ err: getBookmarks.errorMessage });
    }
  } catch (err) {
    return res.status(404).send({ err });
  }
};

export default handler;
