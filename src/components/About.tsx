'use client'

import Image from 'next/image'
import Link from 'next/link'
import me from '../../public/images/about/ME.png'

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full pt-60">
      <div className="mx-auto mb-28 flex items-center justify-between p-5 md:w-2/4 md:justify-evenly">
        <h1 className="text-5xl font-bold text-secondary lg:w-3/5 lg:text-7xl">About Me</h1>
        <Link
          href="https://drive.google.com/file/d/11lsDIPaB8w48O2L1js_2fI44sOSgCwIU/view?usp=sharing"
          target="_blank"
          className="btn glass btn-circle text-xl font-bold text-secondary shadow-xl lg:btn-lg lg:text-3xl"
        >
          CV
        </Link>
      </div>
      <div className="flex flex-wr w-4/5 rounded-btn mx-auto items-center justify-between bg-accent bg-opacity-30 px-6 lg:px-14 pb-10 text-center shadow-2xl backdrop-blur lg:pb-0 ">
        <div className="lg:w-5/6 py-10">
          <p className="text-left text-neutral antialiased md:text-lg lg:text-xl">
            Hi! I{'’'}m Luis, a full stack software developer with a strong background in development with
            Node.js and React. I studied Mechatronics Engineering at Universidad Nacional de Baja California
            by but I decided to leave it to focus on my career as a programmer on my own.
          </p>
          <p className="text-left text-neutral antialiased md:text-lg lg:text-xl">
            I am a self-taught developer, I have a good knowledge of JavaScript, TypeScript, HTML, CSS, SQL, .
            Since I was 15 years old I{"'"}ve been creating basic HTML websites, android apps and just playing
            around with tech, I love a good challenge and I am always looking for ways to improve my skills,
            make my stack better and create solution to make internet a better place.
          </p>
        </div>
        <div className="mb-6 lg:mb-0 lg:mr-6">
          <Image src={me} width="520" height="320" alt="me" />
        </div>
      </div>
    </section>
  )
}
