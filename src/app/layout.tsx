import '../styles/globals.css';
import { FC, ReactNode } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Metadata } from 'next';
import Background from '../components/layout/Background';
// import localFont from '@next/font/local';
// import type { ReactElement, ReactNode } from 'react'
// import type { NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Armany Felix | Portfolio',
  description: 'Welcome to Next.js',
};

interface Props {
  children: ReactNode;
}

// Multiple layouts types example
// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }

// const mohaveFont = localFont({
//   src: [
//     {
//       path: '/public/fonts/Mohave/Mohave-VariableFont_wght.ttf',
//       style: 'normal',
//     },
//     {
//       path: '/public/fonts/Mohave/Mohave-Italic-VariableFont_wght.ttf',
//       style: 'italic',
//     },
//   ],
//   variable: '--font-mohave',
// });

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
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
