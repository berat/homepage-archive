import { journey as journeyData } from '@/content/journey';
import moment from 'moment';
import 'moment/locale/tr';

export const metadata = {
  title: 'Journey | Berat Bozkurt',
  description: 'Journey | Berat Bozkurt'
};

export default function Journey() {
  return (
    <main>
      <p className="text-slate-600 text-lg leading-7 font-light mt-10">
        Benim için önemli ve değerli olan <b className="active">anlar</b>ı,
        gelişmeleri ve kararları paylaştığım bu sayfada beni biraz daha yakından
        tanımış olacaksınız.
      </p>
      <ol className="mt-12 border-l border-neutral-300 dark:border-neutral-500">
        {journeyData.map(item => (
          <li key={item.date}>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 "></div>
              <p className="text-gray-400 font-light ">
                {moment(item.date, 'DD.MM.YYYY').format('DD MMMM YYYY')}
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-lg font-medium text-slate-800">
                {item.title}
              </h4>
              <p className="mb-3 font-light text-slate-600 leading-8">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
