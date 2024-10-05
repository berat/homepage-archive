'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import ExternalLink from '../link';
import BlogList from '../list/blog';
import { Blog } from '@/.contentlayer/generated';
import Search from '@/components/search';

interface BlogProps {
  data: Blog[];
  page?: boolean;
}

const Blog: React.FC<BlogProps> = ({ data, page = false }) => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [displayData, setDisplayData] = useState<string>('');

  const blogData = useMemo(() => {
    return data.filter(item =>
      item.title.toLowerCase().includes(displayData.toLowerCase())
    );
  }, [data, displayData]);

  const onChangeSearch = (value: string) => {
    setSearchKey(value);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDisplayData(searchKey);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [searchKey]);

  return (
    <section className="text-slate-600 mt-10">
      <p className="text-lg leading-7 font-light">
        Blogumda, hem <b className="active">teknik</b> hem de{' '}
        <b className="active">kişisel</b> konulardan bahsediyorum. Frontend
        dünyasındaki <b className="active">deneyimlerimden</b>, yeni
        teknolojileri keşfetme heyecanımı ve proje geliştirme süreçlerimden
        bahsetmeyi planlıyorum. Bu aralar
        <b className="active-blue"> #buildinpublic</b> sevdalısıyım.
      </p>
      {page && <Search onChange={onChangeSearch} />}

      <BlogList data={blogData} page={page} />
      {!page && <ExternalLink text="Daha fazlası" href="/blog" />}
    </section>
  );
};

export default memo(Blog);
