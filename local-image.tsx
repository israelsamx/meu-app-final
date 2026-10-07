import { useState, type ReactNode } from 'react';
import { imageSlotUrl, type ImageSlot } from '@/assets/images';

export function LocalImage({ slot, alt, className, fallback }: {
  slot: ImageSlot;
  alt: string;
  className: string;
  fallback: ReactNode;
}) {
  const src = imageSlotUrl(slot);
  const [failedSrc, setFailedSrc] = useState<string>();
  if (!src || failedSrc === src) return <>{fallback}</>;
  return <img className={className} src={src} alt={alt} draggable={false} onError={() => setFailedSrc(src)} />;
}