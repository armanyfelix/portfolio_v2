'use client';

import { useEffect, useRef, useState } from 'react';
import waves from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  // const [theme, setTheme] = useState<string>('');
  const vantaRef = useRef(null);

  useEffect(() => {
    let theme = '';
    async function init() {
      theme = (await localStorage.getItem('theme')) || 'dark';
      // if (vantaEffect) vantaEffect.destroy();
    }
    init();
    if (theme) {
      let color = '';
      switch (theme) {
        case 'light':
          color = '#FFFFFF';
          break;
        case 'dark':
          color = '#1D232A';
          break;
        case 'cupcake':
          color = '#FAF7F5';
          break;
        case 'bumblebee':
          color = '#FFFFFF';
          break;
        case 'emerald':
          color = '#FFFFFF';
          break;
        case 'corporate':
          color = '#FFFFFF';
          break;
        case 'synthwave':
          color = '#1A103C';
          break;
        case 'retro':
          color = '#E4D8B4';
          break;
        case 'cyberpunk':
          color = '#FFEE00';
          break;
        case 'valentine':
          color = '#F0D6E8';
          break;
        case 'halloween':
          color = '#212121';
          break;
        case 'garden':
          color = '#E9E7E7';
          break;
        case 'forest':
          color = '#171212';
          break;
        case 'aqua':
          color = '#345CA8';
          break;
        case 'lofi':
          color = '#FFFFFF';
          break;
        case 'pastel':
          color = '#FFFFFF';
          break;
        case 'fantasy':
          color = '#FFFFFF';
          break;
        case 'wireframe':
          color = '#FFFFFF';
          break;
        case 'black':
          color = '#000000';
          break;
        case 'luxury':
          color = '#09090B';
          break;
        case 'dracula':
          color = '#272935';
          break;
        case 'cmyk':
          color = '#FFFFFF';
          break;
        case 'autumn':
          color = '#F2F2F2';
          break;
        case 'business':
          color = '#212121';
          break;
        case 'acid':
          color = '#FAFAFA';
          break;
        case 'lemonade':
          color = '#FFFFFF';
          break;
        case 'night':
          color = '#0F1729';
          break;
        case 'coffee':
          color = '#211720';
          break;
        case 'winter':
          color = '#FFFFFF';
          break;
      }
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
            color,
            shininess: 30,
            waveHeight: 30,
            waveSpeed: 0.7,
            zoom: 1,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, [vantaEffect]);

  return (
    <div>
      <div id="main" ref={vantaRef} className="fixed top-0 right-0 left-0 bottom-0">
        {' '}
      </div>
    </div>
  );
}
