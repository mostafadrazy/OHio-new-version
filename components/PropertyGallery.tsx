import React, { useRef, useState } from 'react';

const photos = [
  { id: 'photo-1568605114967-8130f3a36994', alt: 'Illustrative house exterior with a front garden' },
  { id: 'photo-1600607686527-6fb886090705', alt: 'Illustrative renovated kitchen and living space' },
  { id: 'photo-1600210492486-724fe5c67fb0', alt: 'Illustrative furnished living room' },
];

export default function PropertyGallery({ name, offset = 0 }: { name: string; offset?: number }) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const change = (direction: number) => setIndex(current => (current + direction + photos.length) % photos.length);
  return (
    <div className="property-gallery" role="region" aria-roledescription="carousel" aria-label={`${name} illustrative photos`}
      onTouchStart={event => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={event => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 45) change(distance < 0 ? 1 : -1);
        touchStart.current = null;
      }}
      onTouchCancel={() => { touchStart.current = null; }}>
      {photos.map((photo, slide) => {
        const image = photos[(slide + offset) % photos.length];
        return <img key={photo.id} src={`https://images.unsplash.com/${image.id}?auto=format&fit=crop&w=800&q=85`} alt={image.alt} className={slide === index ? 'is-current' : ''} aria-hidden={slide !== index} loading="lazy" draggable={false} />;
      })}
      <span className="property-photo-label">Illustrative photos</span>
      <button type="button" className="property-gallery-arrow previous" onClick={() => change(-1)} aria-label={`Previous photo of ${name}`}><span aria-hidden="true">‹</span></button>
      <button type="button" className="property-gallery-arrow next" onClick={() => change(1)} aria-label={`Next photo of ${name}`}><span aria-hidden="true">›</span></button>
      <div className="property-gallery-bottom"><div className="property-gallery-dots">{photos.map((photo, slide) => <button key={photo.id} type="button" aria-label={`Show photo ${slide + 1} of ${name}`} aria-pressed={slide === index} onClick={() => setIndex(slide)}><span /></button>)}</div><span aria-live="polite" aria-atomic="true">{index + 1} / {photos.length}</span></div>
    </div>
  );
}
