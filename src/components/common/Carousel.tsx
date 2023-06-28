import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  data: {
    name: string;
    description: string;
    images: string[];
    type: string;
  }[];
}

const Carousel: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="carousel-center carousel rounded-box mx-auto w-full">
        {data.map((p, i) => (
          <div key={`proyect_${i + 1}`} id={`proyect_${i + 1}`} className="carousel-item relative w-full">
            <div className="mx-auto mt-[14vh] max-h-[80vh] max-w-[90vw] justify-between rounded-2xl bg-primary bg-opacity-20 p-4 shadow-xl ring-2 ring-primary backdrop-blur backdrop-brightness-90 backdrop-filter md:mt-[30vh] md:w-2/3 md:max-w-screen-2xl lg:flex">
              <div className="md:p-5 lg:w-2/5">
                <Link href="https://www.civity.mx" target="_blank" className="text-4xl md:text-6xl">
                  {p.name}
                </Link>
                <p className="my-6 text-justify leading-4 subpixel-antialiased ">{p.description}</p>
              </div>
              <div
                className={`md:grid md:w-3/5 ${
                  p.type === 'web' ? 'md:grid-cols-2' : 'grid-flow-col'
                } mx-auto my-auto flex gap-5 overflow-auto`}
              >
                {p.images?.map((url, i) => (
                  <Image
                    src={`/images/proyects/${url}`}
                    key={i}
                    alt=""
                    width={900}
                    height={700}
                    className="mx-auto mb-5 max-h-fit w-auto rounded-xl "
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-1/4 left-64 right-64 flex -translate-y-1/3 transform justify-between">
              <a href={`#proyect_${i === 0 ? data.length : i}`} className="btn-circle btn">
                ❮
              </a>
              <a href={`#proyect_${data.length === i + 1 ? 1 : i + 2}`} className="btn-circle btn">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex w-full items-center justify-center gap-2">
        {data.map((p, i) => (
          <a key={p.name} href={`#proyect_${i + 1}`} className="btn-xs btn">
            {i + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default Carousel;
