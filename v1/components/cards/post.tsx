import Link from 'next/link';
import moment from 'moment';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDX from '../MDX';

interface PostCardProps {
  title: string;
  slug: string;
  categories: string[];
  date: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  slug,
  categories,
  date,
  content
}) => {
  const isNewPost: boolean = moment(date).diff(new Date(), 'days') > -4;
  const Component = useMDXComponent(content);

  return (
    <Link href={slug}>
      <a>
        <article
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <div className="top-of-post-image">
              <h2 className="display-font" itemProp="headline">
                {isNewPost && <span className="new-post"></span>}
                {title}
              </h2>
              <div className="top-of-header">
                <small>
                  {moment(date).locale('tr').format('DD MMMM YYYY')}
                </small>
                <ul>
                  {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </header>
          <section className="content-summary">
            <Component
              components={
                {
                  ...MDX
                } as any
              }
            />
          </section>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
