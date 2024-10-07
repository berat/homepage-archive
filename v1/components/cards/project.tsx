interface ProjectProps {
  url: string;
  name: string;
  icon: string;
  keywords: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  url,
  name,
  icon,
  keywords,
  description
}) => {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <header>
        <h2>
          <span itemProp="headline">{name}</span>
        </h2>
        <b>{icon}</b>
      </header>
      <ul>
        {keywords.map((tag, key) => (
          <li key={key}>{tag}</li>
        ))}
      </ul>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
