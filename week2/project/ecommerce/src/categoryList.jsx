import { useEffect, useState } from "react";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);
const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) throw new Error("Failed to fetch categories.");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error.message);
        setError("We couldn't load the categories at this time. Please try again later.");
      }
    };
    fetchCategories();
  }, []);

  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-item ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
