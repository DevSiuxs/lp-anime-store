import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <section className="categories-section">
      <h2 className="section-title">Categorías Populares</h2>
      <div className="categories-grid">
        <div className="category-card">Figuras</div>
        <div className="category-card">Manga</div>
        <div className="category-card">Ropa</div>
        <div className="category-card">Accesorios</div>
      </div>
    </section>
  );
}
