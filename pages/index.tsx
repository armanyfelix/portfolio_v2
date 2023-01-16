import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import halo from 'vanta/dist/vanta.halo.min';
import * as THREE from 'three';
import Contact from '../components/Contact';
import Home from '../components/Home';
function Page() {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        halo({
          el: vantaRef.current,
          THREE,

          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 3.0,
          scaleMobile: 1.0,
          color: 0xb5be91,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div>
      <Head>
        <title>Armany Felix | Home</title>
      </Head>
      <Home vantaRef={vantaRef} />
      <Contact />
    </div>
  );
}

// Multiple layouts example

// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default Page;
