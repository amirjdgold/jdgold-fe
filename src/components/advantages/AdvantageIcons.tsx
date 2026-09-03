type IconProps = { className?: string };

export function CheckIcon({ className = 'mt-0.5 h-4 w-4 shrink-0 text-[#c09038]' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SideItemIcon({ icon, title }: { icon?: string; title: string }) {
  const key = (icon || title).toLowerCase();
  const common = 'h-7 w-7 text-[#c09038]';

  if (key.includes('pure') || key.includes('gold 999')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="7" y="4" width="10" height="16" rx="1" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    );
  }
  if (
    key.includes('hidden') ||
    key.includes('transparent trade') ||
    key.includes('flexible') ||
    key.includes('market-aligned') ||
    key.includes('rates')
  ) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zm10 0l-3 6h6l-3-6z" />
      </svg>
    );
  }
  if (key.includes('sustainable') || key.includes('growth') || key.includes('transparent value')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M4 20V10M10 20V4M16 20v-7M20 20H2" strokeLinecap="round" />
      </svg>
    );
  }
  if (
    key.includes('expansion') ||
    key.includes('globe') ||
    key.includes('global') ||
    key.includes('international') ||
    key.includes('standard') ||
    key.includes('market')
  ) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    );
  }
  if (key.includes('quality control') || key.includes('strict') || key.includes('check')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (key.includes('supply') || key.includes('trusted') || key.includes('verified') || key.includes('leaders')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (key.includes('machiner') || key.includes('advanced')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
      </svg>
    );
  }
  if (key.includes('assay') || key.includes('precision')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="10" cy="10" r="6" />
        <path d="M14.5 14.5L20 20" strokeLinecap="round" />
      </svg>
    );
  }
  if (key.includes('digital') || key.includes('security') || key.includes('secure')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </svg>
    );
  }
  if (key.includes('innovation')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M9 18h6M10 21h4M12 3a5 5 0 015 5c0 2-1 3.5-2.5 4.5V15H9.5v-2.5C8 11.5 7 10 7 8a5 5 0 015-5z" />
      </svg>
    );
  }
  if (key.includes('decade') || key.includes('experience') || key.includes('clients')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
      </svg>
    );
  }
  if (key.includes('on time') || key.includes('delivery') || key.includes('24/7') || key.includes('support')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    );
  }
  if (key.includes('logistic')) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7V10z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.8 7.7 16.5l.8-4.9L5 8.2l4.8-.7L12 3z" />
    </svg>
  );
}

export function MottoIcon({ icon }: { icon?: string }) {
  const common = 'h-11 w-11 text-[#c09038]';
  switch (icon) {
    case 'shield':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 4L8 10v12c0 10.5 6.8 17.8 16 20 9.2-2.2 16-9.5 16-20V10L24 4z" />
          <path d="M16 23l5.5 5.5L33 17" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'bars':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="8" y="18" width="12" height="18" rx="1" />
          <rect x="18" y="12" width="12" height="24" rx="1" />
          <rect x="28" y="16" width="12" height="20" rx="1" />
        </svg>
      );
    case 'handshake':
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      );
    case 'star':
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 6l5.2 10.5L41 18l-8.5 8.3L34.4 38 24 32.5 13.6 38l1.9-11.7L7 18l11.8-1.5L24 6z" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path d="M24 4L8 10v12c0 10.5 6.8 17.8 16 20 9.2-2.2 16-9.5 16-20V10L24 4z" />
        </svg>
      );
  }
}
