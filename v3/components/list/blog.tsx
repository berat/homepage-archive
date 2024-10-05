'use client';

import { Blog } from '@/.contentlayer/generated';
import moment from 'moment';
import Link from 'next/link';
import { useMemo } from 'react';

type BlogListProps = {
  data: Blog[];
  page?: boolean;
};

const BlogList: React.FC<BlogListProps> = ({ data, page }) => {
  const formatedData = useMemo(() => {
    return data.reduce((acc: any, item: Blog, index: number, array: Blog[]) => {
      const date = moment(item.date, 'YYYY-MM-DD').format('YYYY').toString();
      acc[date] = acc[date] || [];
      acc[date].push(item);
      return acc;
    }, {});
  }, [data]);

  if (page) {
    return (
      <section>
        {Object.keys(formatedData)
          .sort((a: string, b: string) => Number(b) - Number(a))
          .map((key: string, index: number) => (
            <ul key={key} className="my-16 flex flex-col gap-[12px]">
              <h3 className="font-light text-2xl mb-2 text-slate-400">{key}</h3>
              {formatedData[key].map((item: Blog) => (
                <li key={item._id} className="flex flex-col">
                  <Link
                    className="text-lg font-medium text-slate-800"
                    href={'/blog/' + item.slug}
                  >
                    {item.title}
                  </Link>
                  <div className="text-gray-400 font-light flex items-center gap-1">
                    <span>{item.date}</span>
                    <span> • </span>
                    <span>{item.readingTime} dk okuma</span>
                  </div>
                </li>
              ))}
            </ul>
          ))}
      </section>
    );
  }
  return (
    <ul className="my-6 flex flex-col gap-[12px]">
      {data.map(item => (
        <li key={item._id} className="flex flex-col">
          <Link
            className="text-lg font-medium text-slate-800"
            href={`/blog/${item.slug}`}
          >
            {item.title}
          </Link>
          <div className="text-gray-400 font-light flex items-center gap-1">
            <span>{item.date}</span>
            <span> • </span>
            <span>{item.readingTime} dk okuma</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
