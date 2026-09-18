import React from 'react';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import TrustBadges from './components/TrustBadges/TrustBadges';
import FlashDeals from './components/FlashDeals/FlashDeals';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TrustBadges />
      <FlashDeals />
      <Reviews />
      <Footer />
    </div>
  );
}
