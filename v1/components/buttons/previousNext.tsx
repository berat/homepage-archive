import Link from 'next/link';

interface PreviousNextPaginationProps {
  previous: {
    path: string;
    title: string;
  } | null;
  next: {
    path: string;
    title: string;
  } | null;
}

const PreviousNextPagination: React.FC<PreviousNextPaginationProps> = ({
  previous,
  next
}) => {
  return (
    <nav className="blog-post-nav">
      <li>
        {previous && (
          <Link href={previous.path}>
            <a>← {previous.title}</a>
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link href={next.path}>
            <a>{next.title} →</a>
          </Link>
        )}
      </li>
    </nav>
  );
};

export default PreviousNextPagination;
