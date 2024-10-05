import moment from 'moment';
import { memo, useMemo } from 'react';
import { journey as data } from 'lib/constants/journey';
import { groupedByDate } from 'lib/helpers';
import { Titles, Loading } from 'components';

interface JourneyCardProps {
  date: string;
  title: string;
  description: string;
}

const JourneyCard = () => {
  const dataGroupedByDate = useMemo(
    () => groupedByDate(data, 'date', 'DD.MM.YYYY', 'YYYY'),
    []
  );

  return (
    <section id="journey-card">
      {Object.keys(dataGroupedByDate)
        .sort((a, b) => Number(b) - Number(a))
        .map((key: string, index: number) => (
          <ul key={index} id="links">
            <Titles.SectionTitle title={key} />

            {dataGroupedByDate[key]
              .sort(
                (a: JourneyCardProps, b: JourneyCardProps) =>
                  Number(moment(b.date, 'DD.MM.YYYY').format('DDMMYYYY')) -
                  Number(moment(a.date, 'DD.MM.YYYY').format('DDMMYYYY'))
              )
              .map((journey: JourneyCardProps, index: number) => {
                const { date, description, title } = journey;
                return (
                  <article key={index}>
                    <strong id={moment(date, 'DD.MM.YYYY').format('DDMMMMYYYY')}>
                      {moment(date, 'DD.MM.YYYY').format('DD MMMM YYYY')}
                    </strong>
                    <div className="content">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                );
              })}
          </ul>
        ))}
    </section>
  );
};

export default memo(JourneyCard);
