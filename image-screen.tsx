import { Link } from '@tanstack/react-router';
import { ChevronLeft, Image, Images } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { gallerySlots, screenArtUrl } from '@/assets/images';
import { LocalImage } from '@/components/local-image';

const screenArts: Partial<Record<1 | 2, 'tela2-s'>> = { 1: 'tela2-s' };

export function ImageScreen({ set }: { set: 1 | 2 }) {
  const [carouselRef, api] = useEmblaCarousel({ loop: false, align: 'center', slidesToScroll: 1, skipSnaps: false, duration: 30 });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update();
    api.on('select', update);
    api.on('reInit', update);
    return () => { api.off('select', update); api.off('reInit', update); };
  }, [api]);

  const artName = screenArts[set];
  const artUrl = artName ? screenArtUrl(artName) : undefined;

  const carousel = (
    <section
      className={artUrl ? 'image-carousel art-carousel' : 'image-carousel'}
      aria-label={`Image set ${set}`}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') { event.preventDefault(); api?.scrollNext(); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); api?.scrollPrev(); }
      }}
    >
      <div className="image-viewport" ref={carouselRef}>
        <div className="image-track">
          {gallerySlots[set].map((slot, index) => (
            <div className="image-slide" key={slot} role="group" aria-roledescription="slide" aria-label={`Image ${index + 1} of 3`}>
              <div className="image-placeholder">
                <LocalImage slot={slot} alt={`Set ${set}, image ${index + 1}`} className="gallery-artwork" fallback={<>
                  <Image aria-hidden="true" />
                  <span>Image placeholder {index + 1}</span>
                  <small>Set {set}</small>
                </>} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const pagination = (
    <div className="image-pagination" aria-label="Choose image">
      {[0, 1, 2].map((index) => (
        <Button key={index} variant="appDot" size="appControl" aria-label={`Show image ${index + 1}`} aria-current={selected === index ? 'true' : undefined} onClick={() => api?.scrollTo(index)}>
          <span className="pagination-dot" />
        </Button>
      ))}
    </div>
  );

  return (
    <main className={`app-screen image-screen image-set-${set}`}>
      {artUrl ? (
        <div className="art-stage" aria-hidden="false">
          <img src={artUrl} alt="" aria-hidden="true" draggable={false} className="screen-art" />
          <div className="art-box">
            {carousel}
            <Link to="/" className="art-back-hit" aria-label="Back to home" title="Back to home" />
            {pagination}
          </div>
        </div>
      ) : carousel}
      <header className="image-header">
        <Button asChild variant="appBack" size="appControl" aria-label="Back to home" title="Back to home">
          <Link to="/"><ChevronLeft aria-hidden="true" /></Link>
        </Button>
        <span className="set-symbol" aria-label={`Image set ${set}`}>
          {set === 1 ? <Image aria-hidden="true" /> : <Images aria-hidden="true" />}
        </span>
        <span className="image-counter" aria-live="polite">{selected + 1} / 3</span>
      </header>
      {artUrl ? null : pagination}
    </main>
  );
}
