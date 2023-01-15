import Head from 'next/head'
import Contact from '../components/Contact'
import Home from '../components/Home'
// import type { NextPageWithLayout } from './_app'

const Page = () => {
  return (
    <div>
    <Head>
      <title>Armany Felix | Home</title>
    </Head>
      <Home />
      <Contact />
    </div>
  )
}


// Multiple layouts example

// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default Page
