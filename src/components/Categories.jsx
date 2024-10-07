import React from 'react';
import './Categories.css';

const categories = [
  'Beachfront',
  'Cabins',
  'Trending',
  'Unique stays',
  'Experiences',
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button key={category} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
