import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero-section');
      if (!heroEl) return;
      const totalHeight = heroEl.clientHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const columnsConfig = [
    { offset: 0.15, maxHeight: 50, alignSelf: 'center' },
    { offset: 0.0, maxHeight: 85, alignSelf: 'flex-start' },
    { offset: 0.2, maxHeight: 70, alignSelf: 'flex-end' },
    { offset: 0.05, maxHeight: 95, alignSelf: 'center' },
    { offset: 0.1, maxHeight: 80, alignSelf: 'flex-end' },
    { offset: 0.25, maxHeight: 60, alignSelf: 'center' },
  ];

  const totalCols = columnsConfig.length;
  const bgImageUrl = 'Hero.jpg'; // Ruta de tu imagen grande[cite: 7]

  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-sticky">
        <div className="hero-grid">
          {columnsConfig.map((col, index) => {
            const adjustedProgress = Math.min(
              Math.max((scrollProgress - col.offset) / (1 - col.offset), 0),
              1
            );

            const currentHeight = adjustedProgress * col.maxHeight;

            // Calculamos la posición del background para cada columna exactamente entre 0% y 100%
            const bgPositionX = (index / (totalCols - 1)) * 100;

            return (
              <div
                key={index}
                className="hero-column-wrapper"
                style={{ alignSelf: col.alignSelf }}
              >
                <div
                  className="hero-column"
                  style={{
                    height: `${currentHeight}%`,
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundPosition: `${bgPositionX}% center`
                  }}
                />
              </div>
            );
          })}
        </div>

        <div
          className="hero-overlay"
          style={{ opacity: scrollProgress > 0.85 ? (scrollProgress - 0.85) * 6.6 : 0 }}
        >
          <h1>TIENDA</h1>
          <p>Coleccionables & Merchandise Oficial</p>
        </div>
      </div>
    </section>
  );
}
