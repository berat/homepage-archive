const CategoryButtons = ({ categories, selectedCategory, onClick }) => {
  return (
    <ul className="category-buttons">
      {categories.map((item: string, index: number) => (
        <li
          aria-hidden="true"
          className={selectedCategory === item ? 'active' : null}
          onClick={() => {
            onClick(item);
          }}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CategoryButtons;
