'use client'

import Image from 'next/image'
import me from '../../public/images/ME.png'
import Header from './common/Header'

export default function About() {
  return (
    <section id="about">
      <Header
        title="About Me"
        button={{
          label: 'CV',
          href: 'https://drive.google.com/file/d/1v9ak1DxxRvnM-n03WpKYsnaMixlxpZ19/view?usp=sharing',
        }}
      />
      <div className="flex flex-col-reverse xl:flex-row md:w-3/5 antialiased rounded-box mx-3 md:mx-auto items-center justify-between bg-accent bg-opacity-30 text-center shadow-2xl backdrop-blur">
        <div className="lg:w-5/6 pb-10 lg:ml-6 px-6 md:pt-10 text-left font-sans tracking-tighter text-neutral">
          <p>
            Hi! I{'’'}m Luis, a full stack software developer with a strong background in development with
            Node.js and React. I studied Mechatronics Engineering at Universidad Nacional de Baja California
            by but I decided to leave it to focus on my career as a programmer on my own.
          </p>
          <br />
          <p>
            Since I was 15 years old I{"'"}ve been creating basic HTML websites, android apps and just playing
            around with tech, my first lenguage was C++, I love challenges and I am always looking for ways to
            improve my skills, make my stack better and create solutions to make the web even better.
          </p>
        </div>
        <div className="mb-6 lg:mb-0 lg:mr-6 bg-black/30 lg:bg-transparent w-full rounded-t-box shadow-2xl lg:shadow-none">
          <Image src={me} width="420" height="320" alt="me" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}
