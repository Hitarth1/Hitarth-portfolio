import { marqueeItems } from '../data/skills';
import './Marquee.css';

export default function Marquee() {
  // Duplicate items so the loop is seamless
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            <span>{item}</span>
            <span className="dot">{i % 2 === 0 ? '●' : '✦'}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
