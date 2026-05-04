import { personal } from '../data/personal';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="cta-section" aria-labelledby="contact-title">
      <div className="cta-mark">
        — Available for freelance · {personal.availableFor} —
      </div>

      <h2 id="contact-title" className="cta-title">
        Got a <em>frontend</em>
        <br />
        that needs solving?
      </h2>

      <a href={`mailto:${personal.email}`} className="cta-email">
        {personal.email}
      </a>

      <div className="cta-meta">
        {personal.socials.linkedin && (
          <>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ LinkedIn
            </a>
            <span>·</span>
          </>
        )}
        <a href={`tel:${personal.phoneRaw}`}>{personal.phone}</a>
        <span>·</span>
        <span>{personal.location}</span>
      </div>
    </section>
  );
}
