import { NextResponse } from 'next/server';
import { groupedByDate } from '@/lib/helper';

const collectionId: number = 25106674;
export const runtime = 'edge';
export const revalidate = 3600;

export async function GET() {
  try {
    const url = `https://api.raindrop.io/rest/v1/raindrops/0?collectionId=${collectionId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.RAINDROP_API_KEY
      }
    });
    const data = await response.json();

    if (data.result === true) {
      const { items } = data;

      return NextResponse.json({
        status: 200,
        data: groupedByDate(items, 'created', undefined, 'MMMM YYYY')
      });
    } else {
      return NextResponse.json({ status: 400, err: data.errorMessage });
    }
  } catch (err) {
    return NextResponse.json({ status: 400 });
  }
}
