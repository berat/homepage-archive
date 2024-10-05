import { BookmarksType } from '@/models/bookmarks';
import moment from 'moment';
import Link from 'next/link';

interface BookmarksDetailProps {
  data: {
    [key in string]: BookmarksType[];
  };
}

export default function BookmarksDetail({ data }: BookmarksDetailProps) {
  return (
    <section>
      {Object.keys(data).map((key: string, index: number) => (
        <ul key={key} className="my-16 flex flex-col gap-[12px]">
          <h3 className="font-light text-2xl mb-2 text-slate-400">{key}</h3>
          {data[key].map((item: BookmarksType) => (
            <li key={item._id} className="flex flex-col">
              <Link
                className="text-lg font-medium text-slate-800 leading-8"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>
              <div className="text-gray-400 font-light flex items-center gap-1">
                <span>{item.domain}</span>
                <span> • </span>
                <span>{moment(item.created).fromNow()}</span>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
}
