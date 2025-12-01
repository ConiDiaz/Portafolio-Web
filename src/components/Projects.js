import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const all = [
  { id: 1, title: 'LAFKEN', subtitle: 'Creación de una cerveza chilena.', img: '/Imagenes/lafken/LAFKEN%201.png' },
  { id: 6, title: 'MANOS DEL PASADO', subtitle: 'Afiches feria Centro cultural Mapocho.', img: '/Imagenes/manosdelpasado/Manos%20del%20pasado%201.png' },
  { id: 3, title: 'MINDLY', subtitle: 'Aplicación de journaling.', img: '/Imagenes/mindly/Mindly%201.png' },
  { id: 2, title: 'SILOS', subtitle: 'Creación de tipografía.', img: '/Imagenes/silos/Silos%201.png' },
  { id: 5, title: 'THANATOS', subtitle: 'Fotolibro sobre abandono y memoria.', img: '/Imagenes/thanatos/Thanatos%201.png' }
];

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="inner">
        <h1 className="page-title">PROYECTOS</h1>
        <div className="filters">TODOS &nbsp;&nbsp; GRÁFICO &nbsp;&nbsp; EDITORIAL &nbsp;&nbsp; IDENTIDAD &nbsp;&nbsp; DIGITAL &nbsp;&nbsp; UX/UI</div>

        <div className="projects-list">
          <div className="projects-grid">
            {all.map(p => (
              <ProjectCard key={p.id} id={p.id} title={p.title} subtitle={p.subtitle} img={p.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
