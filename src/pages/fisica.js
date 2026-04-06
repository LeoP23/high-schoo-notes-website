// src/pages/fisica.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const macroAreas = [
  { title: 'Meccanica', icon: '⚙️', link: '/docs/fisica/meccanica', desc: 'Cinematica, dinamica, gravitazione e fluidi.' },
  { title: 'Termodinamica', icon: '🔥', link: '/docs/fisica/termodinamica', desc: 'Calore, temperatura e le leggi dei gas.' },
  { title: 'Ottica', icon: '🔭', link: '/docs/fisica/ottica', desc: 'Riflessione, rifrazione e strumenti ottici.' },
  { title: 'Elettromagnetismo', icon: '⚡', link: '/docs/fisica/elettromagnetismo', desc: 'Cariche, campi elettrici, magnetici e circuiti.' },
  { title: 'Onde', icon: '🌊', link: '/docs/fisica/onde', desc: 'Propagazione, suono e fenomeni ondulatori.' },
  { title: 'Relatività', icon: '⏳', link: '/docs/fisica/relativita', desc: 'Relatività ristretta e dilatazione dei tempi.' },
  { title: 'Quantistica', icon: '⚛️', link: '/docs/fisica/quantistica', desc: 'Fotoni, atomi e fondamenti di meccanica quantistica.' }
];

export default function FisicaHub() {
  return (
    <Layout title="Fisica" description="Esplora le macroaree della fisica.">
      <header className="hero" style={{ backgroundColor: 'var(--surface-hero-bg)', borderBottom: '4px solid var(--brand-physics)' }}>
        <div className="container text--center">
          <h1 className="hero__title" style={{ color: 'var(--brand-physics)', fontWeight: '800' }}>Fisica</h1>
          <p className="hero__subtitle" style={{ color: 'var(--text-muted)' }}>
            Comprendi le leggi dell'universo attraverso l'esplorazione.
          </p>
        </div>
      </header>
      <main className="padding-vert--xl">
        <div className="container">
          <div className="row">
            {macroAreas.map((area, idx) => (
              <div className="col col--4 margin-bottom--lg" key={idx}>
                <Link to={area.link} className="card padding--lg subject-card" style={{ display: 'block', height: '100%', borderColor: 'transparent' }}
                      onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--brand-physics)'}
                      onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                  <div className="card__header">
                    <h3 style={{ color: 'var(--brand-physics)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{area.icon}</span> {area.title}
                    </h3>
                  </div>
                  <div className="card__body">
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>{area.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}