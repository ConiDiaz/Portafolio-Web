import React from 'react';

export default function Profile() {
  return (
    <section className="profile-page">
      <div className="inner">
        <h1 className="page-title">CONSTANZA DÍAZ</h1>
        <p className="profile-lead">Diseñadora visual que equilibra método y sensibilidad. Exploro geométrica, contraste y composición para transformar ideas en sistemas visuales claros, coherentes y con identidad.</p>
        <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=60" alt="profile" className="profile-photo" />
        <h2 className="subhead">SERVICIOS</h2>
        <ul className="services">
          <li>IDENTIDAD VISUAL</li>
          <li>BRANDING</li>
          <li>DISEÑO EDITORIAL</li>
          <li>DISEÑO DIGITAL / UI</li>
        </ul>
      </div>
    </section>
  );
}
