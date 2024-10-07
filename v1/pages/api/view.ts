import { NextApiRequest, NextApiResponse } from 'next';

import { getRecords, createRecords, updateRecords } from 'lib/airtable';
import airtables from 'lib/constants/airtables';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.query;

  try {
    const allRecord = await getRecords(airtables.postDetail);
    const hasRecord = await allRecord.find(item => item.fields.id === title);
    var result: number;

    if (!hasRecord) {
      createRecords(airtables.postDetail, [
        {
          fields: {
            id: title,
            views: 1,
            likes: 0
          }
        }
      ]);
      result = 1;
    }
    if (!!hasRecord) {
      delete hasRecord.fields.completed;
      updateRecords(airtables.postDetail, [
        {
          id: hasRecord.id,
          fields: {
            ...hasRecord.fields,
            views: hasRecord.fields.views + 1
          }
        }
      ]);

      result = hasRecord.fields.views + 1;
    }

    return res.status(200).json({
      view: result
    });
  } catch (err) {
    return res.status(404).send({ err });
  }
};

export default handler;
