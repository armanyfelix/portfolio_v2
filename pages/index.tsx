import Head from 'next/head'
import Contact from '../components/Contact'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
// import Proyects from '../components/Proyects'

function Page() {
  return (
    <div>
      <Head>
        <title>Armany Felix | Home</title>
      </Head>
      <Home />
      {/* <Proyects /> */}
      <About />
      <Skills />
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
