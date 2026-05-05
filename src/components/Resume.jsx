import { personal } from '../data/personal';
import './Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="resume-section" aria-labelledby="resume-title">
      <div className="resume-card reveal">
        <div className="resume-left">
          <span className="resume-num">05 / Resume</span>
          <h2 id="resume-title" className="resume-title">
            Need the <em>full</em> story?
          </h2>
          <p className="resume-desc">
            Download my full CV — five years of React.js & React Native shipping in fintech, e-commerce, healthcare, and enterprise. Detailed breakdown of every project, tech stack, and impact metric.
          </p>

          <div className="resume-actions">
            <a
              href={personal.resume}
              download
              className="resume-btn primary"
            >
              <span className="btn-icon">↓</span>
              <span>Download CV (PDF)</span>
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn secondary"
            >
              <span>View in browser</span>
              <span className="btn-icon">↗</span>
            </a>
          </div>
        </div>

        <div className="resume-right" aria-hidden="true">
          <div className="cv-mock">
            <div className="cv-mock-inner">
              <div className="cv-line cv-line-title"></div>
              <div className="cv-line cv-line-sub"></div>
              <div className="cv-line cv-line-divider"></div>
              <div className="cv-line cv-line-1"></div>
              <div className="cv-line cv-line-2"></div>
              <div className="cv-line cv-line-3"></div>
              <div className="cv-line cv-line-divider"></div>
              <div className="cv-line cv-line-4"></div>
              <div className="cv-line cv-line-5"></div>
              <div className="cv-line cv-line-6"></div>
              <div className="cv-stamp">PDF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
