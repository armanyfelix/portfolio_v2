import Link from "next/link"
import Btn from '../styles/customBtn.module.css'
import marquee from "../styles/marquee.module.css"
import github from '../public/icons/github.svg'
import ProyectsData from './proyectsData.module.js'
import Image from "next/image"
import link from '../public/icons/link.svg'

interface Props {
    source: string,
    url: string,
    image: string,
    name: string,
    description: string,
    tecs: string
}

function Proyects() {
    return (
        <section id="proyects" className=" w-full  min-h-screen  p-8 md:pt-4 bg-gray-900">
            <div className="justify-between items-center lg:px-52 flex sm:m-2 md:m-3 lg:m-4 xl:m-5 ">
                <h1 className="text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl items-center font-simplex font-bold">Proyects</h1>
                <Link href="https://www.github.com/armanyfelix" className={Btn.btn}>
                    <span className="font-mono">See all</span>
                </Link>
            </div>
            <div className="mt-12 grid xl:grid-cols-3 xl:mx-20 sm:grid-cols-2 grid-cols-1 items-center justify-center">
                {
                    ProyectsData.map((data) => (
                        <ProyectCard
                            key={data.name}
                            name={data.name}
                            url={data.url}
                            source={data.source}
                            description={data.description}
                            image={data.image}
                            tecs={data.tecs}
                        />
                    ))
                }
            </div>
        </section>
    )
}

function ProyectCard({ source, url, image, name, description, tecs }: Props) {
    return (
        <div className="sm:m-2 md:m-3 lg:m-4 mt-10 relative rounded-lg bg-gray-700 shadow-2xl">
            <div className="relative box-border ">
                <Image src={image} alt="page preview" width="600" height="337" className="rounded-t-lg" />
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-t-lg transition duration-700 ease-in-out 
                backdrop-filter mb-[0.3rem]  backdrop-blur bg-opacity-10 backdrop-brightness-75 bg-gray-900 opacity-0 hover:opacity-100">
                    <div className=" text-white flex flex-wrap content-center h-full p-2 text-center">
                        <p >{description}</p>
                        <div className="overflow-hidden pt-3">
                            <div className={marquee.marquee}>
                                <span>{tecs}</span>
                                <span>{tecs}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-b px-1 flex w-full  justify-between">
                <div className="mt-0.5 md:mt-0">
                    <h1 className="font-mono ml-1 md:text-lg text-sm truncate trun text-indigo-50">{name}</h1>
                </div>
                <div className="">
                    <Link href={source} className="  duration-300 ease-in-out hover:saturate-100 hover:scale-110 saturate-0 brightness-200 hover:brightness-100">
                        <Image src={github} width="30" height="30" alt="github repository" />
                    </Link >
                    <Link href={url}>
                        <Image src={link} width="30" height="30" alt="link to the page" />
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Proyects;
