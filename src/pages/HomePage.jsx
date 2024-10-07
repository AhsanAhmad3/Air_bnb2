import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  const listings = [
    { title: 'Modern Beach House', price: '$400/night', imageUrl: 'beach-house.jpg' },
    { title: 'Cozy Cabin', price: '$300/night', imageUrl: 'cabin.jpg' },
    { title: 'Urban Apartment', price: '$150/night', imageUrl: 'apartment.jpg' }
  ];

  return (
    <div className="homepage">
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings">
        {listings.map((listing, index) => (
          <ListingCard
            key={index}
            title={listing.title}
            price={listing.price}
            imageUrl={listing.imageUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
