import moment from 'moment';
import Link from 'next/link';

interface PreviousNextPaginationProps {
  previous: {
    path: string;
    title: string;
    date: string;
    read: number;
  } | null;
  next: {
    path: string;
    title: string;
    date: string;
    read: number;
  } | null;
}

const PreviousNextPagination: React.FC<PreviousNextPaginationProps> = ({
  previous,
  next
}) => {
  return (
    <nav className="post-pagination">
      {previous && (
        <li className="previous">
          <Link href={previous.path} className="normal">
              <span>← Önceki Yazı </span>
              {previous.title}
              <footer>
                {moment(previous.date).format('DD MMMM YYYY')} •{' '}
                {Math.ceil(previous.read)} dk okuma
              </footer>
          </Link>
        </li>
      )}
      {next && (
        <li className="next">
          <Link href={next.path} className="normal">
              <span>Sonraki Yazı →</span>
              {next.title}
              <footer>
                {moment(next.date).format('DD MMMM YYYY')} •{' '}
                {Math.ceil(next.read)} dk okuma
              </footer>
          </Link>
        </li>
      )}
    </nav>
  );
};

export default PreviousNextPagination;
