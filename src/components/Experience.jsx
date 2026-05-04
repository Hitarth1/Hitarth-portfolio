import { experience } from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="exp-section" aria-labelledby="exp-title">
      <div className="section-head reveal">
        <div className="section-num">04 / The path</div>
        <h2 id="exp-title" className="section-title">
          Five years, <em>four chapters</em>.
        </h2>
      </div>

      <div className="timeline">
        {experience.map((item, i) => (
          <div className="exp-item reveal" key={i}>
            <div className="exp-date">{item.date}</div>
            <h3 className="exp-role">{item.role}</h3>
            <div className="exp-company">
              <strong>{item.companyShort}</strong> · {item.companyDetail}
            </div>
            <ul className="exp-bullets">
              {item.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
