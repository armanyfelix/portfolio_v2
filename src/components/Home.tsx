'use client';

import { FC } from 'react';

/**
 * @interface Props
 */
interface Props {}

const Home: FC<Props> = () => {
  return (
    <section className="h-screen w-full">
      <div className="mx-auto flex h-screen flex-col justify-center pb-10 text-center align-middle text-primary">
        <h3 className="text-2xl font-semibold italic md:text-4xl">Hi, I{"'"}m Armany</h3>
        <h1 className="text-3xl font-bold md:text-7xl lg:text-9xl">Software Engineer</h1>
      </div>
    </section>
  );
};

export default Home;
