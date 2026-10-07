import { createFileRoute, Link } from '@tanstack/react-router';
import { Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LocalImage } from '@/components/local-image';
import { screenArtUrl } from '@/assets/images';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Personal Gallery · Home' },
    { name: 'description', content: 'Your two personal image collections.' },
    { property: 'og:title', content: 'Personal Gallery · Home' },
    { property: 'og:description', content: 'Your two personal image collections.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
  ] }),
  component: Index,
});

function Index() {
  const artUrl = screenArtUrl('tela1-g');
  return (
    <main className="app-screen home-screen art-home" aria-label="Personal gallery home">
      {artUrl ? (
        <div className="art-stage" aria-hidden="false">
          <img src={artUrl} alt="" aria-hidden="true" draggable={false} className="screen-art" />
          <div className="art-box">
            <Link to="/set-1" className="home-cnh-hit" aria-label="Abrir CNH" title="Abrir CNH" />
          </div>
        </div>
      ) : (
        <div className="home-actions">
          <Button asChild variant="albumFirst" size="album" aria-label="Abrir CNH" title="Abrir CNH">
            <Link to="/set-1"><LocalImage slot="home-icon-1" alt="" className="home-artwork" fallback={<Image aria-hidden="true" strokeWidth={1.5} />} /></Link>
          </Button>
        </div>
      )}
    </main>
  );
}
