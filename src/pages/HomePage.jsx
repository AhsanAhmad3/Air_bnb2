import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';
import './HomePage.css'; // Import styles for the homepage

const HomePage = () => {
  const mockProperties = [
    {
      id: 1,
      title: 'Beautiful Beach House',
      type: 'Entire home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: '$200',
      rating: 4.9,
      image: 'https://via.placeholder.com/300x200?text=Beach+House', // Replace with real image URLs
    },
    {
      id: 2,
      title: 'Cozy Cabin in the Woods',
      type: 'Private room',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: '$100',
      rating: 4.5,
      image: 'https://via.placeholder.com/300x200?text=Cozy+Cabin', // Replace with real image URLs
    },
    // Add more properties as needed
  ];

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings">
        {mockProperties.map((property) => (
          <ListingCard key={property.id} property={property} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
