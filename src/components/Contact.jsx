import { personal } from '../data/personal';
import ContactForm from './ContactForm';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="cta-section" aria-labelledby="contact-title">
      <div className="cta-mark">
        — Open to {personal.openTo.join(' · ')} · {personal.availableFor} —
      </div>

      <h2 id="contact-title" className="cta-title">
        Let's <em>build</em>
        <br />
        something good.
      </h2>

      <ContactForm />

      <div className="cta-divider">
        <span>Or reach out directly</span>
      </div>

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
        {/* <a href={`tel:${personal.phoneRaw}`}>{personal.phone}</a> */}
        {/* <span>·</span> */}
        <span>{personal.location}</span>
      </div>
    </section>
  );
}
