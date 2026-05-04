import { skills } from '../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="section-head reveal">
        <div className="section-num">02 / Toolkit</div>
        <h2 id="skills-title" className="section-title">
          The <em>stack</em> I live in.
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((cat, i) => (
          <div className="skill-cat reveal" key={cat.title}>
            <div className="skill-cat-num">/ {String(i + 1).padStart(2, '0')}</div>
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
