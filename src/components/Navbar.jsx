import { useEffect, useState } from 'react';
import { personal } from '../data/personal';
import { navigation } from '../data/experience';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="brand" aria-label="Home">
        <span className="dot"></span>
        {personal.brand}
      </a>

      <ul>
        {navigation.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="cta">
        Hire me ↗
      </a>

      {/* Scroll progress bar */}
      <div className="nav-progress" aria-hidden="true">
        <div className="nav-progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </nav>
  );
}
