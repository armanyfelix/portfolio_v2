'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import waves from 'vanta/dist/vanta.waves.min'

export default function Background() {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const [theme] = useState<string>(localStorage.getItem('theme') || 'dark')
  const vantaRef = useRef(null)

  useEffect(() => {
    // window.addEventListener('storage', () => {
    //   setTheme(localStorage.getItem('theme') || 'dark');

    // });
    const init = async () => {
      // let currentTheme = localStorage.getItem('theme') || 'dark';
      // console.log(currentTheme);
      // if (vantaEffect) vantaEffect.destroy();
    }
    init()
    console.log('on effect', theme)
    if (theme) {
      let color = ''
      switch (theme) {
        case 'light':
          color = '#bbbbbb'
          break
        case 'dark':
          color = '#1D232A'
          break
        case 'cupcake':
          color = '#b9b0b0'
          break
        case 'bumblebee':
          color = '#b1abab'
          break
        case 'emerald':
          color = '#bbbbbb'
          break
        case 'corporate':
          color = '#bbbbbb'
          break
        case 'synthwave':
          color = '#1A103C'
          break
        case 'retro':
          color = '#E4D8B4'
          break
        case 'cyberpunk':
          color = '#FFEE00'
          break
        case 'valentine':
          color = '#F0D6E8'
          break
        case 'halloween':
          color = '#212121'
          break
        case 'garden':
          color = '#b3adad'
          break
        case 'forest':
          color = '#171212'
          break
        case 'aqua':
          color = '#345CA8'
          break
        case 'lofi':
          color = '#bbbbbb'
          break
        case 'pastel':
          color = '#bbbbbb'
          break
        case 'fantasy':
          color = '#bbbbbb'
          break
        case 'wireframe':
          color = '#bbbbbb'
          break
        case 'black':
          color = '#000000'
          break
        case 'luxury':
          color = '#09090B'
          break
        case 'dracula':
          color = '#272935'
          break
        case 'cmyk':
          color = '#bbbbbb'
          break
        case 'autumn':
          color = '#c08159'
          break
        case 'business':
          color = '#212121'
          break
        case 'acid':
          color = '#9b9292'
          break
        case 'lemonade':
          color = '#bbbbbb'
          break
        case 'night':
          color = '#0F1729'
          break
        case 'coffee':
          color = '#211720'
          break
        case 'winter':
          color = '#bbbbbb'
          break
      }
      if (!vantaEffect) {
        const effect = waves({
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
        setVantaEffect(effect)
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }
  }, [theme, vantaEffect])

  return (
    <div>
      {theme && (
        <div id="main" ref={vantaRef} className="fixed bottom-0 left-0 right-0 top-0">
          {' '}
        </div>
      )}
    </div>
  )
}
