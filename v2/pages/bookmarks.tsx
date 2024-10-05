import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

import { RaindropItemsType } from 'lib/types';
import fetcher from 'lib/fetcher';

import { GeneralContext } from 'context/general';

import { Layout, Titles } from 'components';
import { BookmarkCard } from 'components/cards';

const Bookmark = () => {
  const { data } = useSWR<{
    bookmarks: { [date: string]: RaindropItemsType[] };
    categories: string[];
  }>('/api/bookmarks', fetcher);

  const [categoryFilter, setCategoryFilter] = useState<string>('Tümü');
  const [getCategories, setCategories] = useState<string[]>();
  const [bookmarksData, setBookmarksData] = useState<{
    [date: string]: RaindropItemsType[];
  }>();

  const newGroupList = useMemo(() => {
    if (data?.categories) {
      var newList = Object.keys(data.bookmarks).reduce((acc, item) => {
        var getLinksByDate = data.bookmarks[item].filter(bookmark => {
          if (bookmark.tags.includes(categoryFilter)) {
            return bookmark;
          }
        });
        if (getLinksByDate.length > 0) {
          acc[item] = getLinksByDate;
        }
        return acc;
      }, {});

      setBookmarksData(newList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter]);

  useEffect(() => {
    if (data?.categories) {
      if (categoryFilter === 'Tümü') {
        setBookmarksData(data.bookmarks);
      } else {
        newGroupList;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter, data]);

  useEffect(() => {
    if (data && Object.keys(data?.bookmarks).length > 0) {
      setCategories(['Tümü', ...data.categories]);
    }
  }, [data]);

  return (
    <GeneralContext.Provider
      value={{
        categoryFilter,
        setCategoryFilter
      }}
    >
      <Layout title="Yer İmleri">
        <section id="bookmarks" className="bookmarks">
          <p className="subtitle">
            Burada birtakım ilgimi çeken, beğendiğim, şaşırdığım, bilgilendiğim,
            vay be dediğim, kah eğlendiğim, kah üzüldüğüm, kah güldüğüm, kah
            ağladığım... bağlantıları; sizlere periyodik ve kategorize edilmiş
            şekilde paylaştığım bir sayfa. <br />
          </p>
          <Titles.CategoriesTitle categories={getCategories ?? []} />
          <BookmarkCard data={bookmarksData as any} />
        </section>
      </Layout>
    </GeneralContext.Provider>
  );
};

export default Bookmark;
