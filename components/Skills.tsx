import Image from 'next/image'

function Skills() {
  return (
    <section className="  md:p-20 lg:pt-44 p-4 bg-gray-900 lg:min-h-screen  justify-center items-center">
      <div className=" mt-8 lg:mx-52 md:mx-28 ">
        <h1 className="text-3xl font-bold pb-10 text-center text-indigo-300">
          Technologies I{"'"}m working with:
        </h1>
        <div className="sm:flex text-indigo-50 mx-auto  justify-between">
          <ul className="list-none space-y-5 p-5">
            <li className="flex items-center">
              <Image src="/icons/javascript.svg" width="38" height="38" alt="javaScript" />
              <span className="mx-2">JavaScript (ES6+)</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/html5.svg" width="38" height="38" alt="html5" />
              <span className="mx-2">HTML</span>
            </li>
            <li className="flex items-center">
              <Image src="/icons/css3.svg" width="38" height="38" alt="css3" />
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
            <li className="flex items-center">
              <Image src="/icons/mongodb.svg" width="38" height="38" alt="mongoDB" />
              <span className="mx-2">MongoDB</span>
            </li>

            <li className="flex items-center">
              <Image src="/icons/firebase.svg" width="38" height="38" alt="firebase" />
              <span className="mx-2">Firebase</span>
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

export default Skills
