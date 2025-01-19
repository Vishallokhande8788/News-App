import React from "react";

const CategoryButtons = ({ category, onCategoryClick, setProgress }) => {
  const categories = [
    "Business",
    "Crime",
    "Domestic",
    "Education",
    "Entertainment",
    "Environment",
    "Food",
    "Health",
    "Lifestyle",
    "Other",
    "Politics",
    "Science",
    "Sports",
    "Technology",
    "Tourism",
    "World",
  ];

  const handleCategoryClick = (cat) => {
    setProgress(30); // Start loading
    onCategoryClick(cat);
    setProgress(100); // Finish loading
  };

  return (
    <div>
      <h4 className="text-center mb-3">Explore by Categories</h4>
      <div className="row justify-content-center mb-3">
        {categories.map((cat) => (
          <div
            key={cat}
            className="col-6 col-sm-2 mb-2 d-flex justify-content-center"
          >
            <button
              className={`btn btn-outline-success w-100 ${
                category === cat ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
