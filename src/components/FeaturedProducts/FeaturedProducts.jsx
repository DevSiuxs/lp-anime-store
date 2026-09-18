import React from 'react';
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  return (
    <section className="featured-section">
      <h2 className="section-title">Productos Destacados</h2>
      <div className="products-grid">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="product-card">
            <div className="product-image-placeholder">Producto {item}</div>
            <h3>Figura Edición Especial</h3>
            <p className="price">$1,299 MXN</p>
            <button className="add-btn">Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}
