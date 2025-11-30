import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default function Home() {
  const featured = [
    { id: 1, title: 'LAFKEN', subtitle: 'Creación de una cerveza chilena.', img: 'https://images.unsplash.com/photo-1532634896-26909d0d1b32?auto=format&fit=crop&w=800&q=60' },
    { id: 2, title: 'THANATOS', subtitle: 'Fotolibro sobre abandono y memoria.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60' },
    { id: 3, title: 'MINDLY', subtitle: 'Aplicación de journaling.', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60' }
  ];

  return (
    <section className="home-hero">
      <div className="hero-inner">
        <h1 className="hero-brand">SHAFORM</h1>
        <p className="hero-sub">LO INVISIBLE HECHO FORMA</p>
        <h2 className="section-title">TRABAJOS SELECCIONADOS</h2>
        <div className="selected-grid">
          {featured.map(p => (
            <ProjectCard key={p.id} title={p.title} subtitle={p.subtitle} img={p.img} variant="selected" />
          ))}
        </div>
        <Link to="/projects" className="see-all">VER TODOS LOS PROYECTOS</Link>
      </div>
    </section>
  );
}
