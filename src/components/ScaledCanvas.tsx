import { useLayoutEffect, useRef, type ReactNode } from 'react';

export const PAGE_DESIGN_WIDTH = 1152;

/** Renders children at a fixed design width and scales the canvas to the viewport. */
export default function ScaledCanvas({
  children,
  width = PAGE_DESIGN_WIDTH,
}: {
  children: ReactNode;
  width?: number;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const applyScale = () => {
      const available = host.clientWidth || window.innerWidth;
      const scale = Math.min(1, available / width);
      canvas.style.width = `${width}px`;
      canvas.style.minWidth = `${width}px`;
      canvas.style.maxWidth = 'none';
      canvas.style.transformOrigin = 'top left';
      canvas.style.transform = `scale(${scale})`;
      const scaledWidth = width * scale;
      const marginX = Math.max(0, (available - scaledWidth) / 2);
      canvas.style.marginLeft = `${marginX}px`;
      canvas.style.marginRight = `${marginX}px`;
      host.style.height = `${canvas.scrollHeight * scale}px`;
    };

    applyScale();
    const raf = requestAnimationFrame(() => {
      applyScale();
      requestAnimationFrame(applyScale);
    });

    const observer = new ResizeObserver(applyScale);
    observer.observe(host);
    observer.observe(canvas);
    window.addEventListener('resize', applyScale);
    canvas.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', applyScale, { once: true });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', applyScale);
    };
  }, [width]);

  return (
    <div ref={hostRef} className="relative w-full overflow-hidden">
      <div ref={canvasRef}>{children}</div>
    </div>
  );
}
