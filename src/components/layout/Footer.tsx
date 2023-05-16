'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '../../styles/arrow.module.css';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="shadow-xl p-5 backdrop-filter backdrop-blur backdrop-brightness-90 bg-opacity-20 bg-black">
      <div className="flex text-center justify-center pt-3 md:pt-8">
        <Link href="/" className="scale-50 md:scale-100 flex flex-col items-center font-mono text-center">
          <div className="rotate-180">
            <div className={Arrow.arrow} />
          </div>
          <span className="pt-4 w-32">Go to top</span>
        </Link>
      </div>
      <div className="flex items-center justify-between pt-10">
        <div className="flex items-end text-right font-bold">
          <div className="text-indigo-100 text-xs md:text-sm flex flex-wrap">
            <p>Armany Felix.</p>
            {'©'}
            {new Date().getFullYear()}
            {'  '}
            {'All rights reserved'}
          </div>
        </div>
        <div className="flex items-end justify-end space-x-3">
          <Link href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">
            <Image src="/icons/linkedinF.svg" width="25" height="25" alt="linkedIn" />
          </Link>
          <Link href="https://github.com/armanyfelix/">
            <Image src="/icons/githubF.svg" width="25" height="25" alt="github" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
