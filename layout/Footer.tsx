'use client'

import Link from 'next/link'
import Image from 'next/image'
import Btn from '../styles/customBtn.module.css'

function Footer() {
  return (
    <footer className="bg-gray-900 justify-between flex p-2 md:p-4">
      <div className="w-1/3">
        <Link href="https://www.instagram.com/armanyf/">
          <Image src="/icons/instagramF.svg" width="40" height="30" alt="instagram" />
        </Link>
        <Link href="https://www.linkedin.com/in/luis-armany-felix-vega-9b60241b8/">
          <Image src="/icons/linkedinF.svg" width="40" height="30" alt="linkedIn" />
        </Link>
        <Link href="https://github.com/armanyfelix/">
          <Image src="/icons/githubF.svg" width="40" height="30" alt="github" />
        </Link>
      </div>
      <button className="w-1/3  scale-75 md:scale-100  justify-center font-mono text-center items-center ">
        <Link href="/">
          <div className={Btn.btn}>
            <span>Go to top</span>
          </div>
        </Link>
      </button>
      <div className=" w-1/3 text-right font-simplex font-bold ">
        <div className="text-indigo-100 text-sm">
          <p className="px-1">Armany Felix.</p>
          {'©'}
          {new Date().getFullYear()}
          {'  '}

          {'All rights reserved'}
        </div>
      </div>
    </footer>
  )
}

export default Footer
