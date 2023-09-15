import { Metadata } from 'next'
import { Ysabeau } from 'next/font/google'
import { FC, ReactNode } from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import '../styles/globals.css'

/* eslint new-cap: ["error", { "capIsNew": false }] */
const ysabeau = Ysabeau({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Armany Felix | Portfolio',
  description:
    'Showcase your skills and projects as a software developer with this web portfolio. Learn more about my experience, expertise, and achievements in web development. Contact me for collaboration or consultation.',
}

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={ysabeau.className}>
      <body>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
