import '../styles/globals.css'
import localFont from '@next/font/local'
// import type { ReactElement, ReactNode } from 'react'
// import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '../layout'

// Multiple layouts types example
// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }

const mohaveFont = localFont({
  src: [
    {
      path: '../public/fonts/Mohave/Mohave-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Mohave/Mohave-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-mohave',
})

export default function App({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Layout mohaveFont={`${mohaveFont.variable} font-mohave`}>
    <main className={`${mohaveFont.variable} font-mohave`}>
      <Component {...pageProps} />
    </main>
    </Layout>
  )
}
