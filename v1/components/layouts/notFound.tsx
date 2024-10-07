import { SEO } from 'components';

interface NotFoundProps {
  title: string;
  description: string;
}

const NotFound: React.FC<NotFoundProps> = ({ title, description }) => {
  return (
    <>
      <SEO title={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default NotFound;
