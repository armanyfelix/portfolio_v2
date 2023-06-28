'use client';

// import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Github from './svg/Github';

interface ProyectsProps {}

// const data = [
//   {
//     name: 'Civity CMS',
//     description:
//       'Civity is a property management software that offers you management tools that facilitate a clear and organized administration. From billing automation, common area reservations, voting, guest control and mouch more. Your administration will be more efficient, streamline access to your community information, you will save time and strengthen the management of your Condominiums and Buildings.',
//     url: 'https://admin.civity.mx/',
//     stack: [],
//     type: 'web',
//     images: ['civity_cms_1.png', 'civity_cms_2.png', 'civity_cms_3.png', 'civity_cms_4.png'],
//   },
//   {
//     name: 'Civity App',
//     description:
//       "The Civity app is designed for residents of condominiums managed by Civity CMS. With rhis app, you can pay your bills, reserve common areas, vote on condo decisions, report incidents, and stay on top of what's happening in your community. It is the easiest way to manage your property and access all the services of your condominium.",
//     url: 'https://app.civity.mx/',
//     stack: [],
//     type: 'mobile',
//     images: ['civity_app_1.png', 'civity_app_2.png', 'civity_app_3.png', 'civity_app_4.png'],
//   },
//   // {
//   //   name: 'Website and Store',
//   //   url: 'https://omar-villatoro.netlify.app/',
//   //   type: 'web',
//   //   source: 'https://github.com/armanyfelix/villatoro',
//   //   description:
//   //     "This is a website for a artists with a e-commerce to sell they painting, also has a gallery and information about his work's. Maked with MERN stack from scratch.",
//   //   images: [],
//   //   tecs: ['React', 'Redux', 'MongoDB', 'Express', 'Stripe', 'Taiwindcss'],
//   // },
//   {
//     name: "Car's bodyshop",
//     url: 'https://felixgarages.netlify.app/',
//     source: 'https://github.com/armanyfelix/felixgarage',
//     description:
//       "This is a landing page for a car's bodyshop that has a gallery with they work and different contact methods.",
//     images: [],
//     stack: ['React', 'Tailwindcss', 'Express', 'Messenger-chat', 'Google-Maps-api'],
//   },
// ];

const Proyects: FC<ProyectsProps> = () => {
  return (
    <section id="proyects" className="min-h-screen">
      <div className="mx-auto flex w-2/4 translate-y-72 items-center justify-evenly">
        <h1 className="text-3xl text-secondary sm:text-3xl md:text-5xl lg:w-3/5 lg:text-7xl">Proyects</h1>
        <Link href="https://www.github.com/armanyfelix" target="_blank" className="glass btn">
          <Github />
        </Link>
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
