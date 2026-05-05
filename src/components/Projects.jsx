import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="section-head reveal">
        <div className="section-num">03 / Selected work</div>
        <h2 id="work-title" className="section-title">
          Things I've <em>built</em>.
        </h2>
      </div>

      <div className="projects-mosaic">
        {projects.map((p, i) => {
          const num = String(i + 1).padStart(2, '0');
          const accent = p.accent || 'var(--accent)';
          const isFeatured = p.featured;

          return (
            <article
              className={`pcard reveal ${isFeatured ? 'pcard-featured' : ''}`}
              key={p.title}
              style={{ '--card-accent': accent }}
            >
              {/* Visual side */}
              <div className="pcard-visual">
                {p.images ? (
                  <div className="pcard-images">
                    {p.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${p.title} preview ${idx + 1}`}
                        loading="lazy"
                        className={`pcard-img pcard-img-${idx}`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ))}
                  </div>
                ) : p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('no-img');
                    }}
                  />
                ) : null}
                <div className="pcard-gradient"></div>
                <div className="pcard-pattern" aria-hidden="true">
                  {p.title.split('').slice(0, 3).map((c, idx) => (
                    <span key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>{c}</span>
                  ))}
                </div>
                {p.metric && (
                  <div className="pcard-metric">
                    <span className="metric-dot"></span>
                    {p.metric}
                  </div>
                )}
              </div>

              {/* Content side */}
              <div className="pcard-body">
                <div className="pcard-top">
                  <span className="pcard-num">{num}</span>
                  <span className="pcard-year">{p.year}</span>
                </div>

                <div className="pcard-domain">{p.domain}</div>
                <h3 className="pcard-title">{p.title}</h3>
                <p className="pcard-desc">{p.desc}</p>

                <div className="pcard-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="pcard-foot">
                  {p.linkAndroid || p.linkIOS || p.link ? (
                    <>
                      <span className="pcard-text">View live:</span>
                      {p.linkAndroid && (
                        <a
                          href={p.linkAndroid}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pcard-link"
                        >
                          <span>Android</span>
                          <span className="arrow">↗</span>
                        </a>
                      )}
                      {p.linkIOS && (
                        <a
                          href={p.linkIOS}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pcard-link"
                        >
                          <span>IOS</span>
                          <span className="arrow">↗</span>
                      </a>)}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pcard-link"
                      >
                        <span>Web</span>
                        <span className="arrow">↗</span>
                      </a>)}
                    </>
                  ) : (
                    <span className="pcard-link disabled">
                      <span>Private / NDA</span>
                      <span className="arrow">⊘</span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="add-project-note">
        More projects shipped under NDA · Want a deeper look?{' '}
        <a href="#contact">Get in touch</a>
      </div>
    </section>
  );
}
