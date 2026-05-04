import { useEffect, useState } from 'react';
import { personal } from '../data/personal';
import { navigation } from '../data/experience';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
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
    </nav>
  );
}
