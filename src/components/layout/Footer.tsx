'use client'

import Link from 'next/link'
import Github from '../svg/Github'
import Linkedin from '../svg/Linkedin'

export default function Footer() {
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
            <Linkedin />
          </Link>
          <Link href="https://github.com/armanyfelix/">
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  )
}
