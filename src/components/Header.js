import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">SHAFORM</Link>
        <nav className={`main-nav ${open ? 'open' : ''}`}>
          <Link 
            to="/projects" 
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            PROYECTOS
          </Link>
          <Link 
            to="/profile" 
            className={location.pathname === '/profile' ? 'active' : ''}
          >
            PERFIL
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            CONTACTO
          </Link>
          <div className="locale">SANTIAGO • CL</div>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? 'X' : 'MENÚ'}
        </button>
      </div>
    </header>
  );
}
