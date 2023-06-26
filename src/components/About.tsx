'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import me from '../../public/images/about/ME.png';
import resumen from '../styles/customBtn.module.css';

interface Props {}

const About: FC<Props> = () => {
  return (
    <section id="about" className="mt-40 min-h-screen w-full">
      <div className="flex items-center justify-between px-10 sm:m-2 md:m-3 lg:m-4 lg:px-52 xl:m-5">
        <h1 className="items-center text-3xl sm:text-3xl md:text-5xl lg:text-8xl">About Me</h1>
        <Link href="https://docs.google.com/document/d/1VhnkfTEZcFpjd51uswrxccZlWiCBumZw/edit?usp=sharing&ouid=106059346458081499165&rtpof=true&sd=true">
          <button className={resumen.btn}>
            <span className="px-9 pb-1.5 font-mono text-base sm:text-2xl md:text-2xl">Resumen</span>
          </button>
        </Link>
      </div>
      <div className="mt-28 flex-wrap items-center justify-center bg-opacity-5 text-center shadow-2xl backdrop-blur-sm md:flex lg:px-20">
        <div className="flex h-2/3 justify-center md:w-1/2">
          <Image src={me} width="420" height="420" alt="me" />
        </div>
        <div className="mx-auto p-6 md:w-1/2 lg:px-20">
          <p className="text-justify text-base lg:text-lg ">
            Hi there! I{'’'}m a software developer with a passion for creating innovative solutions that make
            people{'’'}s lives easier. Since I was 15 years old I{"'"}ve been creating basic HTML websites,
            android apps and just play around with tech, when I{'’'}m not coding away at my computer, you can
            find me exploring new technologies, tinkering with gadgets, or playing video games. I love a good
            challenge and am always looking for ways to improve my skills and push the boundaries of what{'’'}
            s possible. So if you{'’'}re looking for a developer who{'’'}s equal parts creative and technical,
            look no further - I{'’'}m your person!
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
