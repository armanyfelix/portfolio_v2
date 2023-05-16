'use client';

import Link from 'next/link';
import { FC } from 'react';
import React from 'react';
import Arrow from '../styles/arrow.module.css';

/**
 * @interface Props
 */
interface Props {}

const Home: FC<Props> = () => {
  return (
    <section className=" h-screen w-full text-white">
      <div className="text-center mx-auto flex flex-col align-middle justify-center h-full">
        <h3 className=" md:text-4xl text-3xl pb-3 text-white">Hi, I{"'"}m Armany</h3>
        <h1 className="items-middle font-bold text-4xl mt-3 md:text-8xl">A Full Stack Developer</h1>
      </div>
      <Link href="#proyects" className="relative border-none bottom-20 mx-auto w-full text-center">
        <p className="pb-4">Check my work</p>
        <div className={Arrow.arrow} />
      </Link>
    </section>
  );
};

export default Home;
