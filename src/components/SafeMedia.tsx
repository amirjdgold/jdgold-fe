import { useState, type VideoHTMLAttributes } from 'react';
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
  onError,
  ...videoProps
}: SafeMediaProps) {
  const normalizedSrc = typeof src === 'string' ? src.trim() : '';
  const normalizedPoster =
    typeof posterSrc === 'string' ? posterSrc.trim() : undefined;
  const [failedVideoSrc, setFailedVideoSrc] = useState<string | null>(null);
  const videoFailed = failedVideoSrc === normalizedSrc;

  if (kind !== 'video' || !normalizedSrc || videoFailed) {
    return (
      <SafeImage
        src={kind === 'image' ? normalizedSrc : normalizedPoster}
        alt={alt}
        fallbackSrc={fallbackSrc}
        className={cn(className, imageClassName)}
      />
    );
  }

  return (
    <video
      {...videoProps}
      src={normalizedSrc}
      poster={normalizedPoster}
      aria-label={alt || undefined}
      className={cn(className)}
      playsInline
      muted
      loop
      autoPlay
      preload="metadata"
      onError={(event) => {
        onError?.(event);
        setFailedVideoSrc(normalizedSrc);
      }}
    >
      {alt}
    </video>
  );
}
