import { NextResponse } from 'next/server';

import { createRecords, getRecords, updateRecords } from '@/lib/airtable';
import * as airtables from '@/constants/airtable';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title');
  console.log('=>(route.ts:9) title', title);
  try {
    const allRecord = await getRecords(airtables.POST_DETAIL);
    console.log('=>(route.ts:12) airtables', airtables);
    console.log('=>(route.ts:11) allRecord', allRecord);
    const hasRecord = await allRecord.find(
      (item: any) => item.fields.id === title
    );

    if (!hasRecord) {
      createRecords(airtables.POST_DETAIL, [
        {
          fields: {
            id: title,
            views: 1,
            likes: 0
          }
        }
      ]);
      return NextResponse.json({ status: 200, data: 1 });
    }
    if (!!hasRecord) {
      delete hasRecord.fields.completed;
      updateRecords(airtables.POST_DETAIL, [
        {
          id: hasRecord.id,
          fields: {
            ...hasRecord.fields,
            views: hasRecord.fields.views + 1
          }
        }
      ]);

      return NextResponse.json({
        status: 200,
        data: hasRecord.fields.views ?? 0 + 1
      });
    }
  } catch (err) {
    console.log('=>(route.ts:48) err', err);
    return NextResponse.json({ status: 400, error: err });
  }
}
