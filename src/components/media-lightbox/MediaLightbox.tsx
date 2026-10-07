import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { XIcon } from 'lucide-react';
import { findPreviewableMediaFromEvent } from '@/components/media-lightbox/findPreviewableMedia';
import SiteBrandLockup from '@/components/SiteBrandLockup';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { useSiteContent } from '@/hooks/useSiteContent';

export type LightboxMedia = {
  kind: 'image' | 'video';
  src: string;
  alt?: string;
};

type MediaLightboxContextValue = {
  openMedia: (media: LightboxMedia) => void;
};

const MediaLightboxContext = createContext<MediaLightboxContextValue | null>(null);

export function useMediaLightbox() {
  return useContext(MediaLightboxContext);
}

export function MediaLightboxProvider({ children }: { children: ReactNode }) {
  const [media, setMedia] = useState<LightboxMedia | null>(null);
  const siteContent = useSiteContent();
  const branding = siteContent?.hero?.branding;
  const openMedia = useCallback((next: LightboxMedia) => {
    setMedia(next);
  }, []);
  const value = useMemo(() => ({ openMedia }), [openMedia]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      const el = findPreviewableMediaFromEvent(event);
      if (!el) return;
      event.preventDefault();
      event.stopPropagation();
      openMedia({
        kind: el.dataset.mediaPreview === 'video' ? 'video' : 'image',
        src: el.currentSrc || el.getAttribute('src') || '',
        alt: el.getAttribute('alt') || '',
      });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [openMedia]);

  return (
    <MediaLightboxContext.Provider value={value}>
      {children}
      <Dialog open={Boolean(media)} onOpenChange={(open) => !open && setMedia(null)}>
        <DialogContent
          data-media-lightbox="true"
          showCloseButton={false}
          overlayClassName="bg-black/80"
          overlayChildren={
            <div className="pointer-events-none absolute top-4 left-4 z-10 max-w-[min(72vw,36rem)] pr-16">
              <SiteBrandLockup
                compact
                logoSrc={branding?.logoSrc}
                logoAlt={branding?.logoAlt || branding?.title || 'JD Gold'}
                title={branding?.title}
                subtitle={branding?.subtitle}
              />
            </div>
          }
          className="fixed top-1/2 left-1/2 z-50 flex h-[min(90dvh,820px)] w-[min(92dvw,1200px)] max-w-[92dvw] translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-0 overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none data-[state=open]:zoom-in-100 sm:max-w-[92dvw]"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <DialogTitle className="sr-only">
            {media?.kind === 'video' ? 'Video preview' : 'Image preview'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Enlarged media. Press Escape or use the close control to return to the page.
          </DialogDescription>
          <button
            type="button"
            onClick={() => setMedia(null)}
            className="fixed top-4 right-4 z-20 inline-flex size-11 items-center justify-center rounded-full border border-[#c09038] bg-[#0a0502]/90 text-[#c09038] shadow-[0_0_16px_rgba(192,144,56,0.35)] transition hover:bg-[#c09038] hover:text-[#0a0502] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c09038]"
            aria-label="Close preview"
          >
            <XIcon className="size-6" />
          </button>
          {media?.kind === 'video' ? (
            <video
              key={media.src}
              src={media.src}
              controls
              autoPlay
              playsInline
              className="block max-h-full max-w-full bg-black object-contain transition-opacity duration-500"
              onClick={(event) => event.stopPropagation()}
            >
              {media.alt}
            </video>
          ) : media ? (
            <img
              key={media.src}
              src={media.src}
              alt={media.alt || ''}
              className="block max-h-full max-w-full object-contain transition-opacity duration-500"
              onClick={(event) => event.stopPropagation()}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </MediaLightboxContext.Provider>
  );
}
