import React, { useState, useEffect, useRef } from 'react';
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  const sectionRef = useRef(null);
  const [cardTransforms, setCardTransforms] = useState({});

  const products = [1, 2, 3, 4];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const windowHeight = window.innerHeight;
      const cards = sectionRef.current.querySelectorAll('.product-card');
      const newTransforms = {};

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        // Calculamos el centro de la tarjeta respecto al viewport
        const cardCenter = rect.top + rect.height / 2;

        // Normalizamos la posición:
        // 1.0 -> Tarjeta abajo del todo en la pantalla
        // 0.0 -> Tarjeta en la parte superior de la pantalla
        const rawFactor = cardCenter / windowHeight;
        const factor = Math.min(Math.max(rawFactor, 0), 1);

        // PARALLAX & ESCALA:
        // - Abajo (factor ~ 1.0): Escala más grande (1.12) y ligera traslación abajo.
        // - Arriba (factor ~ 0.0): Escala reducida (0.88) conforme va subiendo.
        const scale = 0.88 + factor * 0.24;
        const translateY = (1 - factor) * -25; // Parallax vertical

        newTransforms[index] = {
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
          opacity: Math.min(Math.max(factor * 1.5, 0.4), 1), // Suave desvanecimiento al salir por arriba
        };
      });

      setCardTransforms(newTransforms);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Ejecución inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="featured-section">
      <h2 className="section-title">Productos Destacados</h2>
      <div className="products-grid">
        {products.map((item, index) => (
          <div
            key={item}
            className="product-card"
            style={cardTransforms[index] || {}}
          >
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
