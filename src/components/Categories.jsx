import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = ['Beachfront', 'Cabins', 'Tiny Homes', 'Unique Stays', 'Farms'];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
