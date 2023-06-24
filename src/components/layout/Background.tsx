'use client';

import { useEffect, useRef, useState } from 'react';
import waves from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

export default function Background() {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page)
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
          gyroControls: true,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 0.5,
          color: 0x25252c,
          shininess: 39.0,
          waveHeight: 19.0, 
          waveSpeed: 0.7,
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
    </div>
  );
}
