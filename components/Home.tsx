import Link from "next/link";
import { FC } from "react";
import Arrow from '../styles/arrow.module.css'


interface HomeProps {
  vantaRef: any;
}

const Home: FC<HomeProps> = ({ vantaRef }) => {
  return (
    <section id="main" ref={vantaRef} className="w-full h-screen m-0 p-0 text-white">
      <div className="text-center mx-auto pt-64">
        <h3 className=" md:text-4xl font-simplex text-3xl pb-3 text-white">
          Hi, I{"'"}m Armany
        </h3>
        <h1 className="items-middle font-simplex font-bold text-4xl mt-3 md:text-6xl">
          A Full Stack Developer
        </h1>
  
      </div>
      <Link href="#proyects" className="absolute border-none bottom-10 mx-auto w-full text-center">
        <p className="pb-4">
          Check my work
        </p>
        <div className={Arrow.arrow} />
      </Link>
    </section>
  );
}

export default Home;
