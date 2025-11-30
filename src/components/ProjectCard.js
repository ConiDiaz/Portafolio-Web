import React from 'react';

export default function ProjectCard({ title, subtitle, img, variant }) {
  const cls = `project-card${variant === 'selected' ? ' selected' : ''}`;
  return (
    <article className={cls}>
      <div className="thumb" style={{ backgroundImage: `url(${img})` }} />
      <div className="meta">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}
