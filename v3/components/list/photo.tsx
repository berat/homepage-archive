import { PhotoDataTypes } from '@/models/photos';
import Image from 'next/image';
import Link from 'next/link';

type PhotoListProps = {
  data: PhotoDataTypes[];
  isPage?: boolean;
};

const PhotoList: React.FC<PhotoListProps> = ({ data, isPage = false }) => {
  return (
    <ul
      className={`${
        isPage
          ? 'my-6 grid grid-cols-3 md:grid-cols-5 gap-4'
          : 'w-full my-6 flex gap-[10px]'
      }`}
    >
      {data?.map(item => (
        <li key={item.id}>
          <Link rel="noreferrer" target="_blank" href={item.links.html}>
            <Image
              src={item.urls.small}
              alt={item.description || ''}
              placeholder="blur"
              blurDataURL={item.urls.small}
              width={300}
              quality={100}
              height={400}
              className={`rounded-md ${
                !isPage
                  ? 'h-[150px] md:h-[300px] w-[150px] md:w-[300px]'
                  : 'w-auto h-auto '
              }`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
