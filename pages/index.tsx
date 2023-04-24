import { FC } from 'react';
import Head from 'next/head';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Proyects from '../components/Proyects';

interface Props {}

const Page: FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>Armany Felix | Portfolio</title>
      </Head>
      <div className="w-full">
        <Home />
        <Proyects />
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

// Multiple layouts example
// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default Page;
