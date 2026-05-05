import { personal, heroStats, heroTagline } from '../data/personal';
import './Hero.css';

/**
 * Convert markdown-like **bold** segments in the tagline into <strong> tags.
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

      {/* Floating ticker badges around the photo */}
      <div className="hero-grid">
        {/* LEFT — text */}
        <div className="hero-left">
          <div className="hero-meta">
            {personal.title} · {personal.subtitle} · Est. {personal.experienceSince}
          </div>

          {/* Name with creative highlight */}
          <div className="hero-name-row">
            <span className="hero-name-prefix">I'm</span>
            <h1 className="hero-name">
              <span className="name-first">{personal.firstName}</span>
              <span className="name-last">
                <span className="name-last-text">{personal.lastName}</span>
                <svg className="name-underline" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2,8 Q75,2 150,6 T298,5" />
                </svg>
              </span>
            </h1>
          </div>

          <h2 className="hero-title">
            <span className="word"><span>Building</span></span>{' '}
            <span className="word"><span className="italic">interfaces</span></span>
            <br />
            <span className="word"><span className="stroke">that</span></span>{' '}
            <span className="word"><span>scale.</span></span>
          </h2>

          <p className="hero-tagline">{renderTagline(heroTagline)}</p>

          {/* Open-to chips */}
          <div className="hero-open-to">
            <span className="open-label">Open to</span>
            {personal.openTo.map((opt, i) => (
              <span className="open-chip" key={opt} style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                {opt}
              </span>
            ))}
          </div>

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
        </div>

        {/* RIGHT — photo */}
        <div className="hero-right">
          <div className="photo-frame">
            <div className="photo-glow"></div>
            <div className="photo-rotator">
              <svg viewBox="0 0 300 300" className="photo-ring" aria-hidden="true">
                <defs>
                  <path id="textCircle" d="M150,150 m-130,0 a130,130 0 1,1 260,0 a130,130 0 1,1 -260,0" />
                </defs>
                <text className="ring-text">
                  <textPath href="#textCircle" startOffset="0%">
                    REACT.JS · REACT NATIVE · TYPESCRIPT · REDUX · GRAPHQL · FIREBASE · ANDROID · IOS · WEB ·
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="photo-inner">
              <img
                src={personal.photo}
                alt={`Portrait of ${personal.name}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling?.classList.add('show');
                }}
              />
              <div className="photo-fallback" aria-hidden="true">
                {personal.firstName[0]}{personal.lastName[0]}
              </div>
            </div>
            {/* Floating tags around photo */}
            <span className="float-tag tag-1">{'<React/>'}</span>
            <span className="float-tag tag-2">5+ years</span>
            <span className="float-tag tag-3">● available</span>
          </div>

          <div className="hero-status">
            <span className="loc">{personal.location} — Remote globally</span>
            <span className="loc faded">{personal.timezone}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
