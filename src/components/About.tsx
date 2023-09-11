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
          href="https://drive.google.com/file/d/11lsDIPaB8w48O2L1js_2fI44sOSgCwIU/view?usp=sharing"
          target="_blank"
          className="btn glass pl-2.5 pr-3 text-xl font-bold text-secondary shadow-xl lg:btn-lg lg:text-3xl"
        >
          CV
        </Link>
      </div>
      <div className="mt-28 flex flex-wrap items-center justify-evenly bg-accent bg-opacity-30 px-6 pb-10 text-center shadow-2xl backdrop-blur lg:pb-0 xl:px-56">
        <div className="mb-6 lg:mb-0 lg:mr-6 ">
          <Image src={me} width="420" height="220" alt="me" />
        </div>
        <div className="lg:w-2/4">
          <p className="text-justify text-neutral antialiased md:text-lg lg:text-xl">
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
