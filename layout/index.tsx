import Footer from './Footer';
import Header from './Header';
import { useEffect, useRef, useState } from 'react';
import waves from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

function Layout({ children }: { children: React.ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        waves({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1a1c25,
          shininess: 39.0,
          waveHeight: 19.5,
          waveSpeed: 0.9,
          zoom: 1.1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      <div id="main" ref={vantaRef} className="fixed top-0 right-0 left-0 bottom-0">
        {' '}
      </div>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
