'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import me from '../../public/images/about/ME.png';

interface Props {}

const About: FC<Props> = () => {
  return (
    <section id="about" className="min-h-screen w-full pt-60">
      <div className="mx-auto flex items-center justify-between px-5 md:w-2/4 md:justify-evenly">
        <h1 className="text-5xl font-bold text-secondary lg:w-3/5 lg:text-7xl">About Me</h1>
        <Link
          href="https://docs.google.com/document/d/1VhnkfTEZcFpjd51uswrxccZlWiCBumZw/edit?usp=sharing&ouid=106059346458081499165&rtpof=true&sd=true"
          target="_blank"
          className="glass btn pl-2.5 pr-3 text-xl font-bold text-secondary"
        >
          CV
        </Link>
      </div>
      <div className="mt-28 flex-wrap items-center justify-center bg-primary text-center shadow-2xl backdrop-blur md:flex lg:px-20">
        <div className="flex h-2/3 justify-center px-6 md:w-1/2">
          <Image src={me} width="420" height="420" alt="me" />
        </div>
        <div className="mx-auto p-6 md:w-1/2 lg:px-20">
          <p className="text-justify lg:text-lg">
            Hi there! I{'’'}m a full stack software developer with a strong background in development with
            Node.js and React and I have also done some things with Java and Python. Since I was 15 years old
            I{"'"}ve been creating basic HTML websites, android apps and just playing around with tech, I love
            a good challenge and I am always looking for ways to improve my skills, make my stack better and
            create solution to make internet a better place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
