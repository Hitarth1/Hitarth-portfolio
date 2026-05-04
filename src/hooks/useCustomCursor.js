import { useEffect } from 'react';

/**
 * Custom cursor — a small dot that follows the mouse instantly
 * and a larger ring that lags behind smoothly.
 * Hovering over interactive elements expands the ring.
 */
export function useCustomCursor() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let raf = null;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animateRing);
    };

    const addHover = () => ring.classList.add('hover');
    const removeHover = () => ring.classList.remove('hover');

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animateRing);

    const hoverEls = document.querySelectorAll(
      'a, button, .project, [data-hover], .skill-cat ul li, .cta'
    );
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);
}
