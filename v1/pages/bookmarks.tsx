/* eslint-disable react-hooks/exhaustive-deps */
import { CategoriesTitle, Layout } from 'components';
import fetcher from 'lib/fetcher';
import { RaindropItemsType } from 'lib/types';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import { GeneralContext } from 'context/general';
import useSWR from 'swr';

const About = () => {
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
  }, [categoryFilter]);

  useEffect(() => {
    if (data?.categories) {
      if (categoryFilter === 'Tümü') {
        setBookmarksData(data.bookmarks);
      } else {
        newGroupList;
      }
    }
  }, [categoryFilter, data]);

  useEffect(() => {
    if (data && Object.keys(data?.bookmarks).length > 0) {
      setCategories(['Tümü', ...data.categories]);
    }
  }, [data]);

  if (data === undefined) return 'looading';

  return (
    <GeneralContext.Provider
      value={{
        categoryFilter,
        setCategoryFilter
      }}
    >
      <Layout title="Yer İmleri">
        <section id="bookmarks" className="bookmarks">
          <h1>Bağlantılar</h1>
          <p>
            Burada birtakım{' '}
            <i>
              hoşuma giden, ilgimi çeken, beğendiğim, şaşırdığım, bilgilendiğim,
              vay be dediğim, kah eğlendiğim, kah üzüldüğüm, kah güldüğüm, kah
              ağladığım...
            </i>{' '}
            bağlantıları; sizlere periyodik ve kategorize edilmiş şekilde
            paylaştığım bir sayfa. <br />
          </p>
          <CategoriesTitle categories={getCategories ?? []} />
          {bookmarksData &&
            Object.keys(bookmarksData).map((key: string, index: number) => (
              <ul key={index} id="links">
                <h3>{key}</h3>

                {bookmarksData[key].map(item => (
                  <li key={item._id}>
                    <span>
                      {item.domain} • {moment(item.created).fromNow()}
                    </span>
                    <a href={item.link}>{item.title}</a>
                    <p>{item.excerpt}</p>
                  </li>
                ))}
              </ul>
            ))}
        </section>
      </Layout>
    </GeneralContext.Provider>
  );
};

export default About;
