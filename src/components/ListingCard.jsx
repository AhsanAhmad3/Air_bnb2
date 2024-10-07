import React from 'react';
import './ListingCard.css';

const ListingCard = ({ property }) => {
  return (
    <div className="listing-card">
      <img src={property.image} alt={property.title} className="listing-image" />
      <div className="listing-info">
        <h2 className="listing-title">{property.title}</h2>
        <p className="listing-type">{property.type}</p>
        <p className="listing-details">
          {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
        </p>
        <p className="listing-price">{property.price} per night</p>
        <p className="listing-rating">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default ListingCard;
