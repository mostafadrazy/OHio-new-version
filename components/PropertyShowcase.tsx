import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyGallery from './PropertyGallery';
import { useHomeReducedMotion } from './HomeMotion';

interface Property {
  type: string;
  beds: string;
  baths: string;
  area: string;
  rent: string;
  status: string;
  price: string;
}

/**
 * All listings sit side by side so they can be compared at a glance.
 * On narrower screens the row becomes a swipeable track with previous/next controls.
 */
export default function PropertyShowcase({ properties }: { properties: Property[] }) {
  const reducedMotion = useHomeReducedMotion();
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  const cards = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[];

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setScrollable(track.scrollWidth > track.clientWidth + 4);
    const items = cards();
    if (items.length < 2) return;
    const step = items[1].offsetLeft - items[0].offsetLeft;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setActive(atEnd ? items.length - 1 : Math.max(0, Math.round(track.scrollLeft / step)));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { track.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [update]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const items = cards();
    if (!track || !items.length) return;
    const target = Math.max(0, Math.min(items.length - 1, index));
    track.scrollTo({ left: items[target].offsetLeft - items[0].offsetLeft, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="property-showcase" data-scrollable={scrollable || undefined}>
      <ul ref={trackRef} className="property-track" aria-label="Investment properties"
        tabIndex={scrollable ? 0 : undefined} role={scrollable ? 'region' : undefined}>
        {properties.map((property, index) => (
          <li key={property.type} className="home-property property-card" aria-label={`${property.type}, property ${index + 1} of ${properties.length}`}>
            <PropertyGallery name={property.type} offset={index} />
            <div className="home-property-details">
              <div className="home-property-top">
                <span className={`property-status${property.status === 'Rented' ? ' is-rented' : ''}`}>{property.status}</span>
                <span className="showcase-category">Ohio investment</span>
              </div>
              <h3>{property.type}</h3>
              <p className="home-property-spec">{property.beds} beds <span aria-hidden="true">·</span> {property.baths} baths <span aria-hidden="true">·</span> {property.area} sq ft</p>
              <dl>
                <div><dt>{property.status === 'Rented' ? 'Monthly rent' : 'Planned rent'}</dt><dd>{property.rent}</dd></div>
                <div><dt>Asking price</dt><dd>{property.price}</dd></div>
              </dl>
              <Link to="/contact" className="property-cta">Ask about this property <span aria-hidden="true">↗</span></Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="showcase-navigation" aria-hidden={!scrollable || undefined}>
        <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous property" tabIndex={scrollable ? undefined : -1}><span aria-hidden="true">←</span></button>
        <p aria-live="polite" aria-atomic="true"><span className="showcase-sr-only">Showing property </span><strong>{String(active + 1).padStart(2, '0')}</strong><span> / {String(properties.length).padStart(2, '0')}</span></p>
        <button type="button" onClick={() => goTo(active + 1)} disabled={active === properties.length - 1} aria-label="Next property" tabIndex={scrollable ? undefined : -1}><span aria-hidden="true">→</span></button>
      </div>
    </div>
  );
}
