'use client';

import '../styles/globals.css';
import { FC, useEffect, useRef, useState, ReactNode } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import waves from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
// import { Metadata } from 'next';
// import localFont from '@next/font/local';
// import type { ReactElement, ReactNode } from 'react'
// import type { NextPage } from 'next'

// export const metadata: Metadata = {
//   title: 'Armany Felix | Portfolio',
//   description: 'Welcome to Next.js',
// };

interface Props {
  children: ReactNode;
}

// Multiple layouts types example
// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }

// const mohaveFont = localFont({
//   src: [
//     {
//       path: '/public/fonts/Mohave/Mohave-VariableFont_wght.ttf',
//       style: 'normal',
//     },
//     {
//       path: '/public/fonts/Mohave/Mohave-Italic-VariableFont_wght.ttf',
//       style: 'italic',
//     },
//   ],
//   variable: '--font-mohave',
// });

const RootLayout: FC<Props> = ({ children }) => {
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
    <html lang="en">
      <body>
        <div id="main" ref={vantaRef} className="fixed top-0 right-0 left-0 bottom-0">
          {' '}
        </div>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
