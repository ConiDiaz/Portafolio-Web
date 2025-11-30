import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">SHAFORM</Link>
        <nav className={`main-nav ${open ? 'open' : ''}`}>
          <Link to="/projects">PROYECTOS</Link>
          <Link to="/profile">PERFIL</Link>
          <Link to="/contact">CONTACTO</Link>
          <div className="locale">SANTIAGO • CL</div>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? 'X' : 'MENÚ'}
        </button>
      </div>
    </header>
  );
}
