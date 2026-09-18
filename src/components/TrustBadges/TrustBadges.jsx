import React from 'react';
import './TrustBadges.css';

export default function TrustBadges() {
  return (
    <section className="badges-section">
      <div className="badge-item">
        <h4>📦 Envíos Protegidos</h4>
        <p>Empaque especial para coleccionistas</p>
      </div>
      <div className="badge-item">
        <h4>⚡ Productos 100% Oficiales</h4>
        <p>Directo desde Japón</p>
      </div>
      <div className="badge-item">
        <h4>💳 Pago Seguro</h4>
        <p>Aceptamos todas las tarjetas</p>
      </div>
    </section>
  );
}
