import { personal, heroStats, heroTagline } from '../data/personal';
import './Hero.css';

/**
 * Convert markdown-like **bold** segments in the tagline into <strong> tags.
 * Edit the tagline text in /src/data/personal.js
 */
function renderTagline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg-grid"></div>
      <div className="hero-orb"></div>
      <div className="hero-orb-2"></div>

      <div className="hero-meta">
        {personal.title} · {personal.subtitle} · Est. {personal.experienceSince}
      </div>

      <h1 className="hero-title">
        <span className="word"><span>Building</span></span>{' '}
        <span className="word"><span className="italic">interfaces</span></span>
        <br />
        <span className="word"><span className="stroke">that</span></span>{' '}
        <span className="word"><span>scale.</span></span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-tagline">{renderTagline(heroTagline)}</p>

        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <div className="num">{stat.num}</div>
              <div className="label">
                {stat.label.split('\n').map((l, i) => (
                  <span key={i}>
                    {l}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hero-status">
          {personal.available && (
            <span className="available">
              <span className="blink"></span>Available for freelance
            </span>
          )}
          <span className="loc">{personal.location} — Remote globally</span>
          <span className="loc faded">{personal.timezone}</span>
        </div>
      </div>
    </header>
  );
}
