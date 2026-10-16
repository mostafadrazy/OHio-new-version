import React, { forwardRef, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './address-input.css';

export interface PropertyAddress { address: string; city: string; state: string; zip: string }
interface Prediction {
  placeId: string;
  text: { toString(): string };
  mainText?: { toString(): string };
  secondaryText?: { toString(): string };
  toPlace(): { formattedAddress?: string; addressComponents?: Array<{ types: string[]; longText: string; shortText: string }>; fetchFields(options: { fields: string[] }): Promise<unknown> };
}
// Existing Google projects may have Places Legacy enabled without Places (New).
// Keep the configured service usable while supporting the current API when enabled.
let useLegacyPlaces = false;
async function findPredictions(library: any, input: string, sessionToken: unknown): Promise<Prediction[]> {
  if (!useLegacyPlaces) {
    try {
      const response = await library.AutocompleteSuggestion.fetchAutocompleteSuggestions({ input, sessionToken, includedRegionCodes: ['us'], locationBias: { north: 42, south: 38.3, east: -80.5, west: -84.9 } });
      return response.suggestions.map((item: { placePrediction?: Prediction }) => item.placePrediction).filter(Boolean);
    } catch (error) {
      if (!(error instanceof Error) || !/disabled|not been used|not authorized|not activated/i.test(error.message)) throw error;
      useLegacyPlaces = true;
    }
  }
  const response = await new Promise<any>((resolve, reject) => {
    new library.AutocompleteService().getPlacePredictions({ input, sessionToken, types: ['address'], componentRestrictions: { country: 'us' }, locationBias: { north: 42, south: 38.3, east: -80.5, west: -84.9 } }, (predictions: any[], status: string) => {
      if (status === 'OK' || status === 'ZERO_RESULTS') resolve({ predictions: predictions || [] });
      else reject(new Error(status));
    });
  });
  return (response.predictions || []).map((prediction: any): Prediction => ({
    placeId: prediction.place_id, text: prediction.description,
    mainText: prediction.structured_formatting.main_text, secondaryText: prediction.structured_formatting.secondary_text,
    toPlace() {
      const place: ReturnType<Prediction['toPlace']> = {
        async fetchFields() {
          const details: any = await new Promise((resolve, reject) => {
            new library.PlacesService(document.createElement('div')).getDetails({ placeId: prediction.place_id, sessionToken, fields: ['formatted_address', 'address_components'] }, (result: any, status: string) => status === 'OK' ? resolve(result) : reject(new Error(status)));
          });
          place.formattedAddress = details.formatted_address;
          place.addressComponents = details.address_components?.map((component: any) => ({ types: component.types, longText: component.long_name, shortText: component.short_name }));
        },
      };
      return place;
    },
  }));
}
export function sellAddressUrl(value: string, selected?: PropertyAddress | null) {
  const params = new URLSearchParams({ address: value.trim() });
  if (selected) for (const key of ['city', 'state', 'zip'] as const) if (selected[key]) params.set(key, selected[key]);
  return `/sell?${params}`;
}

async function placesLibrary() {
  if (!window.google?.maps?.importLibrary) {
    await new Promise<void>((resolve, reject) => {
      const script = document.querySelector<HTMLScriptElement>('script[src*="maps.googleapis.com/maps/api/js"]');
      const finish = (error?: Error) => { clearTimeout(timer); script?.removeEventListener('load', loaded); script?.removeEventListener('error', failed); error ? reject(error) : resolve(); };
      const loaded = () => finish();
      const failed = () => finish(new Error('Address service unavailable'));
      const timer = window.setTimeout(failed, 6000);
      script?.addEventListener('load', loaded, { once: true });
      script?.addEventListener('error', failed, { once: true });
      if (!script) failed();
    });
  }
  return window.google.maps.importLibrary('places');
}

function withTimeout<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error('Address lookup timed out')), 10000);
    promise.then(value => { clearTimeout(timer); resolve(value); }, error => { clearTimeout(timer); reject(error); });
  });
}

