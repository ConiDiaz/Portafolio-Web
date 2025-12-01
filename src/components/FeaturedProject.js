import React from 'react';

export default function FeaturedProject({ title, subtitle, img }) {
  return (
    <article className="featured-project">
      <div className="featured-thumb" style={{ backgroundImage: `url(${img})` }} />
      <div className="featured-meta">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}
