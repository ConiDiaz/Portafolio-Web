import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const all = [
  { id: 1, title: 'LAFKEN', subtitle: 'Creación de una cerveza chilena.', img: 'https://images.unsplash.com/photo-1532634896-26909d0d1b32?auto=format&fit=crop&w=800&q=60' },
  { id: 2, title: 'SILOS', subtitle: 'Creación de tipografía.', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60' },
  { id: 3, title: 'MANOS DEL PASADO', subtitle: 'Afiches feria Centro cultural Mapocho.', img: 'https://images.unsplash.com/photo-1531219432768-5f4a3f6b1b28?auto=format&fit=crop&w=800&q=60' },
  { id: 4, title: 'CLAWS & CATS', subtitle: 'Juego digital de rol.', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800&q=60' },
  { id: 5, title: 'THANATOS', subtitle: 'Fotolibro sobre abandono y memoria.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60' },
  { id: 6, title: 'MINDLY', subtitle: 'Aplicación de journaling.', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60' }
];

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="inner">
        <h1 className="page-title">PROYECTOS</h1>
        <div className="filters">TODOS &nbsp;&nbsp; GRÁFICO &nbsp;&nbsp; EDITORIAL &nbsp;&nbsp; IDENTIDAD &nbsp;&nbsp; DIGITAL &nbsp;&nbsp; UX/UI</div>

        <h2 className="section-title">TRABAJOS SELECCIONADOS</h2>
        <div className="selected-grid">
          {all.slice(0, 3).map(p => (
            <ProjectCard key={p.id} {...p} variant="selected" />
          ))}
        </div>

        <div className="projects-list">
          <div className="projects-grid">
            {all.map(p => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <Link to="/projects" className="see-all">VER TODOS LOS PROYECTOS</Link>
        </div>
      </div>
    </section>
  );
}