interface Props {
  id: string; value: string; onChange(value: string): void; onSelect?(address: PropertyAddress): void;
  className?: string; placeholder?: string; 'aria-label'?: string;
}
const AddressInput = forwardRef<HTMLInputElement, Props>(function AddressInput({ id, value, onChange, onSelect, className, placeholder = 'Enter your property address…', 'aria-label': ariaLabel }, forwardedRef) {
  const listId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const token = useRef<unknown>(null);
  const request = useRef(0);
  const selectedValue = useRef('');
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [results, setResults] = useState<Prediction[]>([]);
  const [active, setActive] = useState(-1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error' | 'selecting'>('idle');
  const [position, setPosition] = useState<React.CSSProperties>({});
  const open = focused && !dismissed && value.trim().length >= 3 && value !== selectedValue.current;

  useEffect(() => {
    const serial = ++request.current;
    setResults([]); setActive(-1);
    if (!open) { setStatus('idle'); return; }
    setStatus('loading');
    const timer = window.setTimeout(async () => {
      try {
        const library = await placesLibrary();
        if (serial !== request.current) return;
        token.current ??= new library.AutocompleteSessionToken();
        const suggestions = await withTimeout(findPredictions(library, value.trim(), token.current));
        if (serial !== request.current) return;
        setResults(suggestions.slice(0, 5));
        setStatus('ready');
      } catch (error) {
        console.warn('Address suggestions unavailable:', error instanceof Error ? error.message.replace(/key=[^&\s]+/g, 'key=[redacted]') : 'Provider error');
        if (serial === request.current) setStatus('error');
      }
    }, 280);
    return () => { clearTimeout(timer); ++request.current; };
  }, [value, open]);

  useLayoutEffect(() => {
    if (!open) return;
    const update = () => {
      const rect = inputRef.current?.getBoundingClientRect();
      if (!rect) return;
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const width = Math.min(Math.max(rect.width, 340), viewportWidth - 24);
      const below = viewportHeight - rect.bottom - 14;
      const above = rect.top - 14;
      const upwards = below < 240 && above > below;
      setPosition({ position: 'fixed', left: Math.min(Math.max(12, rect.left), viewportWidth - width - 12), width,
        ...(upwards ? { bottom: window.innerHeight - rect.top + 8 } : { top: rect.bottom + 10 }),
        maxHeight: Math.max(100, Math.min(380, upwards ? above : below)) });
    };
    update(); window.addEventListener('resize', update); window.addEventListener('scroll', update, true); window.visualViewport?.addEventListener('resize', update);
    return () => { window.removeEventListener('resize', update); window.removeEventListener('scroll', update, true); window.visualViewport?.removeEventListener('resize', update); };
  }, [open]);

  const select = async (prediction: Prediction) => {
    const serial = ++request.current;
    setStatus('selecting');
    try {
      const place = prediction.toPlace();
      await withTimeout(place.fetchFields({ fields: ['formattedAddress', 'addressComponents'] }));
      if (serial !== request.current) return;
      const part = (type: string, short = false) => {
        const component = place.addressComponents?.find(item => item.types.includes(type));
        return (short ? component?.shortText : component?.longText) || '';
      };
      const address = place.formattedAddress || prediction.text.toString();
      selectedValue.current = address;
      setDismissed(true); setResults([]); setStatus('idle'); token.current = null;
      onChange(address);
      onSelect?.({ address, city: part('locality') || part('postal_town') || part('sublocality_level_1'), state: part('administrative_area_level_1', true), zip: part('postal_code') });
    } catch { if (serial === request.current) setStatus('error'); }
  };
  const message = status === 'error' ? 'Suggestions are unavailable. You can still enter your full address.' : status === 'selecting' ? 'Using this address…' : status === 'loading' ? 'Finding addresses…' : results.length ? `${results.length} suggestions available. Use the arrow keys to choose.` : 'No matches. Try adding your city, or continue with your full address.';
  return <>
    <input ref={element => { inputRef.current = element; if (typeof forwardedRef === 'function') forwardedRef(element); else if (forwardedRef) forwardedRef.current = element; }}
      id={id} name="address" type="text" role="combobox" aria-label={ariaLabel} aria-autocomplete="list" aria-expanded={open} aria-controls={open ? listId : undefined}
      aria-activedescendant={open && active >= 0 ? `${listId}-${active}` : undefined} aria-describedby={`${listId}-hint`}
      className={className} value={value} placeholder={placeholder} required pattern=".*\S.*" title="Enter your property address" autoComplete="off" spellCheck={false}
      onFocus={() => { setFocused(true); setDismissed(false); }} onBlur={() => { setFocused(false); }}
      onChange={event => { ++request.current; selectedValue.current = ''; setDismissed(false); event.target.setCustomValidity(''); onChange(event.target.value); }}
      onKeyDown={event => {
        if (event.nativeEvent.isComposing) return;
        if (event.key === 'Escape') { setDismissed(true); ++request.current; }
        if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && results.length && open) {
          event.preventDefault(); setActive(current => event.key === 'ArrowDown' ? (current + 1) % results.length : (current <= 0 ? results.length - 1 : current - 1));
        }
        if (event.key === 'Enter' && open && active >= 0 && results[active]) { event.preventDefault(); if (status !== 'selecting') void select(results[active]); }
        else if (event.key === 'Enter' && status === 'selecting') event.preventDefault();
      }} />
    <span id={`${listId}-hint`} className="address-sr-only">Type at least three characters for address suggestions. You can also enter the address manually.</span>
    {open && createPortal(<div className="address-dropdown" style={position} onMouseDown={event => event.preventDefault()}>
      <div className="address-dropdown-heading">FIND YOUR PROPERTY</div>
      <ul id={listId} role="listbox" aria-label="Address suggestions" aria-busy={status === 'loading' || status === 'selecting'}>
        {results.map((item, index) => <li key={item.placeId} id={`${listId}-${index}`} role="option" aria-selected={active === index} className={active === index ? 'is-active' : ''}
          onMouseEnter={() => setActive(index)} onClick={() => { if (status !== 'selecting') void select(item); }}>
          <span className="address-result-icon" aria-hidden="true">⌖</span><span><strong>{item.mainText?.toString() || item.text.toString()}</strong><small>{item.secondaryText?.toString()}</small></span>
        </li>)}
      </ul>
      <p className={results.length && status === 'ready' ? 'address-sr-only' : 'address-status'} role="status">{message}</p>
      <div className="address-attribution">Powered by Google</div>
    </div>, document.body)}
  </>;
});
export default AddressInput;
