import Link from 'next/link'
import { FC } from 'react'
import React from 'react'
// import p5 from 'p5'
import Arrow from '../styles/arrow.module.css'
import { useEffect, useRef, useState } from 'react'
import halo from 'vanta/dist/vanta.halo.min'
// import topology from 'vanta/dist/vanta.topology.min'
import * as THREE from 'three'

/**
 * @interface HomeProps
 */
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        halo({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 1000.0,
          minWidth: 1000.0,
          baseColor: 0x1a1c25,
          backgroundColor: 0x90909,
          amplitudeFactor: 0,
          xOffset: 0,
          yOffset: 0,
          size: 1.6,
        })
      )
      // setVantaEffect(
      // topology({
      //   el: vantaRef.current,
      //   p5,
      //   mouseControls: true,
      //   touchControls: true,
      //   gyroControls: false,
      //   minHeight: 200.00,
      //   minWidth: 200.00,
      //   scale: 1.00,
      //   scaleMobile: 1.00,
      //   color: 0x4e6396,
      //   backgroundColor: 0x20202
      // })
      // )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <section id="main" ref={vantaRef} className="w-full h-screen m-0 p-0 text-white">
      <div className="text-center mx-auto pt-96">
        <h3 className=" md:text-4xl font-simplex text-3xl pb-3 text-white">Hi, I{"'"}m Armany</h3>
        <h1 className="items-middle font-simplex font-bold text-4xl mt-3 md:text-6xl">
          A Full Stack Developer
        </h1>
      </div>
      <Link href="#proyects" className="absolute border-none bottom-10 mx-auto w-full text-center">
        <p className="pb-4">Check my work</p>
        <div className={Arrow.arrow} />
      </Link>
    </section>
  )
}

export default Home
