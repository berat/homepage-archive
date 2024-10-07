export interface ExperienceCardProps {
  start_date: {
    year: number;
    month: string | null;
  };
  end_date:
    | {
        year: number;
        month: string | null;
      }
    | string;
  company: string;
  title: string;
  tech_stacks: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  start_date: startDate,
  end_date: endDate,
  company,
  title,
  tech_stacks: techStacks
}) => {
  return (
    <li>
      <div className="dates">
        <div className="begining">
          <i>{startDate.year}</i>
          <span>{startDate.month}</span>
        </div>
        {typeof endDate === 'string' ? (
          <div className="end">
            <i className="now">{endDate}</i>{' '}
          </div>
        ) : (
          <div className="end">
            <i>{endDate.year}</i>
            <span>{endDate.month}</span>
          </div>
        )}
      </div>
      <div className="job">
        <h3>{company}</h3>
        <i>{title}</i>
      </div>
      <div className="stacks">
        Tech stacks:
        {techStacks.map((item: string, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </li>
  );
};

export default ExperienceCard;
