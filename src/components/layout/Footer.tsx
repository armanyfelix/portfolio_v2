'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="footer footer-center rounded bg-accent bg-opacity-30 p-10 shadow-xl backdrop-blur-md">
      <div className="grid grid-flow-col gap-4">
        <Link href="#proyects" className="link-hover link">
          Proyects
        </Link>
        <Link href="#about" className="link-hover link">
          About
        </Link>
        <Link href="#contact" className="link-hover link">
          Contact
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://www.linkedin.com/in/armany-felix">
            <Image src="/icons/linkedin.svg" width="40" height="40" alt="logo-linkedIn" />
          </Link>
          <Link href="https://github.com/armanyfelix/">
            <Image src="/icons/github.svg" width="40" height="40" alt="logo-github" />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Armany Felix</p>
      </div>
    </footer>
  )
}

export default Footer
