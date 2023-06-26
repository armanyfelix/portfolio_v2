'use client';

// import Link from 'next/link';
import { FC } from 'react';
// import Arrow from '../styles/arrow.module.css';

/**
 * @interface Props
 */
interface Props {}

const Home: FC<Props> = () => {
  return (
    <section className=" h-screen w-full">
      <div className="mx-auto flex h-full flex-col justify-center text-center align-middle">
        <h3 className=" pb-3 text-3xl md:text-4xl">Hi, I{"'"}m Armany</h3>
        <h1 className="items-middle mt-3 text-4xl font-bold md:text-8xl">Software Engineer</h1>
      </div>
      {/* <Link href="#proyects" className="relative border-none bottom-20 mx-auto w-full text-center">
        <p className="pb-4">Check my work</p>
        <div className={Arrow.arrow} />
      </Link> */}
    </section>
  );
};

export default Home;
