import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, subtitle, img, variant }) {
  const cls = `project-card${variant === 'selected' ? ' selected' : ''}`;
  return (
    <Link to={`/project/${id}`} style={{ textDecoration: 'none' }}>
      <article className={cls}>
        <div className="thumb" style={{ backgroundImage: `url(${img})` }} />
        <div className="meta">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </article>
    </Link>
  );
}
