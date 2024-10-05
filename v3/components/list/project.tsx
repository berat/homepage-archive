import Image from 'next/image';
import Link from 'next/link';
import linkIcon from '@/public/icons/link-black.svg';
import { Project } from '@/.contentlayer/generated';

type ProjectListProps = {
  data: Project[];
};

const ProjectList: React.FC<ProjectListProps> = ({ data }) => {
  return (
    <ul className="my-6 flex flex-wrap gap-[30px]">
      {data.map((item: Project) => (
        <li
          key={item._id}
          className="flex-1 grow rounded-md bg-blue-50 hover:bg-blue-100"
        >
          <Link
            className="flex flex-1 text-xl font-medium py-4 px-5"
            href={`/project/${item.slug}`}
          >
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-gray-800">{item.title}</span>
              <small className="font-light text-base">{item.summary}</small>
              <div className="text-slate-500 text-base font-light flex items-center gap-1">
                <span>{item.category}</span>
                <span> • </span>
                <span>%{item.percentage} hazır</span>
              </div>
            </div>
            <Image priority src={linkIcon} alt="go to link" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
