import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Scrolls to top on PUSH/REPLACE route changes (navbar, in-app links).
 * Restores the previous window scroll on Back/Forward (POP) via location.key.
 * Leaves hash targets (#section) to scrollIntoView instead of forcing top.
 */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, number>());

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    const save = () => {
      positions.current.set(key, window.scrollY);
    };
    window.addEventListener('scroll', save, { passive: true });
    return () => {
      save();
      window.removeEventListener('scroll', save);
    };
  }, [key]);

  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          return true;
        }
        return false;
      };
      if (scrollToHash()) return;
      const timer = window.setTimeout(scrollToHash, 100);
      return () => window.clearTimeout(timer);
    }

    if (navigationType === 'POP') {
      const y = positions.current.get(key);
      if (y != null) {
        window.scrollTo({ top: y, left: 0, behavior: 'instant' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, key, navigationType]);

  return null;
}
