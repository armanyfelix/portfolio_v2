'use client'

import Image from 'next/image'

export default function Skills() {
  return (
    <section className="mx-auto my-32 items-center justify-center md:w-2/3">
      <div className="mx-auto mb-28 mt-10 xl:w-2/3">
        <div className="mx-auto flex items-center justify-between px-5 md:w-2/4 md:justify-evenly">
          <h1 className="text-5xl font-bold text-secondary lg:w-3/5 lg:text-7xl">Technologies</h1>
        </div>
        <div className="flex flex-col flex-wrap items-center mt-10 justify-center md:flex-row md:justify-between">
          <ul className="list-none space-y-5 p-5">
            <li className="flex items-center">
              <Image src="/icons/javascript.svg" width="38" height="38" alt="javaScript" />
              <span className="mx-2">JavaScript</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/html.svg" width="38" height="38" alt="html5" />
              <span className="mx-2">HTML</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/css.svg" width="38" height="38" alt="css3" />
              <span className="mx-2">CSS</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/node-js.svg" width="38" height="38" alt="nodejs" />
              <span className="mx-2">Node.js</span>
            </li>
          </ul>
          <ul className="list-none space-y-5 p-5">
            <li className="flex items-center">
              <Image src="/icons/react.svg" width="38" height="38" alt="reactjs" />
              <span className="mx-2">React</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/next-js.svg" width="38" height="38" alt="nextjs" />
              <span className="mx-2">Next.js</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/typescript.svg" width="38" height="38" alt="TypeScript" />
              <span className="ml-2">TypeScript</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/tailwindcss.svg" width="38" height="38" alt="tailwindcss" />
              <span className="mx-2">Tailwindcss</span>
            </li>
          </ul>
          <ul className="list-none space-y-5 p-5">
            <li className="flex items-center">
              <Image src="/icons/mysql.svg" width="38" height="38" alt="mysql" />
              <span className="mx-2">MySQL</span>
            </li>
            {/* <li className="flex items-center">
              <Image src="/icons/mongodb.svg" width="38" height="38" alt="mongoDB" />
              <span className="mx-2">MongoDB</span>
            </li> */}
            <li className="flex items-center">
              <Image src="/icons/supabase.svg" width="38" height="38" alt="firebase" />
              <span className="mx-2">Supabase</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/docker.svg" width="38" height="38" alt="docker" />
              <span className="mx-2">Docker</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
