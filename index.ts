// Vite bundles original local files, and refreshes this map when artwork is added.
const files = import.meta.glob<string>('./*.{png,jpg,jpeg,webp,avif,svg,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export type ImageSlot =
  | 'home-icon-1' | 'home-icon-2'
  | 'screen2-image-1' | 'screen2-image-2' | 'screen2-image-3'
  | 'screen3-image-1' | 'screen3-image-2' | 'screen3-image-3';

export type ScreenArt = 'tela1-g' | 'tela1-s' | 'tela2-s';

export function imageSlotUrl(slot: ImageSlot): string | undefined {
  const entry = Object.entries(files).find(([path]) => path.slice(2, path.lastIndexOf('.')) === slot);
  return entry?.[1];
}

export function screenArtUrl(art: ScreenArt): string | undefined {
  const entry = Object.entries(files).find(([path]) => path.slice(2, path.lastIndexOf('.')) === art);
  return entry?.[1];
}

export const gallerySlots: Record<1 | 2, readonly ImageSlot[]> = {
  1: ['screen2-image-1', 'screen2-image-2', 'screen2-image-3'],
  2: ['screen3-image-1', 'screen3-image-2', 'screen3-image-3'],
};