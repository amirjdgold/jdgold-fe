export function PillarIcon({ icon }: { icon?: string }) {
  const common = 'h-9 w-9 text-[#c09038]';
  switch (icon) {
    case 'diamond':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
          <path d="M2 10h20M10 3l-2 7 4 11 4-11-2-7" />
        </svg>
      );
    case 'handshake':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      );
    case 'globe':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" />
          <path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" />
        </svg>
      );
    case 'shield':
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

export function CommitIcon({ icon }: { icon?: string }) {
  const common = 'h-8 w-8 text-[#c09038]';
  switch (icon) {
    case 'scale':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zm10 0l-3 6h6l-3-6z" />
        </svg>
      );
    case 'lock':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-3z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10.5 11V9.5a1.5 1.5 0 013 0V11" />
        </svg>
      );
    case 'people':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="9" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M3 19c1.5-3 4-4.5 6-4.5S13.5 16 15 19M14 14.5c1.5 0 3.2.8 4.5 3.5" />
        </svg>
      );
    case 'badge':
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="10" r="6" />
          <path d="M9.5 10.5l1.8 1.8 3.7-3.8" />
          <path d="M8 15.5l-1.5 5 5.5-2.5 5.5 2.5L16 15.5" />
        </svg>
      );
  }
}

export function ContactIcon({
  type,
}: {
  type: 'phone' | 'whatsapp' | 'email' | 'web' | 'pin';
}) {
  const common = 'h-4 w-4 shrink-0 text-[#c09038]';
  if (type === 'phone') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2A15 15 0 014.5 6.5a2 2 0 012-2z" />
      </svg>
    );
  }
  if (type === 'whatsapp') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.82c0 1.96.52 3.8 1.44 5.4L2 22l4.95-1.55a9.86 9.86 0 004.99 1.34h.01c5.46 0 9.89-4.4 9.89-9.82S17.5 2 12.04 2zm5.77 13.98c-.24.67-1.4 1.23-1.94 1.31-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.82-4.2-4.97-4.4-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.59-.36.79-.36h.57c.18 0 .42-.07.66.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.22 1.36.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.67-.17 1.34z" />
      </svg>
    );
  }
  if (type === 'email') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    );
  }
  if (type === 'web') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}
