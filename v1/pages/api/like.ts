import { NextApiRequest, NextApiResponse } from 'next';

import { getRecords, updateRecords } from 'lib/airtable';
import airtables from 'lib/constants/airtables';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.query;

  try {
    if (req.method === 'GET') {
      const allRecord = await getRecords(airtables.postDetail);
      const record = await allRecord.find(item => item.fields.id === title);

      return res.status(200).json({
        like: record.fields.likes
      });
    } else {
      const allRecord = await getRecords(airtables.postDetail);
      const record = await allRecord.find(item => item.fields.id === title);
      var result: number;

      delete record.fields.completed;
      updateRecords(airtables.postDetail, [
        {
          id: record.id,
          fields: {
            ...record.fields,
            likes: record.fields.likes + 1
          }
        }
      ]);

      result = record.fields.likes + 1;

      return res.status(200).json({
        like: result
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).send({ err });
  }
};

export default handler;
