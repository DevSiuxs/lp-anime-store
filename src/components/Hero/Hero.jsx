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

  // Simulación de offsets parecidos a los cortes verticales de la imagen
  const offsets = [0.1, 0, 0.2, 0.05, 0.15, 0.25];

  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-sticky">
        <div className="hero-grid">
          {offsets.map((offset, index) => {
            const adjustedProgress = Math.min(Math.max((scrollProgress - offset) / (1 - offset), 0), 1);
            return (
              <div key={index} className="hero-column-wrapper">
                <div
                  className="hero-column"
                  style={{ height: `${adjustedProgress * 100}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop"
                    alt="Anime Cover"
                    className="hero-bg-img"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="hero-overlay" style={{ opacity: scrollProgress > 0.8 ? (scrollProgress - 0.8) * 5 : 0 }}>
          <h1>AKIRA STORE</h1>
          <p>Coleccionables & Merchandise Oficial</p>
        </div>
      </div>
    </section>
  );
}
