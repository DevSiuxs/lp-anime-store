import React from 'react';
import './Reviews.css';

export default function Reviews() {
  return (
    <section className="reviews-section">
      <h2 className="section-title">Reseñas de Coleccionistas</h2>
      <div className="reviews-grid">
        <div className="review-card">
          <p>"Llegó súper bien protegido, la caja sin un solo rasguño."</p>
          <span>- Carlos M.</span>
        </div>
        <div className="review-card">
          <p>"Excelente calidad y 100% original. Volveré a comprar."</p>
          <span>- Sofía R.</span>
        </div>
      </div>
    </section>
  );
}
