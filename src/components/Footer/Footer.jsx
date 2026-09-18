import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 AKIRA STORE - Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="#terms">Términos</a>
        <a href="#privacy">Privacidad</a>
        <a href="#shipping">Envíos</a>
      </div>
    </footer>
  );
}
