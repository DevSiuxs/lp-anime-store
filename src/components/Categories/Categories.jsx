import React, { useState, useEffect, useRef } from 'react';
import './Categories.css';

export default function Categories() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const categoriesList = [
    { name: 'Figuras', dataX: 170, initialRotate: -25, scaleOffset: 0.75 },
    { name: 'Manga', dataX: -120, initialRotate: 15, scaleOffset: 0.85 },
    { name: 'Ropa', dataX: 80, initialRotate: -10, scaleOffset: 0.90 },
    { name: 'Accesorios', dataX: 270, initialRotate: 30, scaleOffset: 0.70 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // --- CAMBIO CLAVE PARA DARLE MÁS TIEMPO/DISTANCIA ---
      // Comienza cuando el tope de la sección entra por abajo de la pantalla (windowHeight)
      const start = windowHeight * 1.1;

      // Termina cuando el tope de la sección pasa más arriba de la pantalla (-windowHeight * 0.2)
      // Esto duplica o triplica el recorrido de scroll necesario para completar la animación.
      const end = -windowHeight * 0.1;

      const currentProgress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="categories-section">
      <h2 className="section-title">Categorías Populares</h2>
      <div className="categories-grid">
        {categoriesList.map((cat, index) => {
          const currentX = (1 - progress) * cat.dataX;
          const currentY = (1 - progress) * (30 - 20 * index);
          const currentScale = cat.scaleOffset + (1 - cat.scaleOffset) * progress;
          const currentRotate = (1 - progress) * cat.initialRotate;
          const currentOpacity = progress;

          return (
            <div
              key={index}
              className="category-card"
              style={{
                transform: `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale}) rotate(${currentRotate}deg)`,
                opacity: currentOpacity,
              }}
            >
              {cat.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
