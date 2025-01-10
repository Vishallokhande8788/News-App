// CategoryButtons.js
import React from "react";

const CategoryButtons = ({ category, onCategoryClick }) => {
  return (
    <div className="d-flex justify-content-end mb-3">
      {["politics", "entertainment", "sports", "health"].map((cat) => (
        <button
          key={cat}
          className={`btn btn-outline-secondary mx-1 ${
            category === cat ? "active" : ""
          }`}
          onClick={() => onCategoryClick(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
