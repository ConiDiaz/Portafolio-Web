import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProject from './FeaturedProject';

export default function Home() {
  const featured = [
    { title: 'LAFKEN', subtitle: 'Creación de una cerveza chilena.', img: '/Imagenes/lafken/LAFKEN%201.1.png' },
    { title: 'THANATOS', subtitle: 'Fotolibro sobre abandono y memoria.', img: '/Imagenes/thanatos/Thanatos%201.png' },
    { title: 'MINDLY', subtitle: 'Aplicación de journaling.', img: '/Imagenes/mindly/Mindly%201.png' }
  ];

  return (
    <section className="home-hero">
      <div className="hero-inner">
        <h1 className="hero-brand">SHAFORM</h1>
        <p className="hero-sub">LO INVISIBLE HECHO FORMA</p>
        <h2 className="section-title">TRABAJOS SELECCIONADOS</h2>
        <div className="selected-grid">
          {featured.map((p, idx) => (
            <FeaturedProject key={idx} title={p.title} subtitle={p.subtitle} img={p.img} />
          ))}
        </div>
        <Link to="/projects" className="see-all">VER TODOS LOS PROYECTOS</Link>
      </div>
    </section>
  );
}
