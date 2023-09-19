'use client'

import Image from 'next/image'
import me from '../../public/images/about/ME.png'
import Header from './common/Header'

export default function About() {
  return (
    <section id="about">
      <Header
        title="About Me"
        button={{
          content: 'CV',
          href: 'https://drive.google.com/file/d/1v9ak1DxxRvnM-n03WpKYsnaMixlxpZ19/view?usp=sharing',
        }}
      />
      <div className="flex w-3/5 rounded-btn mx-auto items-center justify-between bg-accent bg-opacity-30 px-6 lg:px-14 pb-10 text-center shadow-2xl backdrop-blur lg:pb-0 ">
        <div className="lg:w-5/6 py-10">
          <p className="text-left text-neutral antialiased md:text-lg lg:text-lg">
            Hi! I{'’'}m Luis, a full stack software developer with a strong background in development with
            Node.js and React. I studied Mechatronics Engineering at Universidad Nacional de Baja California
            by but I decided to leave it to focus on my career as a programmer on my own.
          </p>
          <p className="text-left text-neutral antialiased md:text-lg lg:text-lg">
            Since I was 15 years old I{"'"}ve been creating basic HTML websites, android apps and just playing
            around with tech, my first lenguage was C++, I love a good challenge and I am always looking for
            ways to improve my skills, make my stack better and create solution to make internet a better
            place.
          </p>
        </div>
        <div className="mb-6 lg:mb-0 lg:ml-6">
          <Image src={me} width="520" height="320" alt="me" />
        </div>
      </div>
    </section>
  )
}
