import { Project } from '@/.contentlayer/generated';
import { MDX } from '../MDX';
import ShareButtons from '../share';
import moment from 'moment';

interface ProjectDetailProps {
  post: Project;
  view?: number;
}

export default function ProjectDetail({ post, view }: ProjectDetailProps) {
  return (
    <section className="my-8">
      <h1 className="text-2xl font-medium text-slate-800 mt-4">
        {post.title} - {post.summary}
      </h1>
      <div className="text-gray-400 font-light flex justify-between items-center gap-1 -mb-2">
        <div>
          <span>{post.category}</span>
          <span> • </span>
          <span>%{post.percentage} ready</span>
        </div>
        <span>
          Last update:{' '}
          <b className="font-normal text-emerald-800">
            {moment(post.status, 'DD-MM-YYYY').format('DD MMM, YYYY')}
          </b>
        </span>
      </div>
      <MDX code={post.body.code} />
      {/* <Pagination /> */}
      <ShareButtons
        url={'https://beratbozkurt.net/' + post._raw.flattenedPath}
        title={post.title}
      />
    </section>
  );
}
