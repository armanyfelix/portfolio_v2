import '../styles/globals.css';
import { FC, ReactNode } from 'react';
import { Ysabeau } from 'next/font/google';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Metadata } from 'next';
import Background from '../components/layout/Background';

/* eslint new-cap: ["error", { "capIsNew": false }] */
const ysabeau = Ysabeau({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Armany Felix | Portfolio',
  description:
    'I’m a software developer with a passion for creating innovative solutions that make people’s lives easier.',
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={ysabeau.className}>
      <body>
        <Background />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
