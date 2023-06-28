'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Arrow from '../../styles/arrow.module.css';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="bg-black bg-opacity-20 p-5 shadow-xl backdrop-blur backdrop-brightness-90 backdrop-filter">
      <div className="flex justify-center pt-3 text-center md:pt-8">
        <Link href="/" className="flex scale-50 flex-col items-center text-center font-mono md:scale-100">
          <div className="rotate-180">
            <div className={Arrow.arrow} />
          </div>
          <span className="w-32 pt-4">Go to top</span>
        </Link>
      </div>
      <div className="flex items-center justify-between pt-10">
        <div className="flex items-end text-right font-bold">
          <div className="flex flex-wrap text-xs text-indigo-100 md:text-sm">
            <p>Armany Felix.</p>
            {'©'}
            {new Date().getFullYear()}
            {'  '}
            {'All rights reserved'}
          </div>
        </div>
        <div className="flex items-end justify-end space-x-3">
          <Link href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">
            <Image src="/icons/linkedin.svg" width="25" height="25" alt="linkedIn" />
          </Link>
          <Link href="https://github.com/armanyfelix/">
            <Image src="/icons/github.svg" width="25" height="25" alt="github" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
