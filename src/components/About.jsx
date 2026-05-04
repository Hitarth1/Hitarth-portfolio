import { aboutParagraphs, aboutCards } from '../data/personal';
import './About.css';

/**
 * Replace {{highlighted}} segments with <mark> tags for the accent color
 * Edit text in /src/data/personal.js
 */
function renderParagraph(text) {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return parts.map((part, i) => {
    if (part.startsWith('{{') && part.endsWith('}}')) {
      return <mark key={i}>{part.slice(2, -2)}</mark>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="section-head reveal">
        <div className="section-num">01 / About</div>
        <h2 id="about-title" className="section-title">
          A frontend engineer who <em>actually</em> ships.
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{renderParagraph(p)}</p>
          ))}
        </div>

        <aside className="about-side">
          {aboutCards.map((card, i) => (
            <div className="about-card reveal" key={i}>
              <h4>{card.label}</h4>
              {card.big && <div className="big">{card.big}</div>}
              {card.sub && <div className="sub">{card.sub}</div>}
              {card.list && (
                <ul>
                  {card.list.map(([k, v], j) => (
                    <li key={j}>
                      <span>{k}</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
