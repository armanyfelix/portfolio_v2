'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import me from '../../public/images/about/ME.png';

interface Props {}

const About: FC<Props> = () => {
  return (
    <section id="about" className="min-h-screen w-full">
      <div className="mx-auto flex w-2/4 items-center justify-evenly">
        <h1 className="text-3xl text-secondary sm:text-3xl md:text-5xl lg:w-3/5 lg:text-7xl">About Me</h1>
        <Link
          href="https://docs.google.com/document/d/1VhnkfTEZcFpjd51uswrxccZlWiCBumZw/edit?usp=sharing&ouid=106059346458081499165&rtpof=true&sd=true"
          target="_blank"
          className="glass btn pl-2.5 pr-3 text-xl font-bold text-secondary"
        >
          CV
        </Link>
      </div>
      <div className="mt-28 flex-wrap items-center justify-center bg-opacity-5 text-center shadow-2xl backdrop-blur-sm md:flex lg:px-20">
        <div className="flex h-2/3 justify-center md:w-1/2">
          <Image src={me} width="420" height="420" alt="me" />
        </div>
        <div className="mx-auto p-6 md:w-1/2 lg:px-20">
          <p className="text-justify text-base lg:text-lg ">
            Hi there! I{'’'}m a software developer with the mission of creating innovative solutions that make
            people{'’'}s lives easier. Since I was 15 years old I{"'"}ve been creating basic HTML websites,
            android apps and just playing around with tech, I love a good challenge and I am always looking
            for ways to improve my skills and push the boundaries of what{'’'}s possible.
          </p>
          {/* <p className="text-justify lg:text-lg md:text-base text-white">
            With a strong background in both front-end and back-end development, I am experienced in working
            with Node.js, Express, Nest.js, MongoDB, MySQL, API rest and GraphQL to create robust and scalable
            solutions. Additionally, I have a deep understanding of cloud-based technologies such as AWS, and
            I am well-versed in managing servers and containers with tools such as cPanel, Nginx, VPS servers,
            and Docker.
          </p> */}
          {/* <p className="text-justify lg:text-lg md:text-base text-white">
            I am a driven individual who is constantly seeking new challenges and opportunities to expand my
            skillset and knowledge. My passion for technology and my commitment to delivering high-quality
            solutions are what drive me to excel in this field.
          </p>
          <p className="text-justify lg:text-lg md:text-base text-white">
            Whether you{"'"}re looking for a dynamic and creative web developer to bring your ideas to life,
            or a dependable and knowledgeable team member to help you tackle complex projects, I am confident
            that I have the skills and experience to deliver results.
          </p>
          <p className="text-justify lg:text-lg md:text-base text-white">
            Thank you for visiting my portfolio website, I hope one day we can work together.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
