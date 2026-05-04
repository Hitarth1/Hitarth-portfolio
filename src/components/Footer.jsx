import { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [clock, setClock] = useState('--:--:-- IST');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ist = new Date(
        now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
      );
      const h = String(ist.getHours()).padStart(2, '0');
      const m = String(ist.getMinutes()).padStart(2, '0');
      const s = String(ist.getSeconds()).padStart(2, '0');
      setClock(`${h}:${m}:${s} IST`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer>
      <div>© {year} Hitarth Gupta · Crafted with React-grade obsession</div>
      <div className="clock">{clock}</div>
      <div>v 2.0 — last shipped today</div>
    </footer>
  );
}
