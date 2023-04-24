'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '../styles/arrow.module.css';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="min-h-[40vh] justify-between flex shadow-xl p-28 backdrop-filter backdrop-blur backdrop-brightness-90 bg-opacity-20 bg-black">
      <div className=" w-1/3 text-right font-bold flex items-end ">
        <div className="text-indigo-100 text-xs md:text-sm flex flex-wrap">
          <p className="px-1">Armany Felix.</p>
          {'©'}
          {new Date().getFullYear()}
          {'  '}
          {'All rights reserved'}
        </div>
      </div>
      <div className="flex items-end">
        <Link
          href="/"
          className="w-1/3 scale-50 md:scale-100 flex flex-col justify-items-start  font-mono text-center"
        >
          <div className="rotate-180">
            <div className={Arrow.arrow} />
          </div>
          <span className="pt-4 inline-block">Go to top</span>
        </Link>
      </div>
      <div className="w-1/3 flex items-end justify-end space-x-3 ">
        <Link href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">
          <Image src="/icons/linkedinF.svg" width="25" height="25" alt="linkedIn" />
        </Link>
        <Link href="https://github.com/armanyfelix/">
          <Image src="/icons/githubF.svg" width="25" height="25" alt="github" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
