import React from 'react';
import ReactDOM from 'react-dom/client';
import SlimstockLogoAnimation from './components/SlimstockLogoAnimation';

// Dev-only showcase for the animated logo: open /logo-loader-demo.html while `npm run dev` is running
const label: React.CSSProperties = { fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 };
const panel: React.CSSProperties = { display: 'grid', placeItems: 'center', alignContent: 'center', gap: 28, padding: '64px 32px' };

const Demo = () => (
  <div style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr 1fr', fontFamily: 'Outfit, sans-serif', color: '#002d4d' }}>
    <section style={{ ...panel, background: '#fff' }}>
      <SlimstockLogoAnimation width={460} />
      <div style={label}>Logo with text</div>
    </section>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      <section style={{ ...panel, background: '#001a2e', color: '#fff' }}>
        <SlimstockLogoAnimation width={360} onDark />
        <div style={label}>On dark</div>
      </section>
      <section style={{ ...panel, background: '#f4f7fa' }}>
        <SlimstockLogoAnimation showText={false} width={180} />
        <div style={label}>Icon only</div>
      </section>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(<Demo />);
