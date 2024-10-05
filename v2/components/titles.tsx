import { useRouter } from 'next/router';
import { CategoryButtons } from './buttons';

export const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  const history = useRouter();
  return (
    <h2
      className="section-title"
      id={title}
      onClick={() => {
        navigator.clipboard.writeText(window.location + '#' + title);
        history.replace('#' + title);
      }}
    >
      <span>#</span> {title}
    </h2>
  );
};

export const CategoriesTitle: React.FC<{ categories: string[] }> = ({
  categories
}) => {
  return (
    <section className="category-filter">
      <h4>Kategoriler: </h4>
      <CategoryButtons categories={categories} />
    </section>
  );
};
