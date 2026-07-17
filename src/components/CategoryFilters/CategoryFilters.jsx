import categories from "../../data/categories";
import "./CategoryFilters.css";

function CategoryFilters({ onSelectCategory, currentCategory }) {
  return (
    <section className="category-filter" aria-label="Blog categories">
      <div className="category-filter__container">
        {categories.map((category) => (
          <button
            type="button"
            aria-pressed={category === currentCategory}
            key={category}
            className={
              category === currentCategory
                ? "category-btn active-category"
                : "category-btn"
            }
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilters;
