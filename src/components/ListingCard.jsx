import React from 'react';
import './ListingCard.css';

const ListingCard = ({ title, price, imageUrl }) => {
  return (
    <div className="listing-card">
      <img src={imageUrl} alt={title} />
      <div className="listing-info">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ListingCard;
