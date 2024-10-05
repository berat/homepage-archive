import BookmarksDetail from '@/components/detail/bookmarks';
import { getBookmarks } from '@/services/bookmarks';

export const metadata = {
  title: 'Bookmarks | Berat Bozkurt',
  description: 'Bookmarks | Berat Bozkurt'
};

export default async function Bookmarks() {
  const { data } = await getBookmarks();

  if (!data) return null;

  return (
    <main>
      <p className="text-slate-600 text-lg leading-7 font-light mt-10">
        İnternette gezinirken öğrendiğim, hoşuma giden, ilgimi çeken; belli bir
        kategorisi olmayan web sayfalarını burada paylaşıyorum. Burayı bir{' '}
        <b className="active">keşif</b> alanı olarak da düşenebilirsiniz.
      </p>
      <BookmarksDetail data={data} />
    </main>
  );
}
export const dynamic = 'force-dynamic';
