'use client';

import Link from 'next/link';
import Image from 'next/image';
import Btn from '../styles/customBtn.module.css';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
// import marquee from '../styles/marquee.module.css'
// import github from '../public/icons/github.svg'
// import ProyectsData from './proyectsData.module.js'
// import link from '../public/icons/link.svg'

interface ProyectsProps {}

const data = [
  {
    title: 'Civity CMS',
    description:
      'Civity is a property management software that offers you management tools that facilitate a clear and organized administration. From billing automation, common area reservations, voting, guest control and mouch more. Your administration will be more efficient, streamline access to your community information, you will save time and strengthen the management of your Condominiums and Buildings.',
    url: 'https://admin.civity.mx/',
    stack: [],
    type: 'web',
    images: ['civity_cms_1.png', 'civity_cms_2.png', 'civity_cms_3.png', 'civity_cms_4.png'],
  },
  {
    title: 'Civity App',
    description:
      "The Civity app is designed for residents of condominiums managed by Civity CMS. With rhis app, you can pay your bills, reserve common areas, vote on condo decisions, report incidents, and stay on top of what's happening in your community. It is the easiest way to manage your property and access all the services of your condominium.",
    url: 'https://app.civity.mx/',
    stack: [],
    type: 'mobile',
    images: ['civity_app_1.png', 'civity_app_2.png', 'civity_app_3.png', 'civity_app_4.png'],
  },
  // {
  //   name: 'Website and Store',
  //   url: 'https://omar-villatoro.netlify.app/',
  //   source: 'https://github.com/armanyfelix/villatoro',
  //   description:
  //     "This is a website for a artists with a e-commerce to sell they painting, also has a gallery and information about his work's. Maked with MERN stack from scratch.",
  //   images: [],
  //   tecs: ['React', 'Redux', 'MongoDB', 'Express', 'Stripe', 'Taiwindcss'],
  // },
  // {
  //   name: "Car's bodyshop",
  //   url: 'https://felixgarages.netlify.app/',
  //   source: 'https://github.com/armanyfelix/felixgarage',
  //   description:
  //     "This is a landing page for a car's bodyshop that has a gallery with they work and different contact methods.",
  //   images: [],
  //   stack: ['React', 'Tailwindcss', 'Express', 'Messenger-chat', 'Google-Maps-api'],
  // },
];

// const handleProyectScroll = (e: any) => {
//   console.log(e.currentTarget);
// }

const Proyects: FC<ProyectsProps> = () => {
  return (
    <section id="proyects" className="min-h-screen md:pt-24 mt-40">
      <div className="flex justify-between items-center lg:px-52 sm:m-2 md:m-3 lg:m-4 xl:m-5">
        <h1 className="lg:w-3/5 lg:text-8xl md:text-5xl sm:text-3xl text-3xl items-center">Proyects</h1>
        <Link href="https://www.github.com/armanyfelix" target="_blank" className={Btn.btn}>
          <span className="font-mono px-6 text-2xl md:text-4xl">github</span>
        </Link>
      </div>
      <div className="carousel w-full px-5 md:p-20">
        {data.map((p, i) => (
          <div
            key={`proyect${i}`}
            id={`proyect${i}`}
            className="carousel-item relative w-full md:max-h-[80vh] py-20 px-5 md:px-20"
          >
            <div className="lg:flex justify-between p-6 md:p-10 rounded-2xl ring-2 ring-primary bg-primary shadow-xl backdrop-filter backdrop-blur backdrop-brightness-90 bg-opacity-20">
              <div className="lg:w-2/5 md:p-5">
                <Link href="https://www.civity.mx" target="_blank" className="text-6xl">
                  {p.title}
                </Link>
                <p className="text-justify my-6">{p.description}</p>
              </div>
              <div
                className={`md:w-3/5 md:grid ${
                  p.type === 'web' ? 'md:grid-cols-2' : 'grid-flow-col'
                } mx-auto gap-5 my-auto flex overflow-auto`}
              >
                {p.images?.map((url, i) => (
                  <Image
                    src={`/images/proyects/${url}`}
                    key={i}
                    alt=""
                    width={900}
                    height={700}
                    className="rounded-xl max-h-[70vh] w-auto mx-auto mb-5"
                  />
                ))}
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[93%] md:top-1/2">
              <a href={`#proyect${i === 0 ? data.length - 1 : i - 1}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#proyect${i === data.length - 1 ? 0 : i + 1}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// function ProyectCard({ source, url, image, name, description, tecs }: Props) {
//   return (
//     <div className="sm:m-2 md:m-3 lg:m-4 mt-10 relative rounded-lg bg-gray-700 shadow-2xl">
//       <div className="relative box-border">
//         <Image src={image} alt="page preview" width="600" height="337" className="rounded-t-lg" />
//         <div
//           className="absolute top-0 bottom-0 left-0 right-0 rounded-t-lg transition duration-700 ease-in-out
//                 backdrop-filter mb-[0.3rem]  backdrop-blur bg-opacity-10 backdrop-brightness-75 bg-gray-900 opacity-0 hover:opacity-100"
//         >
//           <div className=" text-white flex flex-wrap content-center h-full p-2 text-center">
//             <p>{description}</p>
//             <div className="overflow-hidden pt-3">
//               <div className={marquee.marquee}>
//                 <span>{tecs}</span>
//                 <span>{tecs}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-b px-1 flex w-full  justify-between">
//         <div className="mt-0.5 md:mt-0">
//           <h1 className="font-mono ml-1 md:text-lg text-sm truncate trun text-indigo-50">{name}</h1>
//         </div>
//         <div className="">
//           <Link
//             href={source}
//             className="  duration-300 ease-in-out hover:saturate-100 hover:scale-110 saturate-0 brightness-200 hover:brightness-100"
//           >
//             <Image src={github} width="30" height="30" alt="github repository" />
//           </Link>
//           <Link href={url}>
//             <Image src={link} width="30" height="30" alt="link to the page" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Proyects;
