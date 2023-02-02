import Link from 'next/link'
import { FC } from 'react'
import React from 'react'
import Arrow from '../styles/arrow.module.css'
import { useEffect, useRef, useState } from 'react'
import waves from 'vanta/dist/vanta.waves.min'
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
          waveSpeed: 1.1,
          zoom: 1.1,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <section id="main" ref={vantaRef} className="w-full h-screen m-0 p-0 text-white">
      <div className="text-center mx-auto flex flex-col align-middle justify-center h-full">
        <h3 className=" md:text-4xl text-3xl pb-3 text-white">Hi, I{"'"}m Armany</h3>
        <h1 className="items-middle font-bold text-4xl mt-3 md:text-6xl">A Full Stack Developer</h1>
      </div>
      <Link href="#about" className="absolute border-none bottom-10 mx-auto w-full text-center">
        <p className="pb-4">Check my work</p>
        <div className={Arrow.arrow} />
      </Link>
    </section>
  )
}

export default Home
