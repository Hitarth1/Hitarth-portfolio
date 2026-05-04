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

      <div className="projects-list">
        {projects.map((p, i) => {
          const num = String(i + 1).padStart(2, '0');
          return (
            <article className="project reveal" key={p.title}>
              <div className="project-num">{num}</div>

              <div>
                <h3 className="project-title">
                  <span className="domain">{p.domain}</span>
                  {p.title}
                </h3>
              </div>

              <div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow"
                  aria-label={`Visit ${p.title}`}
                >
                  ↗
                </a>
              ) : (
                <span className="project-arrow no-link" aria-hidden="true">
                  ↗
                </span>
              )}
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
