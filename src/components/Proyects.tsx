'use client';

import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Github from './svg/Github';

interface ProyectsProps {}

const data = [
  {
    name: 'Civity CMS',
    description:
      'Civity is a property management software that offers you management tools that facilitate a clear and organized administration. From billing automation, common area reservations, voting, guest control and mouch more.',
    url: 'https://admin.civity.mx/',
    source: '',
    stack: [],
    type: 'web',
    images: ['civity_cms_1.png', 'civity_cms_2.png', 'civity_cms_3.png', 'civity_cms_4.png'],
  },
  {
    name: 'Civity App',
    description:
      "The Civity app is designed for residents of condominiums managed by Civity CMS. You can pay your bills, reserve common areas, vote, report incidents, and stay on top of what's happening in your community.",
    url: 'https://app.civity.mx/',
    stack: [],
    source: '',
    type: 'mobile',
    images: ['civity_app_1.png', 'civity_app_2.png', 'civity_app_3.png', 'civity_app_4.png'],
  },
  {
    name: "Car's bodyshop",
    url: 'https://felixgarages.netlify.app/',
    source: 'https://github.com/armanyfelix/felixgarage',
    description:
      "This is a landing page for a car's bodyshop that has a gallery with they work and different contact methods.",
    images: ['felixgarages_1.png', 'felixgarages_2.png', 'felixgarages_3.png'],
    type: 'web',
    stack: ['React', 'Tailwindcss', 'Express', 'Messenger-chat', 'Google-Maps-api'],
  },
  {
    name: 'Criptos price tracker',
    url: 'https://cripto-quote.netlify.app/',
    source: 'https://github.com/armanyfelix/villatoro',
    type: 'web',
    description:
      'Consult the cryptocompare api to check the information of the most popular cryptocurrencies and you can change it to your local currency.',
    images: ['criptomonedas_1.png', 'criptomonedas_2.png'],
    tecs: ' Html JavaScript Css Normalize Skeleton',
  },
];

const Proyects: FC<ProyectsProps> = () => {
  return (
    <section id="proyects" className="min-h-screen pt-36">
      <div className="mx-auto flex items-center justify-evenly md:w-2/4">
        <h1 className="text-5xl text-secondary lg:w-3/5 lg:text-7xl">Proyects</h1>
        <Link href="https://www.github.com/armanyfelix" target="_blank" className="glass btn px-2">
          <Github />
        </Link>
      </div>
      <div className="mt-36 grid h-full w-full justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((d, i) => (
          <div key={d.name} className="m-3">
            <div className="card glass h-full w-full max-w-[28rem]">
              <figure>
                <div className="carousel-center carousel h-[240px] max-h-[240px] min-h-[240px] w-full">
                  {d.images?.map((img, j) => (
                    <div
                      key={img}
                      id={`proyect-${i}.${j}`}
                      className={`group/item carousel-item relative mx-auto justify-center ${
                        d.type === 'web' ? 'w-full' : 'w-1/4'
                      } `}
                    >
                      <Image
                        src={`/images/proyects/${img}`}
                        width={d.type === 'web' ? 500 : 120}
                        height={300}
                        alt=""
                      />
                      {d.type === 'web' && (
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between opacity-0 duration-300 ease-in group-hover/item:opacity-100">
                          <a
                            href={`#${
                              j === 0 ? `proyect-${i}.${d.images.length - 1}` : `proyect-${i}.${j - 1}`
                            }`}
                            className="btn-circle btn"
                          >
                            ❮
                          </a>
                          <a
                            href={`#${
                              j + 1 === d.images.length ? `proyect-${i}.0` : `proyect-${i}.${j + 1}`
                            }`}
                            className="btn-circle btn"
                          >
                            ❯
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </figure>
              <div className="card-body h-[260px] max-h-[260px] min-h-[260px]">
                <h2 className="card-title">{d.name}</h2>
                <p className="overflow-auto">{d.description}</p>
                <div className="card-actions mt-4 justify-end">
                  {d?.source && (
                    <Link href={d?.source} className="btn-primary btn px-3">
                      <CodeBracketSquareIcon className="h-6 w-6" />
                    </Link>
                  )}
                  <Link href={d.url} target="_blank" className="btn-primary btn px-3">
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
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
