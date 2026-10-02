import { useState, type KeyboardEvent, type VideoHTMLAttributes } from 'react';
import { canPreviewMedia } from '@/components/media-lightbox/canPreviewMedia';
import { useMediaLightbox } from '@/components/media-lightbox/MediaLightbox';
import SafeImage, { DEFAULT_IMAGE_FALLBACK } from '@/components/SafeImage';
import { cn } from '@/lib/utils';

export type SafeMediaKind = 'image' | 'video';

type SafeMediaProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src' | 'poster'> & {
  src?: string | null;
  kind?: SafeMediaKind;
  alt?: string;
  posterSrc?: string | null;
  fallbackSrc?: string;
  imageClassName?: string;
  preview?: boolean;
};

/** Render CMS media without broken images or an unusable failed video frame. */
export default function SafeMedia({
  src,
  kind = 'image',
  alt = '',
  posterSrc,
  fallbackSrc = DEFAULT_IMAGE_FALLBACK,
  className,
  imageClassName,
  preview = true,
  onError,
  onClick,
  onKeyDown,
  ...videoProps
}: SafeMediaProps) {
  const normalizedSrc = typeof src === 'string' ? src.trim() : '';
  const normalizedPoster =
    typeof posterSrc === 'string' ? posterSrc.trim() : undefined;
  const [failedVideoSrc, setFailedVideoSrc] = useState<string | null>(null);
  const videoFailed = failedVideoSrc === normalizedSrc;
  const lightbox = useMediaLightbox();

  if (kind !== 'video' || !normalizedSrc || videoFailed) {
    return (
      <SafeImage
        src={kind === 'image' ? normalizedSrc : normalizedPoster}
        alt={alt}
        fallbackSrc={fallbackSrc}
        preview={preview}
        className={cn(className, imageClassName)}
      />
    );
  }

  const canOpen = preview && Boolean(lightbox) && canPreviewMedia(normalizedSrc);
  const openPreview = () => {
    if (!canOpen || !lightbox) return;
    lightbox.openMedia({ kind: 'video', src: normalizedSrc, alt });
  };

  return (
    <video
      {...videoProps}
      src={normalizedSrc}
      poster={normalizedPoster}
      aria-label={alt || undefined}
      data-preview={canOpen ? 'true' : 'false'}
      data-media-preview={canOpen ? 'video' : undefined}
      className={cn(className, canOpen && 'pointer-events-auto cursor-zoom-in')}
      playsInline
      muted
      loop
      autoPlay
      preload="metadata"
      tabIndex={canOpen ? 0 : videoProps.tabIndex}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || !canOpen) return;
        event.preventDefault();
        event.stopPropagation();
        openPreview();
      }}
      onKeyDown={(event: KeyboardEvent<HTMLVideoElement>) => {
        onKeyDown?.(event);
        if (event.defaultPrevented || !canOpen) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openPreview();
        }
      }}
      onError={(event) => {
        onError?.(event);
        setFailedVideoSrc(normalizedSrc);
      }}
    >
      {alt}
    </video>
  );
}
