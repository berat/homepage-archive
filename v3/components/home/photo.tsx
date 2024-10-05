import { PhotoDataTypes } from '@/models/photos';
import ExternalLink from '../link';
import PhotoList from '../list/photo';

interface PhotoProps {
  data: PhotoDataTypes[];
  page?: boolean;
}

const Photo: React.FC<PhotoProps> = ({ data, page = false }) => {
  return (
    <section className="text-slate-600 mt-10">
      <p className="w-11/12 md:w-[768px] mx-auto text-lg leading-7 font-light">
        Mükemmel olan her anı <b className="active">fotoğraflamak</b> benim için
        büyük bir zevk. Güzellikleri ve özel anları sonsuza kadar dondurmak için
        her zaman kameranın arkasındayım.
      </p>
      <div className={page ? 'w-full mx-auto' : ''}>
        <PhotoList data={data} isPage={page} />
      </div>
      {!page && <ExternalLink text="Daha fazlası" href="/photos" />}
    </section>
  );
};

export default Photo;
