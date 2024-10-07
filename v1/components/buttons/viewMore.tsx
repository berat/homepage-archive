import Link from 'next/link';

import Right from 'public/icons/arrow-right.svg'

const ViewMoreButton = () => {
  return (
    <button className="index-view-more">
      <Link href="/blog">
        <a>
          Diğer Yazılara Gözat <Right />
        </a>
      </Link>
    </button>
  );
};

export default ViewMoreButton;
