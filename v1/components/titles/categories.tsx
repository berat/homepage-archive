import { useContext } from 'react';

import { GeneralContext } from 'context/general';
import CategoryButtons from 'components/buttons/category';

const CategoriesTitle = ({ categories }) => {
  const { categoryFilter, setCategoryFilter } = useContext(GeneralContext);

  return (
    <section className="category-filter">
      <h4>Kategoriler : </h4>
      <CategoryButtons
        categories={categories}
        selectedCategory={categoryFilter}
        onClick={setCategoryFilter}
      />
    </section>
  );
};

export default CategoriesTitle;
